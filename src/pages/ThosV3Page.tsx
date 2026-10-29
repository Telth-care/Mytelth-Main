import { BellRing, CalendarClock, Check, ClipboardList, Radar } from "lucide-react";
import CtaBand from "../components/CtaBand";
import { Container, Notice, Reveal, SectionTitle } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

export default function ThosV3Page() {
  const capabilities = [
    { icon: BellRing, title: "Intelligent Care Alerts", text: "Automated flagging of clinical data anomalies — designed to assist care teams in prioritising responses, with human confirmation required." },
    { icon: ClipboardList, title: "Care Plan Automation", text: "Workflow automation designed to reduce administrative burden in care plan management — always within defined clinical parameters." },
    { icon: Radar, title: "Monitoring Response", text: "Proposed automated responses to remote monitoring data within pre-approved clinical pathways and escalation protocols." },
    { icon: CalendarClock, title: "Scheduling Optimisation", text: "Intelligent scheduling assistance designed to improve care team efficiency and reduce patient waiting times." },
  ];
  const principles = [
    "Every automated function operates within explicitly approved parameters",
    "Clinical accountability remains with qualified healthcare professionals at all times",
    "Individuals have the right to understand and challenge any automated decision affecting their care",
    "All autonomous functions are subject to ongoing monitoring, audit and review",
    "Systems may be overridden or disabled by authorised clinical staff without restriction",
  ];

  return (
    <>
      <section className="bg-white px-5 pb-2 pt-14 sm:px-8 sm:pt-16 lg:pt-20">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="font-open text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">THOS V3 — Future</p>
            <h1 className="mt-3 font-franklin text-[28px] font-semibold leading-tight text-slate-900 sm:text-[36px]">Automation Where It Is Safe, Useful and Accountable</h1>
            <p className="mx-auto mt-4 max-w-[820px] text-[14px] leading-6 text-slate-600 sm:text-[15px]">Proposed automation capabilities for specific healthcare workflows — designed only for contexts where autonomy has been validated as safe, useful and subject to clear human accountability.</p>
          </Reveal>
        </Container>
      </section>
      <div className="mx-auto mt-7 w-full max-w-[1100px] px-4 sm:px-6">
        <Notice tone="amber" label="Future Capability:">THOS V3 describes future, not current, capabilities. These are not commercially available today. Deployment will be subject to clinical validation, regulatory approval and human oversight frameworks in each relevant market.</Notice>
      </div>
      <section className="bg-white py-12 sm:py-14">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <Reveal>
              <SectionTitle eyebrow="Potential Applications" title="Purposeful Automation" />
              <p className="mt-5 text-[14px] leading-[1.8] text-slate-600">THOS V3 explores automation only in contexts where it has been rigorously validated, where the benefits clearly outweigh the risks, and where human accountability structures are in place and functioning.</p>
              <p className="mt-4 text-[14px] leading-[1.8] text-slate-600">This is not a general automation platform. It is a carefully scoped set of proposed capabilities, designed to reduce the administrative burden on healthcare professionals — not to substitute for their clinical judgement.</p>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={title} delay={index * 55}>
                  <article className="h-full rounded-[14px] border border-amber-200 bg-amber-50/80 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(217,119,6,0.12)] sm:p-5">
                    <Icon className="h-6 w-6 text-slate-900" strokeWidth={1.8} aria-hidden="true" />
                    <h3 className="mt-3 font-franklin text-[13px] font-bold leading-snug text-slate-900">{title}</h3>
                    <p className="mt-2 text-[11px] leading-[1.6] text-slate-500">{text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-[720px]">
            <SectionTitle center eyebrow="Operating Principles" title="Non-Negotiable Principles for V3" />
            <ul className="mt-6 space-y-3">
              {principles.map((principle, index) => (
                <Reveal as="li" key={principle} delay={index * 45} className="flex items-center gap-3 rounded-[12px] border border-slate-100 bg-white px-4 py-3 text-[12px] leading-5 text-slate-600 shadow-[0_2px_8px_rgba(15,23,42,0.025)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-emerald-400 text-white"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>
                  {principle}
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <CtaBand title="Discuss THOS V3" text="Interested in exploring the responsible development of THOS V3 automation capabilities?" primary={{ label: "Enquiry THOS V3", to: ROUTES.enquiry }} secondary={{ label: "Explore THOS V4", to: ROUTES.thosV4 }} bg={IMG.thosV3Cta} />
    </>
  );
}
