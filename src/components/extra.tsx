import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Activity, Building2, CalendarCheck, ChevronDown, FileHeart, HeartPulse, Home, MonitorSmartphone, Stethoscope, UserCheck, Users } from "lucide-react";
import { Reveal } from "./ui";
import { ROUTES } from "../lib/links";

/* ---------- "From first contact to continuous care" (Home + T-DOC) ---------- */
const STEPS = [
  { icon: CalendarCheck, title: "Book Appointment", text: "Patients access the Telth app to find providers, check availability, and book appointments in real-time — no phone calls required." },
  { icon: Stethoscope, title: "Physician Consultation", text: "The patient meets the physician in person or by teleconsultation, with relevant context available to support the consultation." },
  { icon: UserCheck, title: "Care Manager Follow-up", text: "Care Managers help coordinate next appointments, reminders and permitted care tasks after the consultation." },
  { icon: HeartPulse, title: "Continuous Monitoring", text: "Connected measurements and follow-up keep the care plan on track between visits." },
  { icon: Building2, title: "Organization Dashboard", text: "Organisations see activity and outcomes across their care network in one place." },
];

export function JourneySteps() {
  const [i, setI] = useState(0);
  const s = STEPS[i];
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
      <div role="tablist" aria-label="Care journey steps" className="space-y-2.5">
        {STEPS.map((st, n) => (
          <button
            key={st.title}
            role="tab"
            aria-selected={n === i}
            onClick={() => setI(n)}
            className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 sm:px-5 ${
              n === i ? "border-brand bg-white shadow-lift" : "border-slate-100 bg-white/70 hover:border-brand/40 hover:bg-white"
            }`}
          >
            <span className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl transition-colors ${n === i ? "bg-brand text-white" : "bg-brand/10 text-brand"}`}>
              <st.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-franklin text-[15.5px] font-semibold text-ink">{st.title}</span>
            <span className="ml-auto text-[12px] font-bold text-slate-400">0{n + 1}</span>
          </button>
        ))}
      </div>
      <div key={i} className="animate-fadeIn rounded-[22px] border border-brand/15 bg-white p-6 shadow-card sm:p-8">
        <p className="text-[12.5px] font-bold uppercase tracking-wide text-brand">Step {i + 1}: {s.title}</p>
        <p className="mt-3 text-[15.5px] leading-[1.75]">{s.text}</p>
        <div className="mt-7 grid grid-cols-3 gap-3 text-center">
          {[["85%", "Faster"], ["3x", "Efficiency"], ["99%", "Accuracy"]].map(([v, l]) => (
            <div key={l} className="rounded-2xl bg-soft px-2 py-4">
              <p className="font-franklin text-[24px] font-bold text-brand sm:text-[28px]">{v}</p>
              <p className="text-[12.5px] text-muted">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- FAQ accordion ---------- */
export function Faq({ items }: { items: { q: string; a?: ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-10 max-w-[864px] space-y-3">
      {items.map((it, n) => {
        const isOpen = open === n;
        return (
          <Reveal key={it.q} delay={n * 50}>
            <div className={`overflow-hidden rounded-2xl border bg-white transition-colors ${isOpen ? "border-brand/40 shadow-card" : "border-slate-200"}`}>
              <button
                onClick={() => setOpen(isOpen ? null : n)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className="font-franklin text-[15.5px] font-semibold text-ink sm:text-[16.5px]">{it.q}</span>
                <ChevronDown className={`h-5 w-5 flex-none text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-[14.5px] leading-[1.75] sm:px-6">
                    {it.a ?? (
                      <>
                        Our team will be glad to answer this in detail.{" "}
                        <Link to={ROUTES.enquiry} className="font-semibold text-brand underline underline-offset-4">Ask us a question</Link>.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ---------- "All linked in one system" (Care@Home + CM/CCM) ---------- */
const FLOW = [
  { icon: Home, title: "Home", sub: "Family, Elderly, Chronic Care" },
  { icon: UserCheck, title: "Care Manager + HES", sub: "Health Assessment at Home" },
  { icon: MonitorSmartphone, title: "Connected Measurements", sub: "Securely Transmitted" },
  { icon: Stethoscope, title: "Physician/Specialist", sub: "Teleconsultation & Review" },
  { icon: FileHeart, title: "Personalized care plan", sub: "Treatment and Guidance" },
  { icon: Activity, title: "Follow-up and Remote monitoring", sub: "Ongoing Support" },
  { icon: Users, title: "Care Community", sub: "Healthier Families Stronger Communities" },
];

export function ConnectedFlow() {
  return (
    <ol className="relative mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-7 lg:gap-x-3">
      <div aria-hidden="true" className="absolute left-[6%] right-[6%] top-[38px] hidden border-t-2 border-dashed border-sky-200 lg:block" />
      {FLOW.map((f, i) => (
        <Reveal as="li" key={f.title} delay={i * 90} className="relative text-center">
          <span className="mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full bg-gradient-to-b from-cyan-100 to-cyan-300 text-sky-800 shadow-card transition-transform duration-300 hover:-translate-y-1.5 hover:scale-110">
            <f.icon className="h-8 w-8" strokeWidth={1.7} aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-[15px] font-bold leading-snug">{f.title}</h3>
          <p className="mx-auto mt-1.5 max-w-[150px] text-[12.5px] leading-[1.5] text-muted">{f.sub}</p>
        </Reveal>
      ))}
    </ol>
  );
}
