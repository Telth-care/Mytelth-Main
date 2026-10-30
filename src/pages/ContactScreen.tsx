import { useState, type FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AlertCircle, Loader2, Send } from "lucide-react";
import PageHero from "../components/PageHero";
import { Consent, Field, Input, Select, TextArea } from "../components/forms";
import { Container, Reveal, Section } from "../components/ui";
import { ROUTES } from "../lib/links";
import { submitContactForm } from "../lib/api";
import FeedbackForm from "../components/FeedbackForm";

const CONTACT_METHODS = ["Email", "Phone call", "No preference"] as const;
const ENQUIRY_TYPES = [
  "General enquiry",
  "Partnership",
  "Research collaboration",
  "THOS",
  "Care @ Community",
  "Care @ Home",
  "Personal Care",
  "Intelligent Care Economy",
  "Technology / MedPreneur",
  "Become a Telth Physician",
  "Careers",
] as const;

const ROLES = [
  "Healthcare provider or clinician",
  "Healthcare organisation",
  "Patient or family member",
  "Researcher or academic",
  "Technology or industry partner",
  "Government or public sector",
  "Job seeker",
  "Other",
] as const;

/**
 * Field-level validation rules for Contact / Enquiry form
 */
export function validateContactField(field: string, value: string): string | null {
  const trimmed = value.trim();

  switch (field) {
    case "fullName":
      if (!trimmed) {
        return "Full Name is required.";
      }
      if (trimmed.length < 2) {
        return "Full Name must be at least 2 characters.";
      }
      if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
        return "Name can only contain letters, spaces, and punctuation (. ' -).";
      }
      return null;

    case "email":
      if (!trimmed) {
        return "Email Address is required.";
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
        return "Please enter a valid email address (e.g. name@example.com).";
      }
      return null;

    case "phone":
      if (!trimmed) {
        return "Mobile Number is required.";
      }
      if (!/^[\d\s+()-]+$/.test(trimmed)) {
        return "Mobile number can only contain digits, spaces, +, -, and ( ).";
      }
      {
        const digits = trimmed.replace(/\D/g, "");
        if (digits.length < 10) {
          return "Mobile number must have at least 10 digits.";
        }
        if (digits.length > 15) {
          return "Mobile number cannot exceed 15 digits.";
        }
      }
      return null;

    case "enquiryType":
      if (!trimmed) {
        return "Please select an enquiry type.";
      }
      return null;

    case "role":
      if (!trimmed) {
        return "Please select your role.";
      }
      return null;

    case "message":
      if (!trimmed) {
        return "Message is required.";
      }
      if (trimmed.length < 10) {
        return "Message must be at least 10 characters long.";
      }
      return null;

    default:
      return null;
  }
}

