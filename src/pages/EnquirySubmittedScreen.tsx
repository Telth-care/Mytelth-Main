import { Check } from "lucide-react";
import { Btn, Container, Reveal } from "../components/ui";
import { ROUTES } from "../lib/links";

export default function EnquirySubmittedScreen() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <div className="mx-auto max-w-[1071px] rounded-[22px] bg-soft px-4 py-10 sm:px-10 sm:py-16">
          <Reveal dir="zoom">
            <div className="mx-auto max-w-[520px] rounded-[24px] border border-slate-100 bg-white px-6 py-12 text-center shadow-[0_8px_40px_rgba(15,23,42,0.07)] sm:px-12 sm:py-14">
              <span className="mx-auto flex h-16 w-16 animate-pulseRing items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                <Check className="h-8 w-8" strokeWidth={3} aria-hidden="true" />
              </span>
              <h1 className="mt-6 text-[28px] font-bold sm:text-[32px]">Enquiry Received</h1>
              <p className="mt-4 text-[15.5px] leading-[1.75]">
                Thank you. Your enquiry has been received and will be routed to the appropriate Telth team. We will be in touch using your preferred contact method.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Btn to={ROUTES.home}>Back to Home</Btn>
                <Btn to={ROUTES.ecosystem} variant="ghost">Explore the Ecosystem</Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
