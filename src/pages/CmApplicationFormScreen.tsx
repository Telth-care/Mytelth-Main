import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Loader2, Lock, Search, ShieldCheck, X } from "lucide-react";
import { Consent, Field, Input, Select } from "../components/forms";
import { Container, Reveal, Section } from "../components/ui";
import { ROUTES } from "../lib/links";
import { submitForm } from "../lib/api";

/** TODO: set to the DigiLocker authorisation URL provided by your backend. */
const DIGILOCKER_URL = "";

const QUALIFICATIONS = ["ANM", "GNM", "B.Sc Nursing", "Diploma in Nursing", "Paramedical Diploma / Degree", "Other"] as const;
const EXPERIENCE = ["Fresher (0–1 years)", "1–3 years", "3–5 years", "5–10 years", "10+ years"] as const;
const EMPLOYMENT = ["Employed", "Self-employed", "Not currently employed", "Student"] as const;
const AVAILABILITY = ["Immediately", "Within 15 days", "Within 30 days", "1–2 months", "More than 2 months"] as const;
const YES_NO = ["Yes", "No"] as const;
const DIGILOCKER_RULES = ["Upload from computer or phone", "Drag-and-drop files", "PDF or image uploads", "Manual document entry"];

export default function CmApplicationFormScreen() {
  const navigate = useNavigate();
  const [dlNote, setDlNote] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: String(formData.get("fullName") || "").trim(),
      mobile: String(formData.get("mobile") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      location: String(formData.get("location") || "").trim(),
      skills: String(formData.get("skills") || "").trim(),
      skillIndia: String(formData.get("skillIndia") || "").trim(),
      qualification: String(formData.get("qualification") || "").trim(),
      experience: String(formData.get("experience") || "").trim(),
      languages: String(formData.get("languages") || "").trim(),
      employmentStatus: String(formData.get("employmentStatus") || "").trim(),
      availability: String(formData.get("availability") || "").trim(),
    };

    try {
      await submitForm("care_manager_application", data);
      navigate(ROUTES.enquirySubmitted, { state: { origin: "care_manager_application" } });
    } catch (err: any) {
      console.error("Care Manager application submission error:", err);
      setErrorMessage(
        err?.message || "Failed to submit candidate application. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };


  const verify = () => {
    if (DIGILOCKER_URL) window.open(DIGILOCKER_URL, "_blank", "noopener,noreferrer");
    else setDlNote(true);
  };

  return (
      <Section className="!pt-14 sm:!pt-20 lg:!pt-24 !pb-16 sm:!pb-20">
        <Container>
          <form onSubmit={submit} className="mx-auto max-w-[990px]">
            <header className="mb-8 sm:mb-10">
              <p className="mb-2 font-open text-[12px] font-bold uppercase tracking-[0.14em] text-brand">Care Manager Recruitment</p>
              <h1 className="font-franklin text-[30px] font-semibold leading-tight text-ink sm:text-[36px]">Complete Your Candidate Profile</h1>
              <p className="mt-2 max-w-[760px] text-[14.5px] leading-[1.6] text-muted sm:text-[15px]">Please provide your details and verify your identity before continuing with the Care Manager recruitment process.</p>
            </header>
            {errorMessage && (
              <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-[14px] text-red-700">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                <div className="flex-1">
                  <p className="font-semibold text-red-800">Submission Error</p>
                  <p className="mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}
            <Reveal>
              <section className="mb-8">
                <h2 className="mb-4 font-franklin text-[17px] font-semibold text-slate-800 sm:text-[18px]">Personal Information</h2>
              <fieldset className="rounded-[20px] border border-slate-200/80 bg-white p-5 shadow-[0_8px_28px_-22px_rgba(15,23,42,.28)] sm:p-8 lg:p-10">
                <legend className="sr-only">Personal information</legend>
                <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
                  <Field label="Full Name" required><Input name="fullName" required placeholder="Your full name" autoComplete="name" /></Field>
                  <Field label="Mobile Number" required>
                    <span className="flex gap-2">
                      <span className="flex h-12 flex-none items-center gap-1.5 rounded-xl border border-slate-200 bg-[#f8fafc] px-3 text-[14px] text-slate-600"><span aria-hidden="true">🇮🇳</span> +91</span>
                      <Input name="mobile" type="tel" inputMode="numeric" required pattern="[0-9]{10}" title="Enter a 10-digit mobile number" placeholder="98765 43210" autoComplete="tel-national" />
                    </span>
                  </Field>
                  <Field label="Email Address" required><Input name="email" type="email" required placeholder="you@example.com" autoComplete="email" /></Field>
                  <Field label="Your Location" required><span className="relative block"><Search className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400" aria-hidden="true"/><Input name="location" required placeholder="Search district or city..." autoComplete="address-level2" className="pl-11" /></span></Field>
                  <Field label="Healthcare Skills"><Input name="skills" placeholder="e.g. ANM, ASHA, Skill India Module" /></Field>
                  <Field label="Willing to attend Skill India training?" required><Select name="skillIndia" required options={YES_NO} placeholder="Select" /></Field>
                  <Field label="Highest Qualification" required><Select name="qualification" required options={QUALIFICATIONS} placeholder="Select qualification" /></Field>
                  <Field label="Years of Experience" required><Select name="experience" required options={EXPERIENCE} placeholder="Select range" /></Field>
                  <Field label="Languages Known"><Input name="languages" placeholder="e.g. Tamil, English, Hindi" /></Field>
                  <Field label="Current Employment Status"><Select name="employmentStatus" options={EMPLOYMENT} placeholder="Select status" /></Field>
                  <Field label="Joining Availability" required><Select name="availability" required options={AVAILABILITY} placeholder="Select availability" /></Field>
                </div>
              </fieldset>
              </section>
            </Reveal>

            <Reveal>
              <section className="mb-8">
                <h2 className="mb-4 font-franklin text-[17px] font-semibold text-slate-800 sm:text-[18px]">Identity Verification</h2>
                <div className="rounded-[20px] border border-slate-200/80 bg-white p-5 shadow-[0_8px_28px_-22px_rgba(15,23,42,.28)] sm:p-8 lg:p-10">
                <p className="text-center text-[14px] leading-[1.75] text-body sm:text-[15px]">
                  For secure candidate verification, your <strong className="text-slate-700">Aadhaar Card</strong> and <strong className="text-slate-700">PAN Card</strong> must be submitted through DigiLocker.
                </p>

                <div className="mx-auto mt-6 max-w-[660px] rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center sm:p-6">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <ShieldCheck className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[18px] font-bold">Identity Verification Required</h3>
                  <p className="mt-2 text-[14px] text-muted">Connect to DigiLocker to verify your Aadhaar and PAN securely.</p>
                  <div className="mx-auto mt-5 max-w-[520px] rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-left">
                    <p className="text-[12.5px] font-semibold text-amber-900">Documents must be retrieved via DigiLocker — not uploaded manually.</p>
                    <ul className="mt-2 grid gap-1.5 text-left">
                    {DIGILOCKER_RULES.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-[13.5px] text-body">
                        <X className="h-4 w-4 flex-none text-red-500" strokeWidth={3} aria-hidden="true" /> {r}
                      </li>
                    ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={verify}
                    className="btn mt-6 inline-flex min-h-[50px] items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark px-7 font-open text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,.7)]"
                  >
                    Upload and Verify with DigiLocker
                  </button>
                  {dlNote && (
                    <p role="status" className="mx-auto mt-4 max-w-md text-[13px] text-muted">
                      DigiLocker verification isn&apos;t connected yet. Please save your details below and our team will guide you through verification.
                    </p>
                  )}
                </div>

                </div>
              </section>

              <div className="rounded-2xl border border-slate-200 bg-[#f7f9fc] p-4 sm:p-5">
                <p className="flex items-start gap-2 text-[13px] leading-[1.65] text-muted"><Lock className="mt-0.5 h-4 w-4 flex-none text-slate-500" aria-hidden="true"/>Your identity information is used only for recruitment verification and handled in accordance with applicable privacy and data-processing requirements. Telth does not store raw document data.</p>
                <div className="mt-4 border-t border-slate-200 pt-4">
                  <Consent>
                    I consent to Telth processing my recruitment data, conducting lawful identity verification, and handling my information in accordance with applicable privacy requirements.
                  </Consent>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-dark px-8 font-open text-[16px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,.7)] hover:shadow-[0_16px_32px_-10px_rgba(37,99,235,.8)] disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      <span>Saving Application...</span>
                    </>
                  ) : (
                    "Save & Continue →"
                  )}
                </button>
              </div>
            </Reveal>
          </form>

        </Container>
      </Section>
  );
}
