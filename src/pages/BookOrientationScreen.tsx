import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Field, Input, TextArea } from "../components/forms";
import { Container, Reveal, Section } from "../components/ui";
import { ROUTES } from "../lib/links";

export default function BookOrientationScreen() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulated short delay for smooth UX transition
    setTimeout(() => {
      navigate(ROUTES.enquirySubmitted, { state: { origin: "orientation", isOrientation: true } });
    }, 400);
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

                  <Field label="Phone Number">
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                    />
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
                    className="btn inline-flex min-h-[50px] w-full items-center justify-center rounded-xl bg-brand px-8 font-open text-[15.5px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,.7)] transition-all hover:bg-brand-dark hover:shadow-[0_16px_32px_-10px_rgba(37,99,235,.8)] disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send Enquiry"}
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