export default function ContactScreen() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const wanted = params.get("type");
  const type = ENQUIRY_TYPES.find((t) => t === wanted);

  const [formData, setFormData] = useState({
    fullName: "",
    organisation: "",
    email: "",
    phone: "",
    country: "",
    contactMethod: "",
    enquiryType: type ?? "",
    role: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Real-time clearance of error once user fixes field
    if (errors[field]) {
      if (field === "consent") {
        setErrors((prev) => {
          const next = { ...prev };
          if (value) delete next.consent;
          return next;
        });
      } else {
        const fieldError = validateContactField(field, String(value));
        setErrors((prev) => {
          const next = { ...prev };
          if (fieldError) {
            next[field] = fieldError;
          } else {
            delete next[field];
          }
          return next;
        });
      }
    }
  };

  const handleBlur = (field: string) => {
    const value = String(formData[field as keyof typeof formData] || "");
    const fieldError = validateContactField(field, value);
    if (fieldError) {
      setErrors((prev) => ({ ...prev, [field]: fieldError }));
    }
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate all required fields
    const validationErrors: Record<string, string> = {};
    const requiredFields = ["fullName", "email", "phone", "enquiryType", "role", "message"];

    for (const field of requiredFields) {
      const val = String(formData[field as keyof typeof formData] || "");
      const err = validateContactField(field, val);
      if (err) {
        validationErrors[field] = err;
      }
    }

    if (!formData.consent) {
      validationErrors.consent = "You must consent to data processing to submit an enquiry.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setErrorMessage("Please correct the highlighted errors before submitting.");
      return;
    }

    setErrors({});
    setSubmitting(true);

    const payload = {
      fullName: formData.fullName.trim(),
      organisation: formData.organisation.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      country: formData.country.trim(),
      contactMethod: formData.contactMethod.trim(),
      enquiryType: formData.enquiryType.trim(),
      role: formData.role.trim(),
      message: formData.message.trim(),
    };

    try {
      await submitContactForm(payload);
      navigate(ROUTES.enquirySubmitted, { state: { origin: "contact" } });
    } catch (err: any) {
      console.error("Enquiry submission error:", err);
      const msg =
        err?.message || "Failed to submit enquiry. Please check your connection and try again.";
      setErrorMessage(msg);

      // Check if server returned field-specific errors
      const lower = msg.toLowerCase();
      if (lower.includes("email")) {
        setErrors((prev) => ({ ...prev, email: msg }));
      }
      if (lower.includes("phone") || lower.includes("mobile")) {
        setErrors((prev) => ({ ...prev, phone: msg }));
      }
      if (lower.includes("name")) {
        setErrors((prev) => ({ ...prev, fullName: msg }));
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the Right Conversation"
        text="Tell us what brings you here and we'll make sure your enquiry reaches the right team."
      />
      <Section className="!pt-10 sm:!pt-14">
        <Container>
          <Reveal>
            <div className="grid items-start gap-8 lg:grid-cols-2">
              <form
                onSubmit={submit}
                noValidate
                className="w-full rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_8px_40px_rgba(15,23,42,0.07)] sm:p-8"
              >
              <p className="font-open text-[12.5px] font-bold uppercase tracking-[0.12em] text-brand">Get in Touch</p>
              <h2 className="mt-2 text-[26px] font-semibold sm:text-[32px]">Send an Enquiry</h2>

              {errorMessage && (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-[14px] text-red-700">
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                  <div className="flex-1">
                    <p className="font-semibold text-red-800">Submission Error</p>
                    <p className="mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <Field label="Full Name" required>
                  <Input
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    onBlur={() => handleBlur("fullName")}
                    placeholder="Your full name"
                    autoComplete="name"
                    className={errors.fullName ? "!border-red-400 focus:!border-red-500 focus:!ring-red-100" : ""}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-[12.5px] font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 flex-none text-red-500" aria-hidden="true" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </Field>

                {/* Organisation */}
                <Field label="Organisation">
                  <Input
                    name="organisation"
                    value={formData.organisation}
                    onChange={(e) => handleChange("organisation", e.target.value)}
                    placeholder="Your organisation (optional)"
                    autoComplete="organization"
                  />
                </Field>

                {/* Email Address */}
                <Field label="Email Address" required>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="your@email.com"
                    autoComplete="email"
                    className={errors.email ? "!border-red-400 focus:!border-red-500 focus:!ring-red-100" : ""}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-[12.5px] font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 flex-none text-red-500" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </Field>

                {/* Mobile Number */}
                <Field label="Mobile Number" required>
                  <Input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    placeholder="e.g. 98765 43210 or +1 (555) 000-0000"
                    autoComplete="tel"
                    className={errors.phone ? "!border-red-400 focus:!border-red-500 focus:!ring-red-100" : ""}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-[12.5px] font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 flex-none text-red-500" aria-hidden="true" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </Field>

                {/* Country / Region */}
                <Field label="Country / Region">
                  <Input
                    name="country"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    placeholder="Country or region"
                    autoComplete="country-name"
                  />
                </Field>

                {/* Preferred Contact Method */}
                <Field label="Preferred Contact Method">
                  <Select
                    name="contactMethod"
                    options={CONTACT_METHODS}
                    value={formData.contactMethod}
                    onChange={(e) => handleChange("contactMethod", e.target.value)}
                    placeholder="Select preference..."
                  />
                </Field>

                {/* Enquiry Type */}
                <Field label="Enquiry Type" required>
                  <Select
                    name="enquiryType"
                    required
                    options={ENQUIRY_TYPES}
                    value={formData.enquiryType}
                    onChange={(e) => handleChange("enquiryType", e.target.value)}
                    onBlur={() => handleBlur("enquiryType")}
                    placeholder="Select enquiry type..."
                    className={errors.enquiryType ? "!border-red-400 focus:!border-red-500 focus:!ring-red-100" : ""}
                  />
                  {errors.enquiryType && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-[12.5px] font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 flex-none text-red-500" aria-hidden="true" />
                      <span>{errors.enquiryType}</span>
                    </p>
                  )}
                </Field>

                {/* What is your role */}
                <Field label="What is your role" required>
                  <Select
                    name="role"
                    required
                    options={ROLES}
                    value={formData.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                    onBlur={() => handleBlur("role")}
                    placeholder="Select role..."
                    className={errors.role ? "!border-red-400 focus:!border-red-500 focus:!ring-red-100" : ""}
                  />
                  {errors.role && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-[12.5px] font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 flex-none text-red-500" aria-hidden="true" />
                      <span>{errors.role}</span>
                    </p>
                  )}
                </Field>

                {/* Message */}
                <Field label="Message" required className="sm:col-span-2">
                  <TextArea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    placeholder="Tell us about your enquiry..."
                    className={errors.message ? "!border-red-400 focus:!border-red-500 focus:!ring-red-100" : ""}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-[12.5px] font-medium text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 flex-none text-red-500" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </Field>
              </div>

              {/* Consent Checkbox */}
              <div className="mt-6">
                <Consent
                  checked={formData.consent}
                  onChange={(e) => handleChange("consent", e.target.checked)}
                >
                  I consent to Telth processing my personal information to respond to this enquiry, in accordance with applicable data protection regulations. I understand I may withdraw this consent at any time.
                </Consent>
                {errors.consent && (
                  <p className="mt-2 flex items-center gap-1.5 text-[12.5px] font-medium text-red-600">
                    <AlertCircle className="h-3.5 w-3.5 flex-none text-red-500" aria-hidden="true" />
                    <span>{errors.consent}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-dark px-8 font-open text-[16px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,.7)] hover:shadow-[0_16px_32px_-10px_rgba(37,99,235,.8)] disabled:opacity-75 disabled:cursor-not-allowed sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    <span>Sending Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send className="btn-arrow h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>

              </form>
              <FeedbackForm />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
