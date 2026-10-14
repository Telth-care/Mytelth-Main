import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, ShieldCheck, X } from "lucide-react";
import PageHero from "../components/PageHero";
import { Consent, Field, Input, Select } from "../components/forms";
import { Container, Reveal, Section } from "../components/ui";
import { ROUTES } from "../lib/links";

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

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send the form data to your backend before navigating.
    navigate(ROUTES.enquirySubmitted);
  };

  const verify = () => {
    if (DIGILOCKER_URL) window.open(DIGILOCKER_URL, "_blank", "noopener,noreferrer");
    else setDlNote(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Care Manager Recruitment"
        title="Complete Your Candidate Profile"
        text="Please provide your details and verify your identity before continuing with the Care Manager recruitment process."
      />
      <Section className="!pt-10 sm:!pt-14">
        <Container>
          <form onSubmit={submit} className="mx-auto max-w-[900px] space-y-8">
            <Reveal>
              <fieldset className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-card sm:p-10">
                <legend className="sr-only">Personal information</legend>
                <h2 className="text-[22px] font-semibold sm:text-[26px]">Personal Information</h2>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" required><Input name="fullName" required placeholder="Priya Sharma" autoComplete="name" /></Field>
                  <Field label="Mobile Number" required>
                    <span className="flex gap-2">
                      <span className="flex h-12 flex-none items-center rounded-xl border border-slate-200 bg-soft px-3.5 text-[14.5px] text-ink">🇮🇳 +91</span>
                      <Input name="mobile" type="tel" inputMode="numeric" required pattern="[0-9]{10}" title="Enter a 10-digit mobile number" placeholder="98765 43210" autoComplete="tel-national" />
                    </span>
                  </Field>
                  <Field label="Email Address" required><Input name="email" type="email" required placeholder="you@example.com" autoComplete="email" /></Field>
                  <Field label="Your Location" required><Input name="location" required placeholder="City, State" autoComplete="address-level2" /></Field>
                  <Field label="Healthcare Skills"><Input name="skills" placeholder="e.g. ANM, ASHA, Skill India Module" /></Field>
                  <Field label="Compulsory need to attend skill india training" required><Select name="skillIndia" required options={YES_NO} placeholder="Select" /></Field>
                  <Field label="Highest Qualification" required><Select name="qualification" required options={QUALIFICATIONS} placeholder="Select qualification" /></Field>
                  <Field label="Years of Experience" required><Select name="experience" required options={EXPERIENCE} placeholder="Select range" /></Field>
                  <Field label="Languages Known"><Input name="languages" placeholder="e.g. Tamil, English, Hindi" /></Field>
                  <Field label="Current Employment Status"><Select name="employmentStatus" options={EMPLOYMENT} placeholder="Select status" /></Field>
                  <Field label="Joining Availability" required><Select name="availability" required options={AVAILABILITY} placeholder="Select availability" /></Field>
                </div>
              </fieldset>
            </Reveal>

            <Reveal>
              <section className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-card sm:p-10">
                <h2 className="text-[22px] font-semibold sm:text-[26px]">Identity Verification</h2>
                <p className="mt-3 text-[15px] leading-[1.75]">
                  For secure candidate verification, your <strong className="text-slate-700">Aadhaar Card</strong> and <strong className="text-slate-700">PAN Card</strong> must be submitted through DigiLocker.
                </p>

                <div className="mt-6 rounded-2xl border border-dashed border-sky-300 bg-sky-50/60 p-6 text-center sm:p-8">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <ShieldCheck className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[18px] font-bold">Identity Verification Required</h3>
                  <p className="mt-2 text-[14px] text-muted">Connect to DigiLocker to verify your Aadhaar and PAN securely.</p>
                  <p className="mx-auto mt-4 max-w-md rounded-lg bg-amber-50 px-3 py-2 text-[12.5px] font-semibold text-amber-800">
                    Documents must be retrieved via DigiLocker not uploaded manually.
                  </p>
                  <ul className="mx-auto mt-5 grid max-w-md gap-2 text-left sm:grid-cols-2">
                    {DIGILOCKER_RULES.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-[13.5px] text-body">
                        <X className="h-4 w-4 flex-none text-red-500" strokeWidth={3} aria-hidden="true" /> {r}
                      </li>
                    ))}
                  </ul>
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

                <p className="mt-6 flex items-start gap-2.5 text-[13px] leading-[1.7] text-muted">
                  <Lock className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
                  Your identity information is used solely for recruitment verification and is handled in accordance with applicable privacy legislation and data-processing requirements. Telth does not store raw document data.
                </p>

                <div className="mt-6">
                  <Consent>
                    I consent to Telth processing my recruitment data, conducting lawful identity verification, and handling my information in accordance with applicable privacy requirements.
                  </Consent>
                </div>

                <button
                  type="submit"
                  className="btn mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark px-8 font-open text-[16px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,.7)] hover:shadow-[0_16px_32px_-10px_rgba(37,99,235,.8)] sm:w-auto"
                >
                  Save &amp; Continue →
                </button>
              </section>
            </Reveal>
          </form>
        </Container>
      </Section>
    </>
  );
}
