import type { FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Send } from "lucide-react";
import PageHero from "../components/PageHero";
import { Consent, Field, Input, Select, TextArea } from "../components/forms";
import { Container, Reveal, Section } from "../components/ui";
import { ROUTES } from "../lib/links";

const CONTACT_METHODS = ["Email", "Phone call", "No preference"] as const;
export const ENQUIRY_TYPES = [
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

export default function ContactScreen() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const wanted = params.get("type");
  const type = ENQUIRY_TYPES.find((t) => t === wanted);

  // Frontend-only: the browser has already validated every required field when this fires.
  // TODO: POST `new FormData(e.currentTarget)` to your backend / form service before navigating.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(ROUTES.enquirySubmitted);
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
            <form
              onSubmit={submit}
              className="mx-auto max-w-[800px] rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_8px_40px_rgba(15,23,42,0.07)] sm:p-10"
            >
              <p className="font-open text-[12.5px] font-bold uppercase tracking-[0.12em] text-brand">Get in Touch</p>
              <h2 className="mt-2 text-[26px] font-semibold sm:text-[32px]">Send an Enquiry</h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" required><Input name="fullName" required placeholder="Your full name" autoComplete="name" /></Field>
                <Field label="Organisation"><Input name="organisation" placeholder="Your organisation (optional)" autoComplete="organization" /></Field>
                <Field label="Email Address" required><Input name="email" type="email" required placeholder="your@email.com" autoComplete="email" /></Field>
                <Field label="Phone Number"><Input name="phone" type="tel" placeholder="+1 (optional)" autoComplete="tel" /></Field>
                <Field label="Country / Region"><Input name="country" placeholder="Country or region" autoComplete="country-name" /></Field>
                <Field label="Preferred Contact Method"><Select name="contactMethod" options={CONTACT_METHODS} placeholder="Select preference..." /></Field>
                <Field label="Enquiry Type" required><Select key={type} name="enquiryType" required options={ENQUIRY_TYPES} placeholder="Select enquiry type..." defaultValue={type ?? ""} /></Field>
                <Field label="What is your role" required><Select name="role" required options={ROLES} placeholder="Select role..." /></Field>
                <Field label="Message" required className="sm:col-span-2">
                  <TextArea name="message" required placeholder="Tell us about your enquiry..." />
                </Field>
              </div>

              <div className="mt-6">
                <Consent>
                  I consent to Telth processing my personal information to respond to this enquiry, in accordance with applicable data protection regulations. I understand I may withdraw this consent at any time.
                </Consent>
              </div>

              <button
                type="submit"
                className="btn mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-dark px-8 font-open text-[16px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,.7)] hover:shadow-[0_16px_32px_-10px_rgba(37,99,235,.8)] sm:w-auto"
              >
                Send Enquiry <Send className="btn-arrow h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
