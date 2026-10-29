import {
  Award, BadgeIndianRupee, Bike, Briefcase, Building2, CalendarDays, Car, Check, CheckCircle2,
  ClipboardCheck, GraduationCap, Globe2, HandHeart, Heart, HeartHandshake, HeartPulse, Laptop, Layers, LifeBuoy,
  Map, MapPin, Medal, MonitorSmartphone, Network, Pill as PillIcon, ShieldCheck, Sprout, Star, Store, TrendingUp,
  User, UserPlus, Users, UsersRound, Wallet, Zap
} from "lucide-react";
import CtaBand from "../components/CtaBand";
import { Faq } from "../components/extra";
import { Btn, Container, Eyebrow, Pill, Reveal, Section, SectionTitle, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import cmCcmAppImage from "../assets/CMCCM.png";
import { EXTERNAL, ROUTES } from "../lib/links";

const DO = [
  { icon: UsersRound, title: "Support Individuals & Families", text: "Guide people in accessing the healthcare they need." },
  { icon: Heart, title: "Build Community Relationships", text: "Earn trust as a reliable healthcare link in your community." },
  { icon: TrendingUp, title: "Grow Within Telth", text: "Build opportunities and advance within the Telth network." },
  { icon: Laptop, title: "Work with Telth Platforms", text: "Use Telth's digital healthcare ecosystem and tools." },
  { icon: GraduationCap, title: "Develop Your Skills", text: "Build healthcare, technology and professional capabilities." },
];

const STEP_NAMES = ["Discover", "Check Eligibility", "Screening & Assessment", "Training & Certification", "Contract & Onboarding", "Start Your Journey"];
const TRACKS = [
  {
    role: "Care Manager",
    desc: [
      "Understand the Care Manager opportunity and how Telth works within the community healthcare ecosystem.",
      "Review qualifications and readiness.",
      "After you apply, learn about the Care Manager role and how Telth works within the healthcare ecosystem.",
      "Care Manager orientation",
      "Complete documentation, receive your Care Manager ID, and get access to Telth systems and work tools.",
      "Begin serving your community through Telth as a certified Care Manager.",
    ],
    lists: { 1: ["Minimum 10+2 qualification", "Relevant healthcare / Skill India training preferred"], 3: ["Healthcare assistance", "Telehealth & HES", "Telth platforms and devices", "Care-plan processes", "Compliance and patient safety"] } as Record<number, string[]>,
  },
  {
    role: "Collaborative Care Manager",
    desc: [
      "Coordinate care between patients, physicians and care managers and support consultation, care plan and followups",
      "Review qualifications and readiness.",
      "After you apply, learn about the CCM role and how Telth works within the healthcare ecosystem.",
      "Telth CCM app and workflow training",
      "Complete documentation, receive your CCM ID, and get access to Telth systems and work tools.",
      "Begin serving your community through Telth in the Collaborative Care Manager role.",
    ],
    lists: { 1: ["Diploma or degree in nursing.", "Valid professional and clinical care experience preferred"], 3: ["Patient assessment and vital-sign documentation", "Telehealth, HES and approved device training", "Care plan monitoring and followup coordination", "Clinical red flag identification and escalation", "Consent, privacy, compliance and patient safety"] } as Record<number, string[]>,
  },
];

const EARN = [
  { label: "Basic Contract Pay", icon: Wallet },
  { label: "Care Coordination Fees", sub: "Per appointment", icon: CalendarDays },
  { label: "Care Plan Share & Renewals", icon: ClipboardCheck },
  { label: "T-Mart Earnings", icon: Store },
  { label: "NatLife Earnings", icon: Sprout },
  { label: "ePharmacy Incentives", icon: PillIcon },
  { label: "Affiliate Marketing Incentives", icon: Layers },
  { label: "Performance Incentives", icon: Star },
];

const LADDER = [
  { label: "Associate Care Manager", icon: User },
  { label: "Care Manager", icon: UserPlus, members: "250 Members" },
  { label: "Senior Care Manager", icon: Medal },
  { label: "Territory Care Manager", icon: MapPin },
  { label: "Regional Care Manager", icon: Map },
  { label: "International Opportunities", icon: Globe2 },
];

// UPDATED: MARKETS now includes full country names and sub-labels
const MARKETS = [
  { flag: "🇬🇧", name: "UK", sub: "United Kingdom" },
  { flag: "🇪🇺", name: "Europe", sub: "European Markets" },
  { flag: "🇦🇪", name: "UAE", sub: "United Arab Emirates" },
  { flag: "🇸🇦", name: "Saudi Arabia", sub: "Kingdom of Saudi Arabia" },
  { flag: "🌐", name: "GCC & Global", sub: "Other Global Markets" },
];

const GLOBAL_STEPS = [
  ["Build Your Experience", "Develop your healthcare and technology skills through your Telth journey."],
  ["Upgrade Your Qualifications", "Continue developing your professional qualifications and certifications."],
  ["Prepare for International Requirements", "Language, licensing and professional requirements for global markets."],
  ["Explore Global Opportunities", "Gain international exposure and explore potential healthcare career opportunities."],
];
const WHY = [
  { icon: Sprout, title: "Meaningful Work", text: "Real people. Real impact." },
  { icon: TrendingUp, title: "Career Growth", text: "Build your skills and advance your career." },
  { icon: LifeBuoy, title: "Support & Safety", text: "A supported working environment." },
  { icon: Award, title: "Attractive Benefits", text: "Competitive pay and incentives." },
  { icon: Network, title: "Long-Term Opportunities", text: "Be part of a growing healthcare ecosystem." },
];
const FAQS = [
  { q: "What is Telth?", a: "Telth is a healthcare technology and services ecosystem connecting people, care teams, digital tools and care services." },
  { q: "What is CM / CCM?", a: "A Care Manager supports people in navigating care and coordinating appropriate follow-up. A Collaborative Care Manager works with care managers and clinical partners as part of a coordinated care model." },
  { q: "How does Telth support care managers?", a: "The program may provide role-based orientation, training, digital tools and workflow guidance. Specific support depends on role, eligibility and program terms." },
  { q: "What is HES?", a: "The Health Examination System is a set of assessment tools used by trained care staff to record supported measurements and connect the results with the care workflow." },
  { q: "What are the ways a Care Manager can earn?", a: "Potential components include contract pay, care coordination fees, care-plan renewals, marketplace activity and performance incentives. Availability and amounts depend on role, activity and applicable terms." },
  { q: "Does Telth provide digital tools?", a: "Telth provides digital platforms intended to support appointments, care context, care plans and coordination. Available features depend on role access and program configuration." },
  { q: "How long is the training period?", a: "Training duration depends on the role, readiness assessment and program requirements. The team will share the applicable schedule during the selection process." },
  { q: "Is mobility support available?", a: "Mobility support may be available for eligible participants, subject to the applicable criteria, terms and approval." },
];

export default function CmCcmScreen() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#EFF6FF_0%,#fff_65%)]">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] animate-float rounded-full bg-blue-200/50 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <Reveal><Eyebrow>Telth CM / CCM</Eyebrow></Reveal>
            <Reveal delay={90}>
              <h1 className="mt-3 font-franklin text-[38px] font-semibold leading-[1.12] sm:text-[50px] lg:text-[56px]">
                More Than a Job
                <span className="block text-brand-bright">A Healthier Tomorrow</span>
              </h1>
            </Reveal>
            <Reveal delay={180}><p className="mt-6 max-w-[520px] text-[16px] leading-[1.75] sm:text-[18px]">Join Telth as a Care Manager and be part of a growing community healthcare ecosystem.</p></Reveal>
            <Reveal delay={260}><div className="mt-8"><Btn to={ROUTES.cmApplication} arrow>Become a care manager</Btn></div></Reveal>
          </div>
          <Reveal dir="zoom" delay={150}>
            <div className="img-zoom overflow-hidden rounded-[24px] shadow-lift">
              <img src={IMG.heroCare} alt="A Telth care manager with a family at home" className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* care management intro */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Care Management" title="Be the Human Connection in Care" text="Telth Care Managers support individuals and families in accessing healthcare, build trusted relationships within their communities, and work with Telth's digital healthcare ecosystem." />
          <div className="mx-auto mt-10 grid max-w-[660px] gap-5 sm:grid-cols-2">
            {[{ icon: Heart, title: "Support People", text: "Help individuals and families access healthcare services and navigate the care system." }, { icon: Layers, title: "Connect the Ecosystem", text: "Work with Telth's digital healthcare platforms and care network to deliver seamless care." }].map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={i * 100}><article className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-card sm:p-7"><span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${i === 0 ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"}`}><Icon className="h-5 w-5" strokeWidth={1.8}/></span><h3 className="mt-5 font-franklin text-[17px] font-bold text-ink">{title}</h3><p className="mt-2 text-[14px] leading-[1.65] text-body">{text}</p></article></Reveal>)}
          </div>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="What You'll Do" title="A meaningful role at the intersection of healthcare, community, and technology." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {DO.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={(i % 3) * 80} className={i === 0 ? "lg:col-span-2" : i === 1 ? "lg:col-span-2" : i === 2 ? "lg:col-span-2" : i === 3 ? "lg:col-start-2 lg:col-span-2" : "lg:col-start-4 lg:col-span-2"}>
              <article className="card-hover flex h-full min-h-[120px] items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><span className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl ${i % 2 === 0 ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"}`}><Icon className="h-5 w-5" strokeWidth={1.8}/></span><div><h3 className="font-franklin text-[16px] font-bold leading-snug text-ink">{title}</h3><p className="mt-2 text-[14px] leading-[1.6] text-body">{text}</p></div></article>
            </Reveal>)}
          </div>
        </Container>
      </Section>

      {/* application process */}
      <Section>
        <Container className="!max-w-[1480px]">
          <SectionTitle center eyebrow="Application Process" title="From Application to Care" />
          <div className="mt-14 space-y-14">
            {TRACKS.map((t) => (
              <Reveal key={t.role}>
                <div className="relative">
                  <div className={`mx-auto mb-10 w-fit rounded-xl px-7 py-3.5 text-[15px] font-bold text-white shadow-sm ${t.role === "Care Manager" ? "bg-[#07969d]" : "bg-[#20a878]"}`}>{t.role}</div>
                  <ol className="grid items-start gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {STEP_NAMES.map((n, i) => (
                      <li key={n} className={`relative flex flex-col items-center xl:after:absolute xl:after:left-1/2 xl:after:top-[17px] xl:after:z-0 xl:after:h-[2px] xl:after:w-full xl:after:bg-[#d8ecee] ${i === STEP_NAMES.length - 1 ? "xl:after:hidden" : ""}`}>
                        <span className="relative z-10 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#2d70b8] text-[13px] font-bold text-white shadow-[0_4px_10px_rgba(15,40,70,.22)]">0{i + 1}</span>
                        <article className={`w-full rounded-lg border border-[#cfe0f8] bg-[#f4f8fd] px-3.5 py-4 text-center ${i === 3 ? "min-h-[174px]" : "min-h-[132px]"}`}>
                          <h4 className="font-franklin text-[13.5px] font-bold leading-snug text-slate-800 sm:text-[14px]">{n}</h4>
                          <p className="mt-2 text-[12px] leading-[1.55] text-slate-500 sm:text-[12.5px]">{t.desc[i]}</p>
                          {t.lists[i] && <ul className="mt-2.5 space-y-1.5 text-left">{t.lists[i].map((l) => <li key={l} className="flex gap-1.5 text-[11.5px] leading-[1.45] text-slate-500 sm:text-[12px]"><span aria-hidden="true">•</span><span>{l}</span></li>)}</ul>}
                        </article>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* app */}
      <Section>
        <Container>
          <Split
            left={<Reveal dir="zoom"><img src={cmCcmAppImage} alt="Telth CM/CCM care manager app screen" loading="lazy" className="mx-auto max-h-[520px] w-auto drop-shadow-[0_30px_60px_rgba(104,71,245,.25)]" /></Reveal>}
            right={<div>
              <Eyebrow>Telth CM/CCM App</Eyebrow>
              <p className="mt-5 max-w-[500px] text-[20px] leading-[1.45] text-slate-600">A simple place to manage appointments, availability, patient care context, consultations and applicable earnings information.</p>
              <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.14em] text-muted">Why use it?</p>
              <p className="mt-2 max-w-[520px] text-[16px] leading-[1.8] text-body">Flexible practice modes · Connected patient context · Organized appointments · Care-team coordination · Practice visibility</p>
              <div className="mt-7"><Btn to={EXTERNAL.playstore}>Install / Explore CM/CCM App</Btn></div>
            </div>}
          />
        </Container>
      </Section>

      {/* tools */}
      <Section tone="dark" bg={IMG.waveTealWide}>
        <Container>
          <SectionTitle center light eyebrow="Tools & Enablement" title="Technology That Helps You Serve" />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Reveal dir="left"><img src={IMG.careManager} alt="Telth Care Manager using connected health tools" loading="lazy" className="h-full min-h-[250px] w-full rounded-2xl object-cover" /></Reveal>
            <Reveal dir="right"><article className="h-full rounded-2xl border border-white/10 bg-[#132b45]/95 p-6 text-white shadow-card sm:p-8">
              <div className="flex items-start gap-3"><span className="rounded-xl bg-emerald-400/15 p-3 text-emerald-300"><HeartPulse className="h-5 w-5" /></span><div><h3 className="font-franklin text-[19px] font-bold">Health Examination System</h3><p className="text-[12px] text-slate-400">A Core Requirement for Care Managers</p></div></div>
              <p className="mt-5 text-[14px] leading-[1.7] text-slate-300">The HES setup supports Care Managers in recording patient vitals, performing point-of-care testing, connecting with Telth platforms and capturing accurate data for better care.</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">{["Record patient vitals", "Point-of-care testing", "Connect to Telth platform", "Accurate data for better care"].map((t) => <span key={t} className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[12px] text-slate-200"><CheckCircle2 className="h-4 w-4 text-teal-300" />{t}</span>)}</div>
            </article></Reveal>
            <Reveal dir="left"><article className="h-full rounded-2xl bg-slate-50 p-6 text-ink sm:p-7"><span className="inline-flex rounded-lg bg-blue-100 p-2 text-blue-700"><Laptop className="h-5 w-5"/></span><h3 className="mt-3 font-franklin text-[17px] font-bold">Telth Digital Platforms</h3><p className="mt-1 text-[12px] text-muted">Workflow &amp; Care Management</p><p className="mt-3 text-[13px] leading-[1.65]">Digital platforms designed to support your Care Manager workflow across key Telth services.</p><div className="mt-4 flex flex-wrap gap-2">{["Practice", "Care Plans", "T-Mart", "NatLife", "ePharmacy"].map((t) => <span key={t} className="rounded-full border border-blue-100 bg-white px-3 py-1 text-[11px] font-semibold text-blue-700">{t}</span>)}</div></article></Reveal>
            <Reveal dir="right"><article className="h-full rounded-2xl bg-emerald-50 p-6 text-ink sm:p-7"><span className="inline-flex rounded-lg bg-emerald-100 p-2 text-emerald-700"><Car className="h-5 w-5"/></span><h3 className="mt-3 font-franklin text-[17px] font-bold">Mobility Support</h3><p className="mt-3 text-[13px] leading-[1.65]">Vehicle purchase or mobility support may be available based on certain criteria, subject to eligibility and applicable terms.</p><div className="mt-4 flex flex-wrap gap-4 text-[12px] font-semibold text-emerald-700"><span><Car className="mr-1 inline h-4 w-4"/>Car support</span><span><Bike className="mr-1 inline h-4 w-4"/>Two-wheeler support</span></div></article></Reveal>
          </div>
        </Container>
      </Section>

      {/* earnings */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div><Eyebrow>Earning Opportunity</Eyebrow><h2 className="mt-3 font-franklin text-[32px] font-semibold leading-tight text-ink sm:text-[38px]">Multiple Ways<br/><span className="text-brand-bright">to Earn</span></h2><p className="mt-5 max-w-[470px] text-[15px] leading-[1.75] text-body">Telth's earning and incentive structure includes multiple components, subject to role, activity, performance and applicable terms.</p>
              <Reveal dir="left"><div className="mt-7 rounded-[22px] bg-gradient-to-br from-[#112644] to-[#2365ae] p-6 text-white shadow-card sm:p-7"><p className="text-[13px] text-slate-300">Indicative Target Opportunity</p><p className="mt-2 text-[16px] font-semibold">Up to</p><p className="font-franklin text-[48px] font-bold leading-none sm:text-[54px]">₹65,000<span className="text-[20px] font-semibold text-slate-200">/mo</span></p><p className="mt-4 border-t border-white/15 pt-3 text-[12px] leading-[1.55] text-slate-300">*Indicative target opportunity; actual earnings vary by role, activity, performance and applicable terms.</p></div></Reveal>
              <p className="mt-4 text-[11px] leading-relaxed text-muted">All earning components are subject to role, activity, performance and applicable terms.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">{EARN.map(({label, sub, icon: Icon}, i) => <Reveal key={label} delay={(i % 2) * 70}><article className="card-hover flex min-h-[86px] items-center gap-3 rounded-2xl border border-slate-200 bg-[#f4f8fc] p-4"><span className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl ${i > 3 ? "bg-emerald-100 text-emerald-600" : "bg-blue-100 text-blue-600"}`}><Icon className="h-5 w-5" strokeWidth={1.8}/></span><div><h3 className="font-franklin text-[14px] font-semibold leading-snug text-ink">{label}</h3>{sub && <p className="mt-1 text-[11px] text-muted">{sub}</p>}</div></article></Reveal>)}</div>
          </div>
        </Container>
      </Section>

      {/* career path */}
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="Career Path" title="Grow With Telth" text="Build your skills. Grow your responsibilities. Shape your healthcare career." />
          <ol className="mx-auto mt-16 grid max-w-[1060px] grid-cols-2 items-end gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-3">
            {LADDER.map((item, i) => {
              const Icon = item.icon;
              const accent = ["#1b5fa8", "#1678b7", "#10a79d", "#0eb28d", "#0bb77f", "#26ad72"][i];
              return (
                <Reveal as="li" key={item.label} delay={i * 90} className="relative flex flex-col items-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center" style={{color: accent}}>
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <div style={{height: `${96 + i * 22}px`, borderBottomColor: accent}} className="relative flex w-full flex-col items-center justify-center rounded-t-lg border border-slate-200 border-b-[4px] bg-white px-2 pb-3 pt-4 text-center shadow-[0_2px_8px_rgba(15,23,42,.06)]">
                    <span className="text-[11px] font-bold" style={{color: accent}}>0{i + 1}</span>
                    <p className="mt-1 font-franklin text-[13px] font-bold leading-[1.25] text-slate-800">{item.label}</p>
                    {item.members && <span className="mt-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-semibold leading-none text-emerald-600">{item.members}</span>}
                    {i < LADDER.length - 1 && <span aria-hidden="true" className="absolute -right-[10px] bottom-[-2px] z-10 text-[14px] font-bold text-teal-500">›</span>}
                  </div>
                  <span style={{backgroundColor: accent}} className="absolute -bottom-5 flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold text-white shadow-[0_3px_8px_rgba(15,23,42,.18)] ring-4 ring-[#f4f8fc]">
                    {i + 1}
                  </span>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </Section>

      {/* UPDATED: Global Pathway Section - Image Based Design with Flags */}
      <Section tone="dark" bg={IMG.cmGlobalWave}>
        <Container>
          <SectionTitle center light eyebrow="Global Pathway" title="Take Your Healthcare Career Global" />
          
          {/* Flags Horizontal Pill Layout */}
          <div className="relative mx-auto mt-14 max-w-5xl">
            {/* Decorative globe glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
            
            <div className="relative flex w-full flex-nowrap items-center justify-start gap-2 overflow-x-auto rounded-[26px] border border-white/10 bg-white/[0.06] px-4 py-8 backdrop-blur sm:justify-center sm:px-6">
              {MARKETS.map((m, i) => (
                <Reveal key={m.name} delay={i * 80} className="w-max flex-none">
                  <div className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.12] px-3.5 py-3 backdrop-blur transition hover:bg-white/[0.2] sm:px-4">
                    <span className="text-[28px] leading-none">{m.flag}</span>
                    <div className="text-left">
                      <p className="text-[14px] font-bold text-white">{m.name}</p>
                      <p className="text-[12px] font-medium text-slate-400">{m.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* 4 Global Steps */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GLOBAL_STEPS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="card-hover h-full rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
                  <span className="font-franklin text-[13px] font-bold text-sky-300">0{i + 1}</span>
                  <h3 className="mt-2 text-[17px] font-bold !text-white">{t}</h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-slate-300">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* why */}
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="Care Management" title={<>Why Build Your Career<br/><span className="text-brand-bright">With Telth</span></>} text="Telth Care Managers support individuals and families in accessing healthcare, build trusted relationships within their communities, and work with Telth's digital healthcare ecosystem." />
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-6">{WHY.map(({icon: Icon, title, text}, i) => <Reveal key={title} className={i < 3 ? "lg:col-span-2" : i === 3 ? "lg:col-start-2 lg:col-span-2" : "lg:col-start-4 lg:col-span-2"}><article className="flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"><span className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${i % 2 ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"}`}><Icon className="h-5 w-5" strokeWidth={1.8}/></span><div><h3 className="font-franklin text-[14px] font-bold text-ink">{title}</h3><p className="mt-1 text-[12px] leading-relaxed text-body">{text}</p></div></article></Reveal>)}</div>
        </Container>
      </Section>

      {/* roles */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Roles" title={<>Care Management<br/><span className="text-brand-bright">Connected</span></>} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal><article className="card-hover h-full overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-card">
              <div className="h-2 bg-gradient-to-r from-[#1B5FA8] to-[#0D9E8D]" />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3"><span className="rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 p-3 text-white"><Heart className="h-5 w-5"/></span><div><Pill>CM</Pill><h3 className="mt-1 text-[22px] font-bold">Care Manager</h3></div></div>
                <p className="mt-3 text-[14.5px] leading-[1.75]">The Care Manager is Telth's community-facing healthcare professional. They support individuals and families in accessing healthcare, build trusted relationships, coordinate personalized care plans, and operate within Telth's integrated digital healthcare ecosystem to deliver meaningful, community-based care.</p>
                <ul className="mt-5 space-y-2.5">
                  {["Community-facing healthcare professional", "Works with individuals and families", "Manages personalized care plans", "Uses Telth digital platforms", "Earns across multiple components"].map((t) => (
                    <li key={t} className="flex gap-2.5 text-[14.5px]"><Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" strokeWidth={3} />{t}</li>
                  ))}
                </ul>
                <div className="mt-7"><Btn to={ROUTES.cmApplication} arrow>Apply as CM</Btn></div>
              </div>
            </article></Reveal>
            <Reveal delay={120}><article className="h-full overflow-hidden rounded-[24px] border border-slate-100 bg-[#f3f7fb] shadow-card">
              <div className="h-2 bg-gradient-to-r from-[#0D9E8D] to-[#28A86A]" />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3"><span className="rounded-xl bg-[#18a77e] p-3 text-white"><Layers className="h-5 w-5"/></span><div><Pill tone="green">CCM</Pill><h3 className="mt-1 text-[22px] font-bold">Collaborative Care Manager</h3></div></div>
                <p className="mt-3 text-[14.5px] leading-[1.75]">The Collaborative Care Manager operates within the Telth ecosystem in a collaborative care-management capacity, working alongside Care Managers and clinical partners. Detailed CCM-specific responsibilities and qualifications will be shared as the program develops.</p>
                <div className="mt-5 rounded-2xl border border-[#c9eeea] bg-[#e8f8f6] p-4 text-[13px] leading-[1.65] text-slate-600"><Zap className="mr-2 inline h-4 w-4 text-[#12a88a]"/> Detailed CCM role information, responsibilities and qualifications will be available as the program expands. Stay connected with Telth for updates.</div>
                <span className="mx-auto mt-6 flex w-fit justify-center rounded-full bg-[#91d2cc] px-8 py-2.5 text-[13px] font-bold text-white">Coming soon</span>
              </div>
            </article></Reveal>
          </div>
        </Container>
      </Section>

      {/* faq */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Common Questions" title="Frequently Asked" />
          <Faq items={FAQS} />
        </Container>
      </Section>

      <CtaBand
        title="Ready to Start Your Journey?"
        text="Build your skills. Serve your community. Grow with Telth."
        bg={IMG.cmCta}
        primary={{ label: "Apply now", to: ROUTES.cmApplication }}
        secondary={{ label: "Book an orientation", to: ROUTES.bookOrientation }}
      />
    </>
  );
}
