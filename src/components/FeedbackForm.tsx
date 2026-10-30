import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { Field, Input, TextArea } from "./forms";
import { submitFeedbackForm } from "../lib/api";
import { ROUTES } from "../lib/links";

/** Feedback submissions – name, email and description are required. */
function validateFeedbackField(field: string, value: string): string | null {
  const trimmed = value.trim();

  if (field === "fullName") {
    if (!trimmed) return "Full Name is required.";
    if (trimmed.length < 2) return "Full Name must be at least 2 characters.";
    if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return "Name can only contain letters, spaces, and punctuation (. ' -).";
    return null;
  }

  if (field === "email") {
    if (!trimmed) return "Email Address is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) return "Please enter a valid email address (e.g. name@example.com).";
    return null;
  }

  if (field === "message") {
    if (!trimmed) return "Message is required.";
    if (trimmed.length < 10) return "Message must be at least 10 characters long.";
    return null;
  }

  return null;
}

export default function FeedbackForm() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    if (field === "fullName") setFullName(value);
    if (field === "email") setEmail(value);
    if (field === "message") setMessage(value);

    // Real-time clearance of error once user fixes field
    if (errors[field]) {
      const fieldError = validateFeedbackField(field, value);
      setErrors((prev) => {
        const nextErrors = { ...prev };
        if (fieldError) {
          nextErrors[field] = fieldError;
        } else {
          delete nextErrors[field];
        }
        return nextErrors;
      });
    }
  };

  const handleBlur = (field: string) => {
    const value = field === "fullName" ? fullName : field === "email" ? email : message;
    const fieldError = validateFeedbackField(field, value);
    if (fieldError) {
      setErrors((prev) => ({ ...prev, [field]: fieldError }));
    }
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const validationErrors: Record<string, string> = {};
    for (const field of ["fullName", "email", "message"]) {
      const value = field === "fullName" ? fullName : field === "email" ? email : message;
      const err = validateFeedbackField(field, value);
      if (err) {
        validationErrors[field] = err;
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setErrorMessage("Please correct the highlighted errors before submitting.");
      return;
    }

    setErrors({});
    setSubmitting(true);

    const payload = { fullName: fullName.trim(), email: email.trim(), message: message.trim() };

    try {
      await submitFeedbackForm(payload);
      navigate(ROUTES.enquirySubmitted, { state: { origin: "feedback" } });
    } catch (err: any) {
      console.error("Feedback submission error:", err);
      const msg = err?.message || "Failed to submit feedback. Please check your connection and try again.";
      setErrorMessage(msg);

      const lower = msg.toLowerCase();
      if (lower.includes("email")) setErrors((prev) => ({ ...prev, email: msg }));
      if (lower.includes("name")) setErrors((prev) => ({ ...prev, fullName: msg }));
      if (lower.includes("message") || lower.includes("feedback")) setErrors((prev) => ({ ...prev, message: msg }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      noValidate
      className="w-full rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_8px_40px_rgba(15,23,42,0.07)] sm:p-8"
    >
      <p className="font-open text-[12.5px] font-bold uppercase tracking-[0.12em] text-brand">Feedback</p>
      <h2 className="mt-2 text-[26px] font-semibold sm:text-[32px]">Send us Feedback</h2>
      <p className="mt-3 max-w-[640px] text-[14px] leading-[1.7] text-body">
        Tell us what is working well or what we can improve. Your feedback is sent to our team separately from enquiries.
      </p>

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
        <Field label="Full Name" required>
          <Input
            name="feedbackFullName"
            required
            value={fullName}
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

        <Field label="Email Address" required>
          <Input
            name="feedbackEmail"
            type="email"
            required
            value={email}
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

        <Field label="Feedback" required className="sm:col-span-2">
          <TextArea
            name="feedbackMessage"
            required
            rows={4}
            value={message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            placeholder="Share your feedback with us..."
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

      <button
        type="submit"
        disabled={submitting}
        className="btn mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-dark px-8 font-open text-[16px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,.7)] hover:shadow-[0_16px_32px_-10px_rgba(37,99,235,.8)] disabled:opacity-75 disabled:cursor-not-allowed sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            <span>Sending Feedback...</span>
          </>
        ) : (
          <>
            <span>Send Feedback</span>
            <Send className="btn-arrow h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
