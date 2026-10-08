import {
  Award, BadgeIndianRupee, Bike, Car, CheckCircle2, Globe2, GraduationCap, HandHeart, HeartHandshake, LifeBuoy,
  MonitorSmartphone, Network, Rocket, ShieldCheck, Smartphone, Sprout, Stethoscope, TrendingUp, UserPlus, Users, Wallet, Check, Plane,
} from "lucide-react";
import CtaBand from "../components/CtaBand";
import { ConnectedFlow, Faq } from "../components/extra";
import { Btn, Container, Eyebrow, FeatureCard, FeatureGrid, Pill, Reveal, Section, SectionTitle, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import { EXTERNAL, ROUTES } from "../lib/links";

const DO = [
  { icon: HandHeart, title: "Support Individuals & Families", text: "Guide people in accessing the healthcare they need." },
  { icon: HeartHandshake, title: "Build Community Relationships", text: "Earn trust as a reliable healthcare link in your community." },
  { icon: TrendingUp, title: "Grow Within Telth", text: "Build opportunities and advance within the Telth network." },
  { icon: MonitorSmartphone, title: "Work with Telth Platforms", text: "Use Telth's digital healthcare ecosystem and tools." },
  { icon: GraduationCap, title: "Develop Your Skills", text: "Build healthcare, technology and professional capabilities." },
];

const STEP_NAMES = ["Discover", "Check Eligibility", "Screening & Assessment", "Training & Certification", "Contract & Onboarding", "Start Your Journey"];
const TRACKS = [
  {
    role: "Care Manager",
    desc: [
      "Understand the Care Manager opportunity and how Telth works within the community healthcare ecosystem.",
      "Review qualifications and readiness.",
      "After application submission Understand the Care Manager role and how Telth works within the healthcare ecosystem.",
      "Care Manager orientation",
      "Complete documentation, receive your Care Manager ID and gain access to Telth systems and work tools.",
      "Begin serving your community through Telth as a certified Care Manager.",
    ],
    lists: { 1: ["Minimum 10+2 qualification", "Relevant healthcare / Skill India training preferred"], 3: ["Healthcare assistance", "Telehealth & HES", "Telth platforms and devices", "Care-plan processes", "Compliance and patient safety"] } as Record<number, string[]>,
  },
  {
    role: "Collaborative Care Manager",
    desc: [
      "Coordinate care between patients, physicians and care managers and support consultation, care plan and followups",
      "Review qualifications and readiness.",
      "After application submission Understand the CCM role and how Telth works within the healthcare ecosystem.",
      "Telth CCM app and workflow training",
      "Complete documentation, receive your CCM ID and gain access to Telth systems and work tools.",
      "Begin serving your community through Telth as a certified collabrative Care Manager.",
    ],
    lists: { 1: ["Diploma or degree in nursing.", "Valid professional and clinical care experience preferred"], 3: ["Patient assessment and vital-sign documentation", "Telehealth, HES and approved device training", "Care plan monitoring and followup coordination", "Clinical red flag identification and escalation", "Consent, privacy, compliance and patient safety"] } as Record<number, string[]>,
  },
];

const EARN = ["Basic Contract Pay", "Care Coordination Fees (per appointment)", "Care Plan Share & Renewals", "T-Mart Earnings", "NatLife Earnings", "ePharmacy Incentives", "Affiliate Marketing Incentives", "Performance Incentives"];
const LADDER = ["Associate Care Manager", "Care Manager", "Senior Care Manager", "Territory Care Manager", "Regional Care Manager", "International Opportunities"];
const MARKETS = [["🇬🇧", "United Kingdom"], ["🇪🇺", "European Markets"], ["🇦🇪", "United Arab Emirates"], ["🇸🇦", "Kingdom of Saudi Arabia"], ["🌐", "Other Global Markets"]];
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
const FAQS = ["What is telth?", "What is CM / CCM ?", "How telth supports ?", "What is HES ?", "What are the ways as a CM i can earn ?", "Does telth provide digital tools ?", "What is the duration of the training period ?", "Is mobility support available?"];

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
          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
            <FeatureCard icon={Users} title="Support People" text="Help individuals and families access healthcare services and navigate the care system." />
            <FeatureCard icon={Network} title="Connect the Ecosystem" text="Work with Telth's digital healthcare platforms and care network to deliver seamless care." delay={100} />
          </div>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="What You'll Do" title="A meaningful role at the intersection of healthcare, community, and technology." />
          <FeatureGrid cols={3}>{DO.map((d, i) => <FeatureCard key={d.title} {...d} delay={(i % 3) * 100} />)}</FeatureGrid>
        </Container>
      </Section>

      {/* application process */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Application Process" title="From Application to Care" />
          <div className="mt-12 space-y-10">
            {TRACKS.map((t) => (
              <Reveal key={t.role}>
                <div className="rounded-[24px] border border-slate-100 bg-soft p-5 sm:p-8">
                  <h3 className="mb-6 text-center text-[22px] font-bold sm:text-[26px]">{t.role}</h3>
                  <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {STEP_NAMES.map((n, i) => (
                      <li key={n} className="card-hover rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#1B5FA8] to-[#0D9E8D] font-franklin text-[13px] font-bold text-white">0{i + 1}</span>
                          <h4 className="font-franklin text-[16px] font-bold leading-snug">{n}</h4>
                        </div>
                        <p className="mt-3 text-[14px] leading-[1.65] text-muted">{t.desc[i]}</p>
                        {t.lists[i] && (
                          <ul className="mt-3 space-y-1.5">
                            {t.lists[i].map((l) => (
                              <li key={l} className="flex gap-2 text-[13.5px] text-body"><Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" strokeWidth={3} />{l}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="How CM/CCM Connected" title={<>All linked in <span className="text-gradient">one system</span></>} />
          <ConnectedFlow />
        </Container>
      </Section>

      {/* app */}
      <Section tone="dark" bg={IMG.waveTeal}>
        <Container>
          <Split
            left={<div>
              <SectionTitle light eyebrow="Telth CM/CCM App" title="A simple place to manage your day" text="A simple place to manage appointments, availability, patient care context, consultations and applicable earnings information." />
              <div className="mt-6 flex flex-wrap gap-2">
                {["Flexible practice modes", "Connected patient context", "Organized appointments", "Care-team coordination", "Practice visibility"].map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-slate-100">{t}</span>
                ))}
              </div>
              <div className="mt-8"><Btn to={EXTERNAL.playstore}>Install / Explore CM/CCM App</Btn></div>
            </div>}
            right={<Reveal dir="zoom"><img src={IMG.app3} alt="Telth CM/CCM app screen" loading="lazy" className="mx-auto max-h-[520px] w-auto drop-shadow-[0_30px_60px_rgba(104,71,245,.35)]" /></Reveal>}
          />
        </Container>
      </Section>

      {/* tools */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Tools & Enablement" title="Technology That Helps You Serve" />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <Reveal dir="left"><div className="h-full overflow-hidden rounded-[22px] border border-slate-100 bg-white shadow-card">
              <div className="img-zoom"><img src={IMG.careManager} alt="Care manager with the Health Examination System" loading="lazy" className="aspect-[16/8] w-full object-cover" /></div>
              <div className="p-6 sm:p-8">
                <Pill tone="green">A Core Requirement for Care Managers</Pill>
                <h3 className="mt-3 text-[22px] font-bold">Health Examination System</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.7]">The HES setup supports Care Managers in recording patient vitals, performing point-of-care testing, connecting with Telth platforms and capturing accurate data for better care.</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {["Record patient vitals", "Point-of-care testing", "Connect to Telth platform", "Accurate data for better care"].map((t) => (
                    <p key={t} className="flex items-center gap-2 rounded-xl bg-soft px-3 py-2.5 text-[13.5px] font-semibold text-ink"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{t}</p>
                  ))}
                </div>
              </div>
            </div></Reveal>
            <div className="space-y-6">
              <Reveal dir="right"><div className="card-hover rounded-[22px] border border-slate-100 bg-white p-6 shadow-card sm:p-7">
                <Pill>Workflow &amp; Care Management</Pill>
                <h3 className="mt-3 text-[20px] font-bold">Telth Digital Platforms</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7]">Digital platforms designed to support your Care Manager workflow across key Telth services.</p>
                <div className="mt-4 flex flex-wrap gap-2">{["Practice", "Care Plans", "T-Mart", "NatLife", "ePharmacy"].map((t) => <span key={t} className="rounded-full bg-brand/10 px-3 py-1 text-[12.5px] font-bold text-brand">{t}</span>)}</div>
              </div></Reveal>
              <Reveal dir="right" delay={100}><div className="card-hover rounded-[22px] border border-slate-100 bg-white p-6 shadow-card sm:p-7">
                <Pill tone="violet">Mobility Support</Pill>
                <p className="mt-3 text-[14.5px] leading-[1.7]">Vehicle purchase / mobility support available based on curtain criteria, subject to eligibility and applicable terms.</p>
                <div className="mt-4 flex gap-3">
                  <span className="flex items-center gap-2 rounded-xl bg-soft px-3.5 py-2.5 text-[13.5px] font-semibold text-ink"><Car className="h-4 w-4 text-brand" />Car support</span>
                  <span className="flex items-center gap-2 rounded-xl bg-soft px-3.5 py-2.5 text-[13.5px] font-semibold text-ink"><Bike className="h-4 w-4 text-brand" />Two-wheeler support</span>
                </div>
              </div></Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* earnings */}
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="Earning Opportunity" title="Multiple Ways to Earn" text="Telth's earning and incentive structure includes multiple components, subject to role, activity, performance and applicable terms." />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {EARN.map((e, i) => (
                <Reveal key={e} delay={(i % 2) * 80}><div className="card-hover flex h-full items-center gap-3.5 rounded-2xl border border-slate-100 bg-white p-4 shadow-card">
                  <span className="icon-badge flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand/[0.08] text-brand"><Wallet className="h-5 w-5" /></span>
                  <span className="font-franklin text-[14.5px] font-semibold text-ink">{e}</span>
                </div></Reveal>
              ))}
            </div>
            <Reveal dir="zoom"><div className="flex h-full flex-col justify-center rounded-[24px] bg-gradient-to-br from-[#0F1C2E] to-[#1B5FA8] p-8 text-center text-white">
              <BadgeIndianRupee className="mx-auto h-9 w-9 text-sky-300" />
              <p className="mt-3 text-[12.5px] font-bold uppercase tracking-[0.12em] text-sky-300">Indicative Target Opportunity</p>
              <p className="mt-3 text-[16px] text-slate-300">Up to</p>
              <p className="font-franklin text-[50px] font-bold leading-none">₹65,000<span className="text-[20px] font-medium text-slate-300"> /mo</span></p>
              <p className="mt-5 text-[12.5px] leading-[1.6] text-slate-300">*Indicative target opportunity; actual earnings vary by role, activity, performance and applicable terms.</p>
            </div></Reveal>
          </div>
          <p className="mt-6 text-center text-[13px] text-muted">All earning components subject to role, activity, performance and applicable terms.</p>
        </Container>
      </Section>

      {/* career path */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Career Path" title="Grow With Telth" text="Build your skills. Grow your responsibilities. Shape your healthcare career." />
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {LADDER.map((l, i) => (
              <Reveal as="li" key={l} delay={i * 90}>
                <div className="card-hover relative h-full rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-card" style={{ marginTop: `${(5 - i) * 6}px` }}>
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1B5FA8] to-[#0D9E8D] font-franklin text-[14px] font-bold text-white">{i + 1}</span>
                  <p className="mt-3 font-franklin text-[14.5px] font-bold leading-snug">{l}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* global */}
      <Section tone="dark" bg={IMG.waveTealWide}>
        <Container>
          <SectionTitle center light eyebrow="Global Pathway" title="Take Your Healthcare Career Global" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {MARKETS.map(([f, n], i) => (
              <Reveal key={n} delay={i * 80}><div className="card-hover rounded-2xl border border-white/10 bg-white/[0.07] p-5 text-center backdrop-blur">
                <p className="text-[34px]">{f}</p><p className="mt-2 text-[13.5px] font-semibold text-slate-100">{n}</p>
              </div></Reveal>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GLOBAL_STEPS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 90}><div className="card-hover h-full rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
                <span className="font-franklin text-[13px] font-bold text-sky-300">0{i + 1}</span>
                <h3 className="mt-2 text-[17px] font-bold !text-white">{t}</h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-slate-300">{d}</p>
              </div></Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* why */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Care Management" title="Why Build Your Career With Telth" text="Telth Care Managers support individuals and families in accessing healthcare, build trusted relationships within their communities, and work with Telth's digital healthcare ecosystem." />
          <FeatureGrid cols={3}>{WHY.map((w, i) => <FeatureCard key={w.title} {...w} delay={(i % 3) * 100} />)}</FeatureGrid>
        </Container>
      </Section>

      {/* roles */}
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="Roles" title="Care Management, Connected" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal><article className="card-hover h-full overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-card">
              <div className="h-2 bg-gradient-to-r from-[#1B5FA8] to-[#0D9E8D]" />
              <div className="p-6 sm:p-8">
                <Pill>CM</Pill><h3 className="mt-3 text-[24px] font-bold">Care Manager</h3>
                <p className="mt-3 text-[14.5px] leading-[1.75]">The Care Manager is Telth's community-facing healthcare professional. They support individuals and families in accessing healthcare, build trusted relationships, coordinate personalized care plans, and operate within Telth's integrated digital healthcare ecosystem to deliver meaningful, community-based care.</p>
                <ul className="mt-5 space-y-2.5">
                  {["Community-facing healthcare professional", "Works with individuals and families", "Manages personalized care plans", "Uses Telth digital platforms", "Earns across multiple components"].map((t) => (
                    <li key={t} className="flex gap-2.5 text-[14.5px]"><Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" strokeWidth={3} />{t}</li>
                  ))}
                </ul>
                <div className="mt-7"><Btn to={ROUTES.cmApplication} arrow>Apply as CM</Btn></div>
              </div>
            </article></Reveal>
            <Reveal delay={120}><article className="h-full overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-card">
              <div className="h-2 bg-gradient-to-r from-[#0D9E8D] to-[#28A86A]" />
              <div className="p-6 sm:p-8">
                <Pill tone="green">CCM</Pill><h3 className="mt-3 text-[24px] font-bold">Collaborative Care Manager</h3>
                <p className="mt-3 text-[14.5px] leading-[1.75]">The Collaborative Care Manager operates within the Telth ecosystem in a collaborative care-management capacity, working alongside Care Managers and clinical partners. Detailed CCM-specific responsibilities and qualifications will be shared as the program develops.</p>
                <p className="mt-5 text-[14px] leading-[1.7] text-muted">Detailed CCM role information, responsibilities and qualifications will be available as the program expands. Stay connected with Telth for updates.</p>
                <span className="mt-6 inline-flex rounded-full bg-emerald-500/15 px-5 py-2.5 text-[14px] font-bold text-emerald-700">Coming soon</span>
              </div>
            </article></Reveal>
          </div>
        </Container>
      </Section>

      {/* faq */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Common Questions" title="Frequently Asked" />
          <Faq items={FAQS.map((q) => ({ q: q.charAt(0).toUpperCase() + q.slice(1) }))} />
        </Container>
      </Section>

      <CtaBand
        title="Ready to Start Your Journey?"
        text="Build your skills. Serve your community. Grow with Telth."
        primary={{ label: "Apply now", to: ROUTES.cmApplication }}
      />
    </>
  );
}
