import { useEffect, useRef, useState, type CSSProperties } from "react";
import { CalendarDays, ClipboardCheck, Clock, FileText, Home as HomeIcon, MonitorSmartphone, Smartphone, Stethoscope, Users, Wallet, Check, ShieldCheck, Layers, Eye, type LucideIcon } from "lucide-react";
import CtaBand from "../components/CtaBand";
import { Btn, Container, Eyebrow, FeatureCard, FeatureGrid, Reveal, Section, SectionTitle, Split, StepList } from "../components/ui";
import { IMG } from "../assets/slots";
import { EXTERNAL, ROUTES } from "../lib/links";

/* ---------------- how it works: animated journey ---------------- */
type JourneyStep = {
  n: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  hex: string; // theme colour for this step
  rgb: string; // same colour as "r,g,b" so we can use rgba(var(--rgb), a)
};

const JOURNEY_STEPS: JourneyStep[] = [
  {
    n: "01",
    title: "Book Appointment",
    desc: "Patients book in seconds from the mobile app or web. Smart scheduling matches them to the right physician and slot automatically.",
    icon: Smartphone,
    hex: "#2563EB",
    rgb: "37,99,235",
  },
  {
    n: "02",
    title: "Physician Consultation",
    desc: "Physicians receive complete patient history and AI-assisted insights before consultations. Notes sync instantly across the care team.",
    icon: Stethoscope,
    hex: "#10B981",
    rgb: "16,185,129",
  },
  {
    n: "03",
    title: "Care Manager Follow-up",
    desc: "Care Managers help coordinate next appointments, reminders and permitted care tasks after the consultation.",
    icon: CalendarDays,
    hex: "#8B5CF6",
    rgb: "139,92,246",
  },
  {
    n: "04",
    title: "Continuous Monitoring",
    desc: "Remote monitoring devices feed real-time health data into the platform. Alerts notify care teams of anomalies before they become emergencies.",
    icon: Clock,
    hex: "#F59E0B",
    rgb: "245,158,11",
  },
  {
    n: "05",
    title: "Organization Dashboard",
    desc: "Leaders see operations, outcomes and utilisation across every location in one live dashboard, ready for confident decisions.",
    icon: Users,
    hex: "#0EA5E9",
    rgb: "14,165,233",
  },
];

const JOURNEY_STATS = [
  { value: "85%", label: "Faster" },
  { value: "3x", label: "Efficiency" },
  { value: "99%", label: "Accuracy" },
];

const JOURNEY_MS = 3200; // time each step stays highlighted before moving on

function JourneyShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(0);

  // only animate while the section is on screen
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // endless loop: 1 → 2 → 3 → 4 → 5 → 1 …  (pauses while the user interacts)
  useEffect(() => {
    if (!inView || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % JOURNEY_STEPS.length),
      JOURNEY_MS,
    );
    return () => clearInterval(id);
  }, [inView, paused]);

  const cur = JOURNEY_STEPS[active];
  const themeOf = (s: JourneyStep) =>
    ({ "--c": s.hex, "--rgb": s.rgb }) as CSSProperties;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="jr mx-auto mt-14 w-full max-w-[1240px]"
    >
      <style>{`
        .jr-row{
          position:relative; overflow:hidden; display:flex; align-items:center; gap:1.1rem;
          width:100%; text-align:left; cursor:pointer;
          padding:1rem 1.4rem; border-radius:20px;
          border:1.5px solid rgba(148,163,184,.18);
          background:rgba(255,255,255,.6);
          opacity:.72;
          transition:transform .55s cubic-bezier(.22,1,.36,1),
                     box-shadow .55s ease, border-color .55s ease,
                     background-color .55s ease, opacity .55s ease;
        }
        .jr-row:hover{opacity:1}
        .jr-row[data-on="true"]{
          opacity:1; background:#fff; border-color:var(--c);
          transform:translateX(8px);
          box-shadow:0 0 0 4px rgba(var(--rgb),.10), 0 18px 44px -18px rgba(var(--rgb),.6);
        }
        .jr-ico{
          flex:none; display:grid; place-items:center; width:54px; height:54px; border-radius:16px;
          color:var(--c); background:rgba(var(--rgb),.10);
          transition:background-color .55s ease, color .55s ease, transform .55s cubic-bezier(.22,1,.36,1), box-shadow .55s ease;
        }
        .jr-row[data-on="true"] .jr-ico{
          color:#fff; background:var(--c); transform:scale(1.06) rotate(-3deg);
          box-shadow:0 12px 24px -8px rgba(var(--rgb),.75);
        }
        .jr-num{font-size:.78rem; font-weight:700; letter-spacing:.04em; color:var(--c)}
        .jr-title{font-weight:600; font-size:1.05rem; color:#64748b; transition:color .55s ease}
        .jr-row[data-on="true"] .jr-title{color:#0f172a}

        /* progress bar on the active row = time until the next step */
        .jr-bar{position:absolute; left:0; bottom:0; height:3px; width:100%;
          background:var(--c); transform-origin:left; transform:scaleX(0);
          animation:jr-fill ${JOURNEY_MS}ms linear forwards; opacity:.55}
        @keyframes jr-fill{to{transform:scaleX(1)}}

        /* right panel */
        .jr-panel{
          border-radius:26px; background:#fff; padding:2rem;
          border:1.5px solid rgba(var(--rgb),.55);
          box-shadow:0 0 0 5px rgba(var(--rgb),.08), 0 26px 60px -24px rgba(var(--rgb),.55);
          transition:border-color .6s ease, box-shadow .6s ease;
        }
        .jr-fade{animation:jr-in .55s cubic-bezier(.22,1,.36,1) both}
        @keyframes jr-in{from{opacity:0; transform:translateY(10px)}to{opacity:1; transform:none}}
        .jr-badge{display:grid; place-items:center; width:48px; height:48px; border-radius:14px;
          color:#fff; background:var(--c); box-shadow:0 10px 22px -8px rgba(var(--rgb),.7)}
        .jr-desc{border-radius:18px; padding:1.25rem 1.4rem; color:#475569; line-height:1.75;
          background:rgba(var(--rgb),.05); border:1px solid rgba(var(--rgb),.14)}
        .jr-stat{border-radius:16px; padding:1rem .5rem; text-align:center;
          background:rgba(var(--rgb),.06); border:1px solid rgba(var(--rgb),.10)}
        .jr-stat b{display:block; font-size:1.7rem; line-height:1.2; color:var(--c)}
        .jr-stat span{font-size:.85rem; color:#64748b}
        .jr-stat:nth-child(2){animation-delay:.07s}
        .jr-stat:nth-child(3){animation-delay:.14s}

        @media (prefers-reduced-motion:reduce){
          .jr-row,.jr-ico,.jr-panel{transition:none}
          .jr-row[data-on="true"]{transform:none}
          .jr-bar,.jr-fade{animation:none}
        }
      `}</style>

      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* ---------- steps ---------- */}
        <div className="flex flex-col gap-3.5" role="tablist">
          {JOURNEY_STEPS.map((s, i) => {
            const Icon = s.icon;
            const on = i === active;
            return (
              <button
                key={s.n}
                type="button"
                role="tab"
                aria-selected={on}
                data-on={on}
                style={themeOf(s)}
                className="jr-row"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="jr-ico">
                  <Icon size={26} strokeWidth={1.8} />
                </span>
                <span className="jr-num">{s.n}</span>
                <span className="jr-title">{s.title}</span>
                {on && !paused && <span key={`bar-${i}`} className="jr-bar" />}
              </button>
            );
          })}
        </div>

        {/* ---------- detail panel ---------- */}
        <div className="jr-panel" style={themeOf(cur)}>
          {/* key re-mounts the content so it fades/slides in on every step */}
          <div key={active} className="jr-fade">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                <span className="font-medium text-slate-500">
                  Step {active + 1}:
                </span>{" "}
                {cur.title}
              </h3>
              <span className="jr-badge">
                <cur.icon size={24} strokeWidth={1.8} />
              </span>
            </div>

            <p className="jr-desc mt-6 text-[0.95rem]">{cur.desc}</p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {JOURNEY_STATS.map((st) => (
                <div key={st.label} className="jr-stat jr-fade">
                  <b>{st.value}</b>
                  <span>{st.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FAMILIES = [
  ["01", "Family / Preventive", "TELTH UMBRELLA", "Family, men, women, children, senior, preventive, maternity and lifestyle journeys."],
  ["02", "Condition / Organ", "TELTH ONE", "Diabetes, hypertension, thyroid, cardiac, renal, liver and respiratory pathways."],
  ["03", "Specialty Wellness", "TELTH SEVVI", "Clinician-led skin, hair, eye and specialty wellness journeys."],
  ["04", "Flexible Services", "TELTH ADD-ONS", "Extra consultations, diagnostics, nutrition, home support and specialist review."],
] as const;

const HES = [
  ["The CM reaches the patient", "Portable HES supports the approved home-care workflow."],
  ["Basic information is captured", "Eligible vitals and basic assessments are recorded."],
  ["The physician is connected", "The CM can connect the patient to a physician through TELTH when required."],
  ["TELTH helps coordinate follow-up", "The CM supports next appointments and permitted care tasks."],
] as const;

const HUB = [
  ["The patient books", "Appointment through the TELTH app or supported kiosk workflow."],
  ["The CCM coordinates", "Patient preparation and the approved checkup workflow are supported."],
  ["The assessment happens in the HUB", "Approved HUB clinical capabilities support the care journey."],
  ["The physician reviews and consults", "Use the available information to support appropriate clinical decisions."],
] as const;

function Flow({ items, variant = "light" }: { items: readonly (readonly [string, string])[]; variant?: "light" | "hes" | "hub" }) {
  const isDark = variant === "hes" || variant === "hub";
  const colors = {
    light: { num: "bg-brand text-white", title: "text-ink", desc: "text-muted" },
    hes: { num: "bg-teal-500 text-white", title: "text-teal-900", desc: "text-teal-700" },
    hub: { num: "bg-violet-500 text-white", title: "text-violet-900", desc: "text-violet-700" },
  };
  const c = colors[variant];

  return (
    <ol className="mt-6 space-y-3">
      {items.map(([t, d], i) => (
        <Reveal as="li" key={t} delay={i * 80}>
          <div className="card-hover flex gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-card sm:p-5">
            <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-full text-[13px] font-bold ${c.num}`}>{i + 1}</span>
            <div><h4 className={`font-franklin text-[15.5px] font-semibold ${c.title}`}>{t}</h4><p className={`mt-1 text-[14px] leading-[1.6] ${c.desc}`}>{d}</p></div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export default function TDocScreen() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#EFF6FF_0%,#fff_60%)]">
        <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] animate-float rounded-full bg-blue-200/50 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <Reveal><Eyebrow>T-DOC</Eyebrow></Reveal>
            <Reveal delay={90}>
              <h1 className="mt-3 font-franklin text-[38px] font-semibold leading-[1.12] sm:text-[50px] lg:text-[56px]">
                Your expertise.
                <span className="block text-brand-bright">A more connected way to care.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] sm:text-[17.5px]">
                Practice with TELTH through flexible Care@Community, Care@Digital and Care@Home opportunities. Our Care Managers, Clinical Care Managers, HES and HUB help coordinate the journey around your consultation, so you can stay focused on clinical care.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Btn to={ROUTES.home} variant="ghost">Explore Telth</Btn>
                <Btn to={`${ROUTES.enquiry}?type=Become%20a%20Telth%20Physician`}>Become Telth Physician</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal dir="zoom" delay={150}>
            <div className="img-zoom overflow-hidden rounded-[24px] shadow-lift">
              <img src={IMG.tdocHome} alt="Care@Community, Care@Digital and Care@Home with Telth" className="w-full" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* how it works */}
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="How It Works" title={<>From First Contact to <span className="text-gradient">Our Continuous Care Journey</span></>} />
          <JourneyShowcase />
        </Container>
      </Section>

      {/* UPDATED: Care Families Section - Image Based Colour Design */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Care Families" title={<>Explore the <span className="text-brand">TELTH</span> care plan</>} text="Four care families help organize the different patient journeys you may support." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FAMILIES.map(([n, t, tag, d], i) => {
              const themes = [
                { bg: "bg-purple-100", border: "border-purple-200", title: "text-purple-900", tag: "text-purple-600", desc: "text-purple-700", icon: "text-purple-500" },
                { bg: "bg-teal-100", border: "border-teal-200", title: "text-teal-900", tag: "text-teal-600", desc: "text-teal-700", icon: "text-teal-500" },
                { bg: "bg-pink-100", border: "border-pink-200", title: "text-pink-900", tag: "text-pink-600", desc: "text-pink-700", icon: "text-pink-500" },
                { bg: "bg-amber-100", border: "border-amber-200", title: "text-amber-900", tag: "text-amber-600", desc: "text-amber-700", icon: "text-amber-500" },
              ];
              const theme = themes[i % themes.length];
              const Icon = [HomeIcon, Layers, Eye][i] || HomeIcon;

              return (
                <Reveal key={t} delay={i * 90} className="h-full">
                  <div className={`card-hover relative h-full overflow-hidden rounded-[20px] border ${theme.border} ${theme.bg} p-6 shadow-card`}>
                    {/* Decorative number in background */}
                    {/* <span className={`pointer-events-none absolute -right-2 -top-2 font-franklin text-[80px] font-bold leading-none opacity-10 ${theme.title}`}>{n}</span> */}
                    
                    <div className="relative z-10">
                      <Icon className={`h-6 w-6 ${theme.icon}`} />
                      <p className={`mt-4 text-[11.5px] font-bold uppercase tracking-wider ${theme.tag}`}>{t}</p>
                      <h3 className={`mt-1 text-[18px] font-bold ${theme.title}`}>{tag}</h3>
                      <p className="mt-3 text-[12.5px] font-bold leading-[1.7]">{d}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* UPDATED: Care Environments Section - Image Based Colour Design */}
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="Care Environments" title={<>How <span className="text-brand">HES</span> and <span className="text-brand">HUB</span> support connected care</>} text="Two connected care environments designed to extend physician reach while TELTH's CM and CCM support permitted assessment and coordination workflows." />

          <div className="mt-14 space-y-8">
            <Reveal>
              <article className="rounded-[24px] border border-teal-100 bg-[#E6F7F5] p-6 shadow-card sm:p-10">
                <Split center={false}
                  left={<div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-white"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
                      <p className="text-[12.5px] font-bold uppercase tracking-wide text-teal-700">HES · Health Examine System · CM</p>
                    </div>
                    <h3 className="mt-4 text-[26px] font-semibold text-teal-900 sm:text-[30px]">Care can travel to the patient.</h3>
                    <p className="mt-3 text-[15.5px] leading-[1.75] text-black">A portable, delivery-box-style field-care kit with approved basic medical examination tools that a Care Manager can carry for eligible C@H services.</p>
                    
                    <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl bg-white/60 px-4 py-3 text-[12.5px] font-bold tracking-wide text-teal-700">
                      <span>HES KIT</span> <span className="text-teal-400">→</span>
                      <span>PATIENT HOME</span> <span className="text-teal-400">→</span>
                      <span>CM ASSESSMENT</span> <span className="text-teal-400">→</span>
                      <span>TELTH APP</span> <span className="text-teal-400">→</span>
                      <span>PHYSICIAN</span>
                    </div>

                    <div className="mt-6 rounded-2xl bg-white/80 p-5">
                      <h4 className="font-franklin text-[16px] font-semibold text-teal-900">How This Helps You</h4>
                      <p className="mt-1.5 text-[14.5px] leading-[1.7] text-teal-700">Extend eligible care beyond the clinic while TELTH supports field coordination. You stay focused on consultation, clinical decisions, prescriptions and referrals.</p>
                    </div>
                  </div>}
                  right={<Flow items={HES} variant="hes" />} />
              </article>
            </Reveal>
            <Reveal>
              <article className="rounded-[24px] border border-violet-100 bg-[#F3EEFF] p-6 shadow-card sm:p-10">
                <Split center={false} reverse
                  left={<div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-white"><Layers className="h-3.5 w-3.5" strokeWidth={3} /></span>
                      <p className="text-[12.5px] font-bold uppercase tracking-wide text-violet-700">HUB · Clinical Care Environment · CCM</p>
                    </div>
                    <h3 className="mt-4 text-[26px] font-semibold text-violet-900 sm:text-[30px]">Advanced connected care, in one place.</h3>
                    <p className="mt-3 text-[15.5px] leading-[1.75] text-black">A structured clinical environment with approved advanced examination capabilities, a Clinical Care Manager and physician access.</p>
                    
                    <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl bg-white/60 px-4 py-3 text-[12.5px] font-bold tracking-wide text-violet-700">
                      <span>APP / KIOSK BOOKING</span> <span className="text-violet-400">→</span>
                      <span>HUB</span> <span className="text-violet-400">→</span>
                      <span>CCM + CHECKUP</span> <span className="text-violet-400">→</span>
                      <span>PHYSICIAN</span>
                    </div>

                    <div className="mt-6 rounded-2xl bg-white/80 p-5">
                      <h4 className="font-franklin text-[16px] font-semibold text-violet-900">How This Helps You</h4>
                      <p className="mt-1.5 text-[14.5px] leading-[1.7] text-black">The CCM supports preparation, assessments and coordination so physician time can stay focused on medical review and decision-making.</p>
                    </div>
                  </div>}
                  right={<Flow items={HUB} variant="hub" />} />
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* physician role */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Physician Role" title="Practice with TELTH" text="TELTH's CM and CCM roles are designed to handle much of the permitted coordination, assessment support and follow-up workflow around the physician consultation." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal><div className="card-hover h-full rounded-[20px] border border-slate-100 bg-white p-7 shadow-card">
              <h3 className="text-[20px] font-bold">Your Focused Role</h3>
              <p className="mt-2 text-[14.5px] text-muted">Less operational coordination. More focused physician time.</p>
              <div className="mt-5"><StepList items={["Review relevant patient information", "Conduct consultation and clinical assessment", "Prescribe or refer where clinically appropriate", "Provide clinical follow-up decisions"]} /></div>
            </div></Reveal>
            <Reveal delay={100}><div className="card-hover h-full rounded-[20px] border border-slate-100 bg-white p-7 shadow-card">
              <h3 className="text-[20px] font-bold">Set Up Your Practice</h3>
              <ul className="mt-5 space-y-3.5">
                {["Select eligible C@C, C@D and/or C@H service modes", "Set your preferred availability", "Propose consultation fees for TELTH review"].map((t) => (
                  <li key={t} className="flex gap-3 text-[14.5px]"><Check className="mt-0.5 h-5 w-5 flex-none text-emerald-600" strokeWidth={3} />{t}</li>
                ))}
              </ul>
            </div></Reveal>
            <Reveal delay={200}><div className="card-hover h-full rounded-[20px] border border-slate-100 bg-white p-7 shadow-card">
              <h3 className="text-[20px] font-bold">CM and CCM Roles</h3>
              <div className="mt-4 space-y-4 text-[14.5px] leading-[1.65]">
                <p><strong className="text-ink">CM · Care Manager</strong><br />Care@Home coordination, approved basic assessment support, appointments, reminders and physician connectivity.</p>
                <p><strong className="text-ink">CCM · Clinical Care Manager</strong><br />HUB workflow, patient preparation, approved checkups, reports and physician coordination.</p>
                <p className="rounded-xl bg-amber-50 px-3.5 py-3 text-[13.5px] font-semibold text-amber-900">CM and CCM do not replace the physician for diagnosis or physician-only decisions.</p>
              </div>
            </div></Reveal>
          </div>
        </Container>
      </Section>

      {/* app */}
      <Section tone="dark" bg={IMG.tdocAppWave}>
        <Container>
          <Split
            left={<div>
              <SectionTitle light eyebrow="T-DOC App" title="Everything you need for your TELTH practice, in one place." text="The TELTH Physician App gives you a simple place to manage appointments, availability, patient care context, consultations and applicable earnings information." />
              <div className="mt-8"><Btn to={EXTERNAL.playstore}>Install / Explore T-DOC App</Btn></div>
            </div>}
            right={<div className="grid gap-4 sm:grid-cols-2">
              {[
                [CalendarDays, "Today's appointments", "C@C · C@D · C@H"],
                [ClipboardCheck, "My availability", "Manage eligible timings"],
                [FileText, "Patient information", "Review available care context"],
                [Wallet, "Earnings", "View applicable service information"],
              ].map(([I, t, d], i) => {
                const Icon = I as typeof CalendarDays;
                return <FeatureCard key={t as string} icon={Icon} title={t as string} text={d as string} dark delay={i * 90} />;
              })}
            </div>}
          />
          <Reveal delay={120}>
            <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {["Flexible practice modes", "Connected patient context", "Organized appointments", "Care-team coordination", "Practice visibility"].map((t) => (
                <div key={t} className="rounded-xl border border-white/10 bg-white/[0.07] px-3 py-3 text-center text-[13px] font-semibold text-slate-200 backdrop-blur">{t}</div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* UPDATED: Join the Network Section - Image Based Colour Design */}
      <Section tone="dark" bg={IMG.tdocJoinWave}>
        <Container>
          <SectionTitle center light eyebrow="Join the Network" title={<>Ready to explore a <span className="text-brand-bright">partnership?</span></>} text="Start with a few details about your professional profile. TELTH can then guide you through verification and the next steps." />
          
          <ol className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[["Connect", "Share your basic physician details."], ["Review", "TELTH reviews your professional profile."], ["Verify", "Required credentials are validated."], ["Configure", "Set approved services, availability and commercial terms."], ["Activate", "Your approved TELTH physician profile goes live."]].map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 90} className="relative">
                {/* Horizontal connecting line (desktop) */}
                <div className="absolute left-1/2 top-5 hidden h-px w-full -translate-x-1/2 bg-white/20 lg:block" />
                {/* Vertical connecting line (mobile/tablet fallback) */}
                <div className="absolute left-1/2 top-5 h-full w-px -translate-x-1/2 bg-white/20 lg:hidden" />
                
                <div className="relative flex flex-col items-center">
                  <span className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-franklin text-[14px] font-bold shadow-md ring-4 ring-slate-900 ${i === 0 ? "bg-brand text-white" : "bg-white/10 text-white/50"}`}>
                    0{i + 1}
                  </span>
                  <div className="mt-5 text-center">
                    <h3 className={`text-[17px] font-bold ${i === 0 ? "text-white" : "text-white/70"}`}>{t}</h3>
                    <p className={`mt-1.5 text-[13.5px] leading-[1.6] ${i === 0 ? "text-slate-300" : "text-slate-400"}`}>{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
          
          <Reveal delay={150}><div className="mt-12 text-center"><Btn to={`${ROUTES.enquiry}?type=Become%20a%20Telth%20Physician`} arrow>I'm Interested - Open Form</Btn></div></Reveal>
        </Container>
      </Section>
    </>
  );
}