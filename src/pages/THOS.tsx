import { useState, type KeyboardEvent } from "react";
import {
  Activity,
  BellRing,
  Blocks,
  Brain,
  CalendarClock,
  CalendarDays,
  Check,
  ClipboardList,
  FileHeart,
  Gauge,
  Globe,
  Globe2,
  KeyRound,
  LineChart,
  MessagesSquare,
  Network,
  Radar,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Users,
  UserCheck,
  X,
  type LucideIcon,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { Container, Reveal } from "../components/ui";

const OBJECTIVES = [
  { icon: Network, title: "Connected Infrastructure", text: "A single digital layer designed to connect authorised users, care workflows, devices and data across the ecosystem." },
  { icon: ShieldCheck, title: "Trust & Governance", text: "Built-in consent management, data governance and security frameworks designed for healthcare compliance." },
  { icon: Globe, title: "Global Scalability", text: "Designed from the outset for multinational, multilingual deployment across diverse healthcare contexts." },
  { icon: UserCheck, title: "Human Accountability", text: "Every automated function is designed with human oversight and clinical accountability as a core principle." },
];

type Capability = { icon: LucideIcon; title: string; text: string };
type RoadmapVersion = {
  version: string;
  stage: string;
  tone: "green" | "blue" | "amber" | "violet";
  title: string;
  description: string;
  noticeLabel: string;
  notice: string;
  overviewEyebrow: string;
  overviewTitle: string;
  paragraphs: string[];
  aside?: { eyebrow: string; title: string; lead?: string; items: string[]; kind?: "warning" | "evidence" };
  capabilitiesEyebrow: string;
  capabilitiesTitle: string;
  capabilities: Capability[];
  principles?: { eyebrow: string; title: string; items: string[] };
  closing?: string;
};

const VERSIONS: RoadmapVersion[] = [
  {
    version: "THOS V1", stage: "Current Foundation", tone: "green",
    title: "Intelligent Connected Care Infrastructure",
    description: "A commercially practical digital foundation designed to connect authorised users, workflows, data and services across the Telth ecosystem — the starting point for everything that follows.",
    noticeLabel: "Foundation Stage:",
    notice: "THOS V1 represents the current commercial foundation — a practical, deployable digital infrastructure layer. Capabilities described are designed, not all currently deployed in all markets.",
    overviewEyebrow: "Overview", overviewTitle: "A Commercially Practical Foundation",
    paragraphs: [
      "THOS V1 is designed to deliver the foundational digital infrastructure that healthcare organisations need to begin connecting their people, services and workflows — without requiring a complete system overhaul.",
      "It is pragmatic, deployable and designed for real-world healthcare settings — where complexity, regulation and clinical culture all matter.",
    ],
    aside: { eyebrow: "What V1 Is Not", title: "What V1 Is Not", kind: "warning", items: [
      "A replacement for existing clinical systems or EHR infrastructure",
      "An autonomous clinical decision-making system",
      "A general consumer app platform",
      "A claim of advanced AI capabilities beyond what is described",
    ] },
    capabilitiesEyebrow: "Proposed Capabilities", capabilitiesTitle: "What THOS V1 Is Designed to Do",
    capabilities: [
      { icon: KeyRound, title: "Identity & Access Management", text: "Secure, role-based access for patients, clinicians, care managers and administrators across the ecosystem." },
      { icon: CalendarDays, title: "Appointment & Scheduling", text: "Intelligent scheduling tools designed to connect individuals to available care services and providers." },
      { icon: ClipboardList, title: "Care Plan Management", text: "Structured care plans designed to coordinate multi-provider care across community, home and personal care settings." },
      { icon: MessagesSquare, title: "Secure Clinical Messaging", text: "HIPAA-aligned messaging designed to support care team communication within a governed digital environment." },
      { icon: FileHeart, title: "Health Records & Data", text: "A unified patient record designed to be accessible to authorised users across care settings — with consent at its core." },
      { icon: Blocks, title: "Partner & Service Integration", text: "APIs and integration frameworks designed to connect vetted third-party services into the care workflow." },
    ],
  },
  {
    version: "THOS V2", stage: "Planned", tone: "blue",
    title: "From Connected Information to Responsible Insight",
    description: "Building from the V1 connected foundation toward responsible clinical intelligence — designed with evidence governance, clinical oversight and cross-cultural trust at its core.",
    noticeLabel: "Planned Capability:",
    notice: "THOS V2 represents planned future development. Capabilities described are proposed and subject to research, regulatory review and evidence development before commercial deployment.",
    overviewEyebrow: "Precision Health Intelligence", overviewTitle: "From Data to Responsible Insight",
    paragraphs: [
      "THOS V2 is designed to build on the connected infrastructure of V1 — applying analytical and intelligence layers that may support better clinical decision-making, population health management and personalised care planning.",
      "All intelligence capabilities are designed to support — not replace — clinical judgement. Human oversight remains central to every insight generated.",
    ],
    aside: { eyebrow: "Evidence & Governance", title: "Evidence & Governance", lead: "THOS V2 capabilities will be developed and validated through:", kind: "evidence", items: [
      "Rigorous clinical evidence development", "Regulatory engagement in relevant markets", "Independent ethics review", "Published research and transparent documentation", "Cross-cultural validation across Telth's target populations",
    ] },
    capabilitiesEyebrow: "Research Themes", capabilitiesTitle: "THOS V2 Intelligence Areas",
    capabilities: [
      { icon: Activity, title: "Population Health Analytics", text: "Designed to support analysis of anonymised, consented population health data to identify patterns and inform care planning." },
      { icon: Gauge, title: "Clinical Risk Stratification", text: "Tools designed to help clinicians identify and prioritise individuals who may benefit from earlier intervention or closer monitoring." },
      { icon: LineChart, title: "Outcome Intelligence", text: "Analytics frameworks designed to support measurement and improvement of care outcomes across the ecosystem." },
    ],
  },
  {
    version: "THOS V3", stage: "Future", tone: "amber",
    title: "Automation Where It Is Safe, Useful and Accountable",
    description: "Proposed automation capabilities for specific healthcare workflows — designed only for contexts where autonomy has been validated as safe, useful and subject to clear human accountability.",
    noticeLabel: "Future Capability:",
    notice: "THOS V3 describes future, not current, capabilities. These are not commercially available today. Deployment will be subject to clinical validation, regulatory approval and human oversight frameworks in each relevant market.",
    overviewEyebrow: "Potential Applications", overviewTitle: "Purposeful Automation",
    paragraphs: [
      "THOS V3 explores automation only in contexts where it has been rigorously validated, where the benefits clearly outweigh the risks, and where human accountability structures are in place and functioning.",
      "This is not a general automation platform. It is a carefully scoped set of proposed capabilities, designed to reduce the administrative burden on healthcare professionals — not to substitute for their clinical judgement.",
    ],
    capabilitiesEyebrow: "Proposed Capabilities", capabilitiesTitle: "Where Automation May Help",
    capabilities: [
      { icon: BellRing, title: "Intelligent Care Alerts", text: "Automated flagging of clinical data anomalies designed to assist care teams in prioritising responses, with human confirmation required." },
      { icon: ClipboardList, title: "Care Plan Automation", text: "Workflow automation designed to reduce administrative burden in care plan management — always within defined clinical parameters." },
      { icon: Radar, title: "Monitoring Response", text: "Proposed automated responses to remote monitoring data within pre-approved clinical pathways and escalation protocols." },
      { icon: CalendarClock, title: "Scheduling Optimisation", text: "Intelligent scheduling assistance designed to improve care team efficiency and reduce patient waiting times." },
    ],
    principles: { eyebrow: "Operating Principles", title: "Non-Negotiable Principles for V3", items: [
      "Every automated function operates within explicitly approved parameters",
      "Clinical accountability remains with qualified healthcare professionals at all times",
      "Individuals have the right to understand and challenge any automated decision affecting their care",
      "All autonomous functions are subject to ongoing monitoring, audit and review",
      "Systems may be overridden or disabled by authorised clinical staff without restriction",
    ] },
  },
  {
    version: "THOS V4", stage: "Research Stage", tone: "violet",
    title: "A Research Horizon for More Adaptive Care",
    description: "THOS V4 represents a long-term research horizon — not a commercially proposed product. All concepts described are at an early research stage and are subject to rigorous ethics review, evidence development and responsible governance before any commercial consideration.",
    noticeLabel: "Research Stage — Not Commercially Proposed:",
    notice: "All THOS V4 concepts are at an early research and exploration stage. Nothing described here is currently available, commercially proposed or near-term planned. Telth is committed to responsible, evidence-grounded development of all advanced capabilities.",
    overviewEyebrow: "Research Horizon", overviewTitle: "Thinking Beyond Current Limits",
    paragraphs: [
      "THOS V4 explores questions at the boundary of current healthcare technology — not to rush toward them, but to understand the ethical, clinical and societal considerations that must be worked through responsibly before any advanced capability is considered for deployment.",
    ],
    aside: { eyebrow: "Ethical Commitments", title: "Ethical Commitments", kind: "evidence", items: [
      "No V4 capability will be deployed without independent ethics review",
      "All research will be conducted with full informed consent",
      "Research findings will be published and made available for peer review",
      "Human dignity and autonomy are non-negotiable in all research contexts",
      "We will not pursue capabilities that cannot be governed responsibly",
    ] },
    capabilitiesEyebrow: "Exploration Areas", capabilitiesTitle: "THOS V4 Research Themes",
    capabilities: [
      { icon: Brain, title: "NeuroEquivalence Research", text: "Research exploring if computational systems can model human cognitive processes related to care. At a research stage only." },
      { icon: SlidersHorizontal, title: "Adaptive Care Personalisation", text: "Research systems that adapt care based on individual response, with ethics and clinical validation." },
      { icon: Globe2, title: "Cross-cultural Health Intelligence", text: "Research themes addressing how health data and insights may be applied responsibly across diverse populations and contexts." },
      { icon: Users, title: "Human-AI Collaboration Models", text: "Research how healthcare professionals and intelligent systems collaborate effectively, keeping human agency central." },
    ],
  },
];

const noticeStyles = {
  green: "border-emerald-400 bg-emerald-50 text-emerald-900",
  blue: "border-blue-500 bg-blue-50 text-blue-800",
  amber: "border-amber-500 bg-amber-50 text-amber-900",
  violet: "border-violet-500 bg-violet-50 text-violet-900",
};
const asideStyles = {
  warning: "border-amber-200 bg-amber-50 text-amber-900",
  evidence: "border-blue-200 bg-blue-50 text-blue-900",
};
const tabStyles = {
  green: "border-emerald-500 bg-emerald-500 text-white",
  blue: "border-blue-500 bg-blue-500 text-white",
  amber: "border-amber-500 bg-amber-500 text-white",
  violet: "border-violet-500 bg-violet-500 text-white",
};

export default function THOS() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = VERSIONS[activeIndex];

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    let nextIndex = activeIndex;
    if (event.key === "ArrowRight") nextIndex = (activeIndex + 1) % VERSIONS.length;
    else if (event.key === "ArrowLeft") nextIndex = (activeIndex - 1 + VERSIONS.length) % VERSIONS.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = VERSIONS.length - 1;
    else return;
    event.preventDefault();
    setActiveIndex(nextIndex);
    document.getElementById(`thos-roadmap-tab-${nextIndex}`)?.focus();
  };

  return (
    <>
      <PageHero
        eyebrow="THOS — Telth Healthcare Operating System"
        title="One Operating Layer. Many Care Journeys"
        text="THOS is the proposed intelligent digital foundation connecting people, healthcare workflows, devices, services and data across the entire Telth ecosystem — designed with trust, governance and human accountability at its core."
      />

      <section className="bg-white py-12 sm:py-16">
        <Container className="max-w-[1040px]">
          <Reveal className="text-center">
            <p className="font-open text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600">Design Objectives</p>
            <h2 className="mt-2 font-franklin text-[24px] font-semibold text-slate-900 sm:text-[28px]">Core Design Objectives</h2>
          </Reveal>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {OBJECTIVES.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 60} className="h-full">
                <article className="h-full rounded-[14px] border border-slate-100 bg-[#f7f9fc] p-4 sm:p-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-blue-50 text-blue-600">
                    <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-franklin text-[12px] font-bold leading-snug text-slate-900 sm:text-[13px]">{title}</h3>
                  <p className="mt-2 text-[10px] leading-[1.55] text-slate-500 sm:text-[11px]">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <main className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-24 -z-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-[28rem] -z-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
      <Container className="relative z-10 max-w-[1200px]">
        <header className="mx-auto max-w-4xl text-center">
          <p className="font-open text-[12px] font-semibold uppercase tracking-[0.16em] text-blue-600">Roadmap</p>
          <h1 className="mt-2 font-franklin text-[32px] font-semibold leading-tight text-slate-900 sm:text-[42px]">Four Versions. One Vision.</h1>
          <p className="mx-auto mt-3 max-w-[900px] text-[14px] leading-6 text-slate-600 sm:text-[16px]">
            THOS is designed as a progressive platform — each version building responsibly on the last, with clear distinctions between what is available, planned, future, and at research stage.
          </p>
        </header>

        <div className="mt-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="THOS roadmap versions">
          {VERSIONS.map((version, index) => (
            <button
              key={version.version}
              id={`thos-roadmap-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls="thos-roadmap-panel"
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={handleTabKeyDown}
              className={`min-w-[130px] rounded-full border px-5 py-2 text-[12px] font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${activeIndex === index ? tabStyles[version.tone] : "border-blue-500 bg-white text-blue-600 hover:bg-blue-50"}`}
            >
              {version.version}
            </button>
          ))}
        </div>

        <section
          id="thos-roadmap-panel"
          role="tabpanel"
          aria-labelledby={`thos-roadmap-tab-${activeIndex}`}
          className="mx-auto mt-7 max-w-[1100px] rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10"
        >
          <Reveal key={active.version}>
            <header className="text-center">
              <p className="font-open text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">{active.version} — {active.stage}</p>
              <h2 className="mt-3 font-franklin text-[24px] font-semibold leading-tight text-slate-900 sm:text-[30px]">{active.title}</h2>
              <p className="mx-auto mt-4 max-w-[820px] text-[14px] leading-6 text-slate-600 sm:text-[15px]">{active.description}</p>
            </header>

            <div className={`mt-7 rounded-[12px] border-l-[3px] px-4 py-3 text-[12px] leading-[1.55] ${noticeStyles[active.tone]}`}>
              <strong>{active.noticeLabel}</strong> {active.notice}
            </div>

            {active.version === "THOS V3" ? (
              <>
                <div className="mt-9 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
                  <div>
                    <p className="font-open text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600">{active.overviewEyebrow}</p>
                    <h3 className="mt-2 font-franklin text-[25px] font-semibold leading-tight text-slate-900 sm:text-[30px]">{active.overviewTitle}</h3>
                    {active.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-[13px] leading-[1.8] text-slate-600">{paragraph}</p>)}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {active.capabilities.map(({ icon: Icon, title, text }) => (
                      <article key={title} className="h-full rounded-[14px] border border-amber-200 bg-amber-50/80 p-4 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(217,119,6,0.1)]">
                        <Icon className="h-6 w-6 text-slate-900" aria-hidden="true" />
                        <h4 className="mt-3 font-franklin text-[12px] font-bold leading-snug text-slate-900">{title}</h4>
                        <p className="mt-2 text-[10px] leading-[1.6] text-slate-500">{text}</p>
                      </article>
                    ))}
                  </div>
                </div>
                {active.principles && (
                  <section className="mx-auto mt-10 max-w-[720px]">
                    <div className="text-center">
                      <p className="font-open text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-700">{active.principles.eyebrow}</p>
                      <h3 className="mt-2 font-franklin text-[22px] font-semibold text-slate-900 sm:text-[26px]">{active.principles.title}</h3>
                    </div>
                    <ul className="mt-5 space-y-3">
                      {active.principles.items.map((item) => <li key={item} className="flex items-center gap-3 rounded-[12px] border border-slate-100 px-4 py-3 text-[12px] leading-5 text-slate-600"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-emerald-400 text-white"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>{item}</li>)}
                    </ul>
                  </section>
                )}
              </>
            ) : <>
            <div className={`mt-9 grid gap-7 ${active.aside ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-1"}`}>
              <div>
                <p className="font-open text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600">{active.overviewEyebrow}</p>
                <h3 className="mt-2 font-franklin text-[25px] font-semibold leading-tight text-slate-900 sm:text-[30px]">{active.overviewTitle}</h3>
                {active.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-[13px] leading-[1.8] text-slate-600">{paragraph}</p>)}
              </div>
              {active.aside && (
                <div>
                  <p className="mb-2 font-open text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-600">{active.aside.eyebrow}</p>
                  <div className={`rounded-[14px] border p-4 sm:p-5 ${asideStyles[active.aside.kind ?? "evidence"]}`}>
                    {active.aside.lead && <p className="mb-3 text-[12px] leading-5">{active.aside.lead}</p>}
                    <ul className="space-y-2.5">
                      {active.aside.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[11px] leading-[1.55]">
                          {active.aside?.kind === "warning" ? <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" aria-hidden="true" /> : <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" aria-hidden="true" />}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <section className="mt-10">
              <div className="text-center">
                <p className="font-open text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-700">{active.capabilitiesEyebrow}</p>
                <h3 className="mt-2 font-franklin text-[22px] font-semibold text-slate-900 sm:text-[26px]">{active.capabilitiesTitle}</h3>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {active.capabilities.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="rounded-[14px] border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-blue-50 text-blue-600"><Icon className="h-[18px] w-[18px]" aria-hidden="true" /></span>
                    <h4 className="mt-3 font-franklin text-[13px] font-bold leading-snug text-slate-900">{title}</h4>
                    <p className="mt-2 text-[11px] leading-[1.6] text-slate-500">{text}</p>
                  </article>
                ))}
              </div>
            </section>

            {active.principles && (
              <section className="mx-auto mt-10 max-w-[720px]">
                <div className="text-center">
                  <p className="font-open text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-700">{active.principles.eyebrow}</p>
                  <h3 className="mt-2 font-franklin text-[22px] font-semibold text-slate-900 sm:text-[26px]">{active.principles.title}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {active.principles.items.map((item) => <li key={item} className="flex items-center gap-3 rounded-[12px] border border-slate-100 px-4 py-3 text-[12px] leading-5 text-slate-600"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-emerald-400 text-white"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>{item}</li>)}
                </ul>
              </section>
            )}
            </>}
          </Reveal>
        </section>
      </Container>
      </main>
    </>
  );
}
