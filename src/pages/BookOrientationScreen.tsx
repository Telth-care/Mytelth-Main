import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { AlertCircle, Loader2 } from "lucide-react";
import { Field, Input, TextArea } from "../components/forms";
import { Container, Reveal, Section } from "../components/ui";
import { ROUTES } from "../lib/links";
import { submitOrientationForm } from "../lib/api";

/**
 * Validates a mobile number:
 * - Must be present (required)
 * - Can only contain digits, spaces, +, -, and ( )
 * - Must contain between 10 and 15 digits (standard E.164 / national format)
 */
export function validateMobileNumber(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) {
    return "Mobile number is required.";
  }

  // Check for allowed phone characters
  if (!/^[\d\s+()-]+$/.test(trimmed)) {
    return "Mobile number can only contain digits, spaces, +, -, and ( ).";
  }

  // Count pure numeric digits
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 10) {
    return "Mobile number must be at least 10 digits.";
  }
  if (digits.length > 15) {
    return "Mobile number cannot exceed 15 digits.";
  }

  return null;
}

export default function BookOrientationScreen() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const rawPhone = String(formData.get("phone") || phone).trim();

    // Validate mobile number before submitting
    const mobileError = validateMobileNumber(rawPhone);
    if (mobileError) {
      setPhoneError(mobileError);
      setErrorMessage(mobileError);
      return;
    }

    setPhoneError(null);
    setSubmitting(true);

    const data = {
      fullName: String(formData.get("fullName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: rawPhone,
      country: String(formData.get("country") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      await submitOrientationForm(data);
      navigate(ROUTES.enquirySubmitted, { state: { origin: "orientation", isOrientation: true } });
    } catch (err: any) {
      console.error("Orientation booking error:", err);
      const msg =
        err?.message || "Failed to submit your orientation request. Please check your connection and try again.";
      setErrorMessage(msg);
      if (msg.toLowerCase().includes("phone") || msg.toLowerCase().includes("mobile")) {
        setPhoneError(msg);
      }
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <Section tone="white" className="!pt-12 sm:!pt-16 lg:!pt-20">
      <Container>
        {/* Header section matching Figma */}
        <div className="mx-auto max-w-[800px] text-center">
          <Reveal>
            <p className="font-open text-[12.5px] font-bold uppercase tracking-[0.14em] text-brand sm:text-[13.5px]">
              BOOK AN ORIENTATION
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-3 text-balance font-franklin text-[32px] font-bold leading-[1.15] text-ink sm:text-[42px] lg:text-[48px]">
              Book you Orientation
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-[1.75] text-body sm:text-[16.5px]">
              Tell us what brings you here — and we&apos;ll make sure your enquiry reaches the right team.
            </p>
          </Reveal>
        </div>

        {/* Outer soft card container */}
        <Reveal delay={250} className="mt-10 sm:mt-12">
          <div className="mx-auto max-w-[840px] rounded-[24px] sm:rounded-[32px] bg-soft p-4 sm:p-8 lg:p-12 border border-slate-100/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
            {/* White inner form card */}
            <div className="mx-auto max-w-[660px] rounded-[20px] sm:rounded-[24px] border border-slate-100 bg-white p-6 sm:p-10 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
              <h2 className="font-franklin text-[22px] font-bold text-ink sm:text-[24px]">
                Book with your details
              </h2>

              <form onSubmit={handleSubmit} className="mt-7">
                {errorMessage && (
                  <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-[14px] text-red-700">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="font-semibold text-red-800">Submission Error</p>
                      <p className="mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <Input
                      name="fullName"
                      required
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="Email Address" required>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      autoComplete="email"
                    />
                  </Field>

                  <Field label="Mobile Number" required>
                    <Input
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        const val = e.target.value;
                        setPhone(val);
                        if (phoneError) {
                          setPhoneError(validateMobileNumber(val));
                        }
                      }}
                      onBlur={() => {
                        setPhoneError(validateMobileNumber(phone));
                      }}
                      placeholder="e.g. 98765 43210 or +1 (555) 000-0000"
                      autoComplete="tel"
                      className={phoneError ? "!border-red-400 focus:!border-red-500 focus:!ring-red-100" : ""}
                    />
                    {phoneError && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-[12.5px] font-medium text-red-600">
                        <AlertCircle className="h-3.5 w-3.5 flex-none text-red-500" aria-hidden="true" />
                        <span>{phoneError}</span>
                      </p>
                    )}
                  </Field>

                  <Field label="Country / Region">
                    <Input
                      name="country"
                      placeholder="Country or region"
                      autoComplete="country-name"
                    />
                  </Field>

                  <Field label="Message" required className="sm:col-span-2">
                    <TextArea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your enquiry..."
                    />
                  </Field>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-brand px-8 font-open text-[15.5px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,.7)] transition-all hover:bg-brand-dark hover:shadow-[0_16px_32px_-10px_rgba(37,99,235,.8)] disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      "Send Enquiry"
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
