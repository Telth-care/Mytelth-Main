/**
 * API submission service for Telth forms.
 * Connects frontend forms to the unified backend endpoint:
 * http://192.168.1.235:3000/api/submit
 *
 * Payloads are differentiated via the `formType` field:
 * - Orientation Form: `formType: "orientation"`
 * - Contact / Enquiry Form: `formType: "contact"`
 * - Care Manager Application: `formType: "care_manager_application"`
 */

export const DEFAULT_SUBMIT_ENDPOINT =
  import.meta.env.VITE_SUBMISSION_API_ENDPOINT ||
  import.meta.env.VITE_ORIENTATION_API_ENDPOINT ||
  "http://192.168.1.235:3000/api/submit";

export const SUBMISSION_ENDPOINT = DEFAULT_SUBMIT_ENDPOINT;
export const ORIENTATION_SUBMISSION_ENDPOINT =
  import.meta.env.VITE_ORIENTATION_API_ENDPOINT || DEFAULT_SUBMIT_ENDPOINT;
export const CONTACT_SUBMISSION_ENDPOINT =
  import.meta.env.VITE_CONTACT_API_ENDPOINT || DEFAULT_SUBMIT_ENDPOINT;

export interface OrientationFormData {
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  message: string;
}

export interface ContactFormData {
  fullName: string;
  organisation?: string;
  email: string;
  phone?: string;
  country?: string;
  contactMethod?: string;
  enquiryType: string;
  role: string;
  message: string;
}

export interface CmApplicationFormData {
  fullName: string;
  mobile: string;
  email: string;
  location: string;
  skills?: string;
  skillIndia: string;
  qualification: string;
  experience: string;
  languages?: string;
  employmentStatus?: string;
  availability: string;
}

export type FormType = "orientation" | "contact" | "care_manager_application";

export interface FormSubmissionPayload {
  formType: FormType;
  type?: FormType;
  [key: string]: any;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  id?: string;
  errors?: Record<string, string>;
}

/**
 * Execute a POST request to an API endpoint with timeout, dev proxy fallback, and descriptive errors.
 */
async function postJson(endpoint: string, payload: any): Promise<ApiResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Detect if redirected to /login (NextAuth middleware)
    if (response.redirected && response.url.includes("/login")) {
      throw new Error(
        "Backend authentication redirect detected: The backend currently redirects unauthenticated API calls to /login. In the backend Next.js project, please exclude this endpoint in middleware.ts."
      );
    }

    if (!response.ok) {
      let errorMsg = `Submission failed (${response.status})`;
      let errorJson: any = null;

      try {
        errorJson = await response.json();
        if (errorJson.error) {
          errorMsg = errorJson.error;
        } else if (errorJson.message) {
          errorMsg = errorJson.message;
        } else if (errorJson.errors) {
          const detail = Object.entries(errorJson.errors)
            .map(([k, v]) => `${k}: ${v}`)
            .join(", ");
          errorMsg = detail || "Validation failed";
        }
      } catch {
        const errorText = await response.text();
        if (errorText) errorMsg = errorText.slice(0, 150);
      }

      // If origin blocked in local development, attempt Vite dev server proxy (/api/submit)
      if (
        response.status === 403 &&
        errorMsg.toLowerCase().includes("origin not allowed") &&
        import.meta.env.DEV &&
        endpoint !== "/api/submit"
      ) {
        console.warn("[API] Direct call to endpoint blocked by backend Origin check; retrying via Vite dev proxy (/api/submit)...");
        return postJson("/api/submit", payload);
      }

      if (response.status === 429) {
        throw new Error(errorMsg || "Too many requests. Please wait a moment and try again.");
      }

      throw new Error(errorMsg);
    }

    const result = await response.json().catch(() => ({ success: true }));
    return result;
  } catch (error: any) {
    clearTimeout(timeoutId);

    if (error.name === "AbortError") {
      throw new Error("Request timed out. Please check your network connection and try again.");
    }

    // If browser fetch failed due to CORS network block in dev mode, retry via proxy
    if (
      error instanceof TypeError &&
      error.message.toLowerCase().includes("failed to fetch") &&
      import.meta.env.DEV &&
      endpoint !== "/api/submit"
    ) {
      try {
        console.warn("[API] Direct fetch failed; retrying via Vite dev proxy (/api/submit)...");
        return await postJson("/api/submit", payload);
      } catch (proxyError: any) {
        throw new Error(
          proxyError?.message ||
            "Unable to connect to http://192.168.1.235:3000/api/submit. Please verify the backend server is running and accessible."
        );
      }
    }

    throw error;
  }
}

/**
 * Submit orientation form to http://192.168.1.235:3000/api/submit
 * Differentiating field: `formType: "orientation"`
 */
export async function submitOrientationForm(formData: OrientationFormData): Promise<ApiResponse> {
  const payload = {
    formType: "orientation",
    type: "orientation",
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone || "",
    country: formData.country || "",
    message: formData.message,
  };

  return postJson(ORIENTATION_SUBMISSION_ENDPOINT, payload);
}

/**
 * Submit contact / enquiry form to http://192.168.1.235:3000/api/submit
 * Differentiating field: `formType: "contact"`
 */
export async function submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
  const payload = {
    formType: "contact",
    type: "contact",
    fullName: formData.fullName,
    organisation: formData.organisation || "",
    email: formData.email,
    phone: formData.phone || "",
    country: formData.country || "",
    contactMethod: formData.contactMethod || "",
    enquiryType: formData.enquiryType,
    role: formData.role,
    message: formData.message,
  };

  return postJson(CONTACT_SUBMISSION_ENDPOINT, payload);
}

/**
 * Generic submit form data to backend API.
 * Automatically injects the differentiating `formType` field and routes to the endpoint.
 */
export async function submitForm(
  formType: FormType,
  formData: Record<string, any>,
  customEndpoint?: string
): Promise<ApiResponse> {
  if (formType === "orientation") {
    return submitOrientationForm(formData as OrientationFormData);
  }

  if (formType === "contact") {
    return submitContactForm(formData as ContactFormData);
  }

  const target = customEndpoint || SUBMISSION_ENDPOINT;
  const { data: _d, metadata: _m, ...cleanFields } = formData;
  const payload: FormSubmissionPayload = {
    formType,
    type: formType,
    ...cleanFields,
  };

  return postJson(target, payload);
}
