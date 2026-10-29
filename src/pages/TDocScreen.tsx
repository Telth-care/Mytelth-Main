import { useEffect, useRef, useState, type CSSProperties } from "react";
import { CalendarDays, ClipboardCheck, Clock, FileText, Home as HomeIcon, Smartphone, Stethoscope, Users, Wallet, Check, ShieldCheck, Layers, Eye, Search, ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Btn, Container, Eyebrow, Reveal, Section, SectionTitle, Split } from "../components/ui";
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

const CARE_PLAN_CITIES = ["Chennai", "Coimbatore", "Salem", "Madurai", "Tiruchirappalli"] as const;

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

export default function TDocScreen() {
  const [selectedFamily, setSelectedFamily] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showCarePlans, setShowCarePlans] = useState(false);
  const [heroArtworkFailed, setHeroArtworkFailed] = useState(false);
  const matchingFamilies = selectedFamily ? FAMILIES.filter(([, , tag]) => tag === selectedFamily) : FAMILIES;

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
              {heroArtworkFailed ? (
                <div role="img" aria-label="Care@Community, Care@Digital and Care@Home illustration placeholder" className="flex aspect-[1.65] w-full items-center justify-center rounded-[24px] bg-[radial-gradient(ellipse_at_20%_25%,rgba(37,99,235,.18),transparent_40%),radial-gradient(ellipse_at_80%_75%,rgba(124,58,237,.15),transparent_40%),linear-gradient(135deg,#eff6ff,#f8fafc)] px-8 text-center text-sm font-medium text-slate-500">Care@Community · Care@Digital · Care@Home</div>
              ) : (
                <img src={IMG.tdocHome} alt="Care@Community, Care@Digital and Care@Home with Telth" onError={() => setHeroArtworkFailed(true)} className="w-full" />
              )}
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
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="Care Families" title={<>Explore the <span className="text-brand">TELTH</span> care plan</>} text="Four care families help organize the different patient journeys you may support." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FAMILIES.map(([n, t, tag, d], i) => {
              const themes = [
                { bg: "bg-[#f0eaff]", border: "border-[#e4d9ff]", title: "text-purple-950", tag: "text-purple-600", desc: "text-slate-600", icon: "text-purple-500" },
                { bg: "bg-[#e6f7f5]", border: "border-[#c7eeea]", title: "text-teal-950", tag: "text-teal-700", desc: "text-slate-600", icon: "text-teal-600" },
                { bg: "bg-[#fff0f2]", border: "border-[#ffd9df]", title: "text-rose-950", tag: "text-rose-600", desc: "text-slate-600", icon: "text-rose-500" },
                { bg: "bg-[#fff7e6]", border: "border-[#f7e8c5]", title: "text-amber-950", tag: "text-amber-700", desc: "text-slate-600", icon: "text-amber-600" },
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
                      <p className={`mt-3 text-[12.5px] leading-[1.7] ${theme.desc}`}>{d}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* care plan opportunity finder */}
      <Section tone="soft">
        <Container>
          <div className="mx-auto max-w-[1080px] rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_50px_-38px_rgba(15,23,42,.35)] sm:p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-violet-50 text-violet-600"><Search className="h-5 w-5" aria-hidden="true"/></span>
              <div>
                <h2 className="font-franklin text-[20px] font-semibold text-ink sm:text-[23px]">Find care-plan opportunities</h2>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">Choose a service and location to explore care-plan opportunities in this preview.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Service type</span>
                <select value={selectedFamily} onChange={(e) => { setSelectedFamily(e.target.value); setShowCarePlans(false); }} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-[13px] text-slate-700 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10">
                  <option value="">Choose a service</option>
                  {FAMILIES.map(([, , tag]) => <option key={tag} value={tag}>{tag}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">Tamil Nadu location</span>
                <select value={selectedCity} onChange={(e) => { setSelectedCity(e.target.value); setShowCarePlans(false); }} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-[13px] text-slate-700 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10">
                  <option value="">Choose a city</option>
                  {CARE_PLAN_CITIES.map((city) => <option key={city} value={city}>{city}</option>)}
                </select>
              </label>
              <button type="button" onClick={() => setShowCarePlans(true)} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 text-[13px] font-bold text-white transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                Show Plans <ArrowRight className="h-4 w-4" aria-hidden="true"/>
              </button>
            </div>
            {showCarePlans && (
              <div id="care-plan-results" aria-live="polite" className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-[13px] text-muted">Care-plan categories in this preview{selectedCity ? ` · Location: ${selectedCity}` : ""}{selectedFamily ? ` · ${selectedFamily}` : " · All service families"}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {matchingFamilies.map(([n, category, title, description]) => (
                    <Link key={n} to={ROUTES.carePlan} className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 transition hover:border-brand/40 hover:bg-blue-50/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                      <span className="text-[10px] font-bold uppercase tracking-[.12em] text-brand">{category}</span>
                      <h3 className="mt-1 font-franklin text-[14px] font-semibold text-ink">{title}</h3>
                      <p className="mt-1 text-[12px] leading-relaxed text-muted">{description}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-brand">Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true"/></span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Care environments */}
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="Care Environments" title={<>How <span className="text-brand">HES</span> and <span className="text-brand">HUB</span> support connected care</>} text="Two connected care environments designed to extend physician reach while TELTH's CM and CCM support permitted assessment and coordination workflows." />
          <div className="mx-auto mt-12 grid max-w-[1080px] gap-5 lg:grid-cols-2 lg:gap-6">
            {[
              {
                key: "hes", label: "HES · Health Examine System · CM", title: "Care can travel to the patient.",
                description: "A portable, delivery-box-style field-care kit with approved basic medical examination tools that a Care Manager can carry for eligible C@H services.",
                steps: HES, stages: ["HES KIT", "PATIENT HOME", "CM ASSESSMENT", "TELTH APP", "PHYSICIAN"],
                help: "Extend eligible care beyond the clinic while TELTH supports field coordination. You stay focused on consultation, clinical decisions, prescriptions and referrals.",
                palette: { panel: "bg-[#E5F7F5]", border: "border-[#c9eeea]", accent: "text-[#078f89]", icon: "bg-[#079b92]", strip: "bg-white/65", chip: "border-[#bfe8e3] bg-white text-[#078f89]", badge: "bg-[#079b92]", callout: "border-[#c5ebe6] bg-white/65" },
                Icon: Check,
              },
              {
                key: "hub", label: "HUB · Clinical Care Environment · CCM", title: "Advanced connected care, in one place.",
                description: "A structured clinical environment with approved advanced examination capabilities, a Clinical Care Manager and physician access.",
                steps: HUB, stages: ["APP / KIOSK BOOKING", "HUB", "CCM + CHECKUP", "PHYSICIAN"],
                help: "The CCM supports preparation, assessments and coordination so physician time can stay focused on medical review and decision-making.",
                palette: { panel: "bg-[#eee9ff]", border: "border-[#ddd2ff]", accent: "text-[#6845f5]", icon: "bg-[#7048f5]", strip: "bg-white/65", chip: "border-[#d8ceff] bg-white text-[#6845f5]", badge: "bg-[#7048f5]", callout: "border-[#d9ceff] bg-white/70" },
                Icon: Layers,
              },
            ].map(({ key, label, title, description, steps, stages, help, palette, Icon }, cardIndex) => (
              <Reveal key={key} delay={cardIndex * 100} className="h-full">
                <article className={`h-full rounded-[24px] border ${palette.border} ${palette.panel} p-6 sm:p-7`}>
                  <div className="flex items-center gap-2.5">
                    <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-lg ${palette.icon} text-white`}><Icon className="h-4 w-4" strokeWidth={2.5}/></span>
                    <p className={`text-[9.5px] font-bold uppercase tracking-[.13em] ${palette.accent}`}>{label}</p>
                  </div>
                  <h3 className="mt-3 font-franklin text-[20px] font-medium leading-snug text-ink sm:text-[21px]">{title}</h3>
                  <p className="mt-2.5 min-h-[52px] text-[12.5px] leading-[1.65] text-slate-600">{description}</p>

                  <div className={`mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 rounded-xl ${palette.strip} px-3 py-2.5`} aria-label={`${label} process`}>
                    {stages.map((stage, i) => <span key={stage} className="inline-flex items-center gap-2">
                      <span className={`rounded-md border px-2 py-1 text-[8px] font-semibold tracking-wide shadow-sm ${palette.chip}`}>{stage}</span>
                      {i < stages.length - 1 && <ArrowRight className={`h-3 w-3 ${palette.accent}`} aria-hidden="true"/>}
                    </span>)}
                  </div>

                  <ol className="mt-6 space-y-3.5">
                    {steps.map(([stepTitle, detail], i) => <li key={stepTitle} className="flex items-start gap-3">
                      <span className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${palette.badge} text-[10px] font-bold text-white`}>{i + 1}</span>
                      <div><h4 className="text-[11.5px] font-semibold leading-snug text-slate-800">{stepTitle}</h4><p className="mt-0.5 text-[10.5px] leading-[1.55] text-slate-500">{detail}</p></div>
                    </li>)}
                  </ol>

                  <div className={`mt-5 rounded-xl border ${palette.callout} p-4`}>
                    <p className={`text-[8.5px] font-bold uppercase tracking-[.14em] ${palette.accent}`}>How this helps you</p>
                    <p className="mt-2 text-[10.5px] leading-[1.6] text-slate-600">{help}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* physician role */}
      <Section tone="dark" bg={IMG.tdocAppWave} className="physician-role-section">
        <Container>
          <SectionTitle center light eyebrow="Physician Role" title="Practice with TELTH" text="TELTH's CM and CCM roles are designed to handle much of the permitted coordination, assessment support and follow-up workflow around the physician consultation." />
          <div className="mx-auto mt-12 grid max-w-[1120px] gap-6 lg:grid-cols-[.92fr_1.08fr] lg:items-stretch">
            <div className="grid gap-4">
              <Reveal><article className="rounded-[20px] border border-violet-300/20 bg-gradient-to-br from-violet-600 via-violet-500 to-teal-600 p-6 text-white shadow-[0_18px_55px_-30px_rgba(104,70,255,.75)] transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                <p className="text-[16px] font-semibold leading-[1.5]">Less operational coordination.<br/><span className="text-white">More focused physician time.</span></p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/75">CM and CCM support the permitted non-physician workflow while you focus on physician-led clinical work.</p>
              </article></Reveal>
              <Reveal delay={80}><article className="rounded-[20px] border border-slate-700/70 bg-[#1B2941]/95 p-5 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[.14em] text-violet-400">CM · Care Manager</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-400">Care@Home coordination, approved basic assessment support, appointments, reminders and physician connectivity.</p>
              </article></Reveal>
              <Reveal delay={140}><article className="rounded-[20px] border border-slate-700/70 bg-[#1B2941]/95 p-5 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[.14em] text-violet-400">CCM · Clinical Care Manager</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-400">HUB workflow, patient preparation, approved checkups, reports and physician coordination.</p>
              </article></Reveal>
            </div>
            <Reveal delay={100}>
              <article className="h-full rounded-[22px] border border-white/80 bg-white p-6 shadow-[0_24px_70px_-32px_rgba(0,0,0,.7)] transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600"><ShieldCheck className="h-5 w-5"/></span><p className="text-[10px] font-bold uppercase tracking-[.14em] text-violet-600">Your Focused Role</p></div>
                <ul className="mt-6 space-y-3.5">
                  {["Select eligible C@C, C@D and/or C@H service modes", "Set your preferred availability", "Propose consultation fees for TELTH review", "Review relevant patient information", "Conduct consultation and clinical assessment", "Prescribe or refer where clinically appropriate", "Provide clinical follow-up decisions"].map((item) => <li key={item} className="flex items-start gap-3 text-[13.5px] leading-[1.55] text-slate-700"><span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-violet-50 text-violet-600"><Check className="h-3 w-3" strokeWidth={3}/></span>{item}</li>)}
                </ul>
                <p className="mt-6 border-t border-slate-100 pt-4 text-[11.5px] leading-relaxed text-slate-400">CM and CCM do not replace physicians for diagnosis or physician-only decisions.</p>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* app */}
      <Section>
        <Container>
          <div className="mx-auto grid max-w-[1060px] items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <Reveal dir="zoom">
              <div className="mx-auto w-[250px] rounded-[42px] border-[8px] border-[#111827] bg-[#111827] p-2 shadow-[0_24px_55px_-25px_rgba(20,30,60,.45)]">
                <div className="overflow-hidden rounded-[30px] bg-[#f7f8fc]">
                  <div className="bg-[#10172a] px-4 pb-5 pt-5 text-white"><div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-slate-700"/><p className="text-[10px] text-slate-400">Good morning,</p><p className="mt-1 text-[16px] font-semibold">Doctor</p><span className="mt-2 inline-flex rounded-full bg-violet-900/60 px-2.5 py-1 text-[9px] text-violet-200">TELTH Physician Network</span></div>
                  <div className="space-y-2 px-3 py-3">
                    {[[CalendarDays,"Today's appointments","C@C · C@D · C@H"],[ClipboardCheck,"My availability","Manage eligible timings"],[FileText,"Patient information","Review available care context"],[Stethoscope,"Consultation & follow-up","Support connected care"],[Wallet,"Earnings","Applicable service information"]].map(([I,title,sub]) => { const Icon = I as typeof CalendarDays; return <div key={title as string} className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm"><span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-violet-50 text-violet-600"><Icon className="h-3.5 w-3.5"/></span><div><p className="text-[9px] font-semibold text-slate-700">{title as string}</p><p className="mt-0.5 text-[8px] text-slate-400">{sub as string}</p></div></div>; })}
                    <div className="rounded-xl bg-violet-600 py-2 text-center text-[9px] font-semibold text-white">Explore App</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal dir="right">
              <div>
                <Eyebrow>T-DOC App</Eyebrow>
                <h2 className="mt-3 max-w-xl font-franklin text-[29px] font-semibold leading-[1.18] text-ink sm:text-[36px]">Everything you need for your TELTH practice, in one place.</h2>
                <p className="mt-4 max-w-xl text-[14.5px] leading-[1.75] text-body sm:text-[15.5px]">The TELTH Physician App gives you a simple place to manage appointments, availability, patient care context, consultations and applicable earnings information.</p>
                <p className="mt-7 text-[10px] font-bold uppercase tracking-[.15em] text-slate-400">Why use it?</p>
                <ul className="mt-4 space-y-3">
                  {["Flexible practice modes", "Connected patient context", "Organized appointments", "Care-team coordination", "Practice visibility"].map((item) => <li key={item} className="flex items-center gap-3 text-[13.5px] text-slate-700"><span className="flex h-5 w-5 items-center justify-center rounded-md bg-violet-50 text-violet-600"><Check className="h-3 w-3" strokeWidth={3}/></span>{item}</li>)}
                </ul>
                <div className="mt-7"><Btn to={EXTERNAL.playstore}>Install / Explore T-DOC App</Btn></div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Join the network */}
      <Section tone="white" className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="network-cta relative mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-[#0F172A] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="network-glow pointer-events-none absolute -right-20 -top-36 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-[.18em] text-slate-200">Join the Network</p>
              <h2 className="mt-4 font-franklin text-[30px] font-semibold leading-tight text-white sm:text-[38px]">Ready to explore a <span className="text-[#1763F5]">partnership?</span></h2>
              <p className="mx-auto mt-3 max-w-[680px] text-[14px] leading-[1.7] text-slate-300 sm:text-[15px]">Start with a few details about your professional profile. TELTH can then guide you through verification and the next steps.</p>
            </div>
            <ol className="network-steps relative z-10 mx-auto mt-10 grid max-w-[1030px] grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:mt-11 lg:grid-cols-5 lg:gap-3">
              <span className="network-track hidden lg:block" aria-hidden="true"><span className="network-track-fill" /></span>
              {[["Connect", "Share your basic physician details."], ["Review", "TELTH reviews your professional profile."], ["Verify", "Required credentials are validated."], ["Configure", "Set approved services, availability and commercial terms."], ["Activate", "Your approved TELTH physician profile goes live."]].map(([title, description], i) => (
                <Reveal as="li" key={title} delay={i * 90} className="relative flex flex-col items-center text-center">
                  <span className={`network-step relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full border font-franklin text-[10px] tracking-wide ${i === 0 ? "network-step-active border-[#6846ff] bg-[#6846ff] text-white" : "border-[#26354f] bg-[#1b2941] text-slate-400"}`}>0{i + 1}</span>
                  <h3 className="mt-3 text-[12px] font-medium text-slate-200">{title}</h3>
                  <p className="mt-2 max-w-[175px] text-[10px] leading-[1.55] text-slate-400">{description}</p>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={220}><div className="relative z-10 mt-9 text-center lg:mt-10"><Btn to={`${ROUTES.enquiry}?type=Become%20a%20Telth%20Physician`} arrow>I'm Interested - Open Form</Btn></div></Reveal>
            <style>{`
              .network-cta{isolation:isolate}
              .network-glow{animation:networkGlow 8s ease-in-out infinite alternate}
              .network-track{position:absolute;z-index:0;top:29px;left:10%;right:10%;height:1px;background:#344158;overflow:hidden}
              .network-track-fill{display:block;width:35%;height:100%;transform:translateX(-110%);background:linear-gradient(90deg,transparent,#6846ff,#2563eb,transparent);animation:networkProgress 6s ease-in-out infinite}
              .network-step-active{box-shadow:0 0 0 4px rgba(104,70,255,.18);animation:networkPulse 3s ease-in-out infinite}
              @keyframes networkProgress{0%,10%{transform:translateX(-110%)}85%,100%{transform:translateX(330%)}}
              @keyframes networkPulse{0%,100%{box-shadow:0 0 0 4px rgba(104,70,255,.14)}50%{box-shadow:0 0 0 8px rgba(104,70,255,.25)}}
              @keyframes networkGlow{from{opacity:.45;transform:translate3d(0,0,0)}to{opacity:.9;transform:translate3d(-18px,14px,0)}}
              @media(prefers-reduced-motion:reduce){.network-glow,.network-track-fill,.network-step-active{animation:none}}
            `}</style>
          </div>
        </Container>
      </Section>
    </>
  );
}
