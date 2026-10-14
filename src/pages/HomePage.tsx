import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  Activity,
  ArrowRight,
  Brain,
  Building2,
  Cloud,
  Cpu,
  Database,
  Globe2,
  Gauge,
  GitMerge,
  Handshake,
  Hospital,
  Landmark,
  LayoutDashboard,
  Network,
  Rocket,
  Smile,
  Stethoscope,
  Store,
  TrendingUp,
  UserCog,
  Users,
  User,
  Home as HomeIcon,
  FlaskConical,
  Briefcase,
  Lightbulb,
  Microscope,
  Check,
  HeartPulse,
  UserRound,
  Zap,
  Layers,
  Shield,
  Heart,
  Server,
  Boxes,
  Workflow,
  Boxes as BoxesIcon,
  Smartphone,
  Lock,
  CalendarDays,
  Clock,
  type LucideIcon,
} from "lucide-react";
import CtaBand from "../components/CtaBand";
import {
  Btn,
  Container,
  Eyebrow,
  IconBadge,
  Reveal,
  Section,
  SectionTitle,
  TextLink,
} from "../components/ui";
import { IMG } from "../assets/slots";
import { EXTERNAL, ROUTES } from "../lib/links";

const PILLARS = [
  {
    icon: Users,
    title: "Care @ Community",
    text: "Bringing healthcare closer to where people live through connected community healthcare services.",
    pts: [
      "Book appointments instantly",
      "Video consultations",
      "Health records & prescriptions",
    ],
    to: ROUTES.careCommunity,
  },
  {
    icon: HomeIcon,
    title: "Care @ Home",
    text: "Continuous care, recovery support and remote monitoring delivered at home.",
    pts: [
      "Remote patient monitoring",
      "Home visit coordination",
      "IoT device integration",
    ],
    to: ROUTES.careHome,
  },
  {
    icon: HeartPulse,
    title: "Personal Care",
    text: "Personalized prevention, wellness and long-term health programs for every individual.",
    pts: [
      "Personalized health plans",
      "Preventive care programs",
      "Wellness tracking",
    ],
    to: ROUTES.personalCare,
  },
  {
    icon: Network,
    title: "Intelligent Care Economy",
    text: "Connecting all healthcare services into one ecosystem.",
    pts: [
      "Digital marketplace",
      "Pharmacy integration",
      "Lab & diagnostics network",
    ],
    to: ROUTES.intelligentCareEconomy,
  },
];

/**
 * Telth care Infrastructure — Figma flow diagram
 *
 * Fully visible by default. The "hover" effect (lift + blue glow) plays on each
 * block automatically, one by one, left → right, then loops forever.
 * Hovering the diagram with the mouse pauses the auto-play and uses the normal hover.
 */

const DATA_ITEMS = [
  "Personal Gadget Data",
  "Care @ Home HES",
  "Telth AI Medical Centers",
  "Telth Powered Hospitals & Clinics",
];
const TEAM_ITEMS = ["Physician", "CM/CCM"];
const NETWORK_ITEMS = ["Perception", "Advance Labs", "Telth Hospital"];

// blocks in auto-play order
const I_INTAKE = 0;
const I_DATA = 1;
const I_CIRCLE = 2;
const I_TEAM = 3;
const I_NET = 4;
const I_FOLLOW = 5;
const TOTAL = 6;

const STEP_MS = 1100; // how long each block stays "hovered" before the next one

function InfrastructureFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [step, setStep] = useState(-1);

  // run only while visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // endless loop: block 0 → 1 → … → 5 → 0 …
  useEffect(() => {
    if (!inView || paused) {
      setStep(-1);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    setStep(0);
    const id = setInterval(() => {
      i = (i + 1) % TOTAL;
      setStep(i);
    }, STEP_MS);
    return () => clearInterval(id);
  }, [inView, paused]);

  const on = (i: number) => (step === i ? "true" : "false");

  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="tf relative mx-auto w-full max-w-[1240px] px-2"
    >
      <style>{`
        .tf-item{transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s ease,background-color .45s ease,border-color .45s ease}
        .tf-item:hover,.tf-item[data-on="true"]{transform:translateY(-6px)}

        /* pills */
        .tf-pill{box-shadow:0 8px 20px -8px rgba(37,99,235,.55)}
        .tf-pill:hover,.tf-pill[data-on="true"]{background-color:#1d4ed8;
          box-shadow:0 0 0 4px rgba(37,99,235,.18),0 0 28px rgba(37,99,235,.6)}

        /* boxes */
        .tf-box{box-shadow:0 10px 28px -14px rgba(15,23,42,.28)}
        .tf-box:hover,.tf-box[data-on="true"]{border-color:rgba(37,99,235,.4);background-color:#DCE6FA;
          box-shadow:0 0 0 1px rgba(37,99,235,.3),0 22px 48px -14px rgba(37,99,235,.5)}

        /* circle */
        .tf-core{transition:box-shadow .45s ease}
        .tf-circle:hover,.tf-circle[data-on="true"]{transform:translateY(-4px) scale(1.04)}
        .tf-circle:hover .tf-core,.tf-circle[data-on="true"] .tf-core{box-shadow:0 0 0 8px rgba(37,99,235,.2),0 0 40px rgba(37,99,235,.7)}
        .tf-circle:hover .tf-halo,.tf-circle[data-on="true"] .tf-halo{animation:tf-pulse 1.1s ease-out infinite}
        .tf-ring{animation:tf-spin 24s linear infinite}

        @keyframes tf-pulse{0%{transform:scale(.85);opacity:.9}100%{transform:scale(1.35);opacity:0}}
        @keyframes tf-spin{to{transform:rotate(360deg)}}

        @media (prefers-reduced-motion:reduce){
          .tf-item,.tf-core{transition:none}
          .tf-item:hover,.tf-item[data-on="true"]{transform:none}
          .tf-ring,.tf-halo{animation:none!important}
        }
      `}</style>

      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:gap-4">
        {/* ---------- 1. Intake pill ---------- */}
        <Pill on={on(I_INTAKE)} kicker="Intake" label="Clinical Data Collection" />

        {/* ---------- 2. Data box ---------- */}
        <Box
          on={on(I_DATA)}
          items={DATA_ITEMS}
          className="w-full max-w-[290px] lg:w-[270px]"
          padded
        />

        {/* ---------- 3. G-Med ID circle ---------- */}
        <div
          data-on={on(I_CIRCLE)}
          className="tf-item tf-circle relative flex h-[132px] w-[132px] flex-none cursor-pointer items-center justify-center"
        >
          <span className="tf-ring absolute inset-0 rounded-full border border-dashed border-blue-400/70" />
          <span className="tf-halo pointer-events-none absolute inset-2 rounded-full bg-blue-400/40 opacity-0" />
          <span className="absolute inset-[7px] rounded-full bg-blue-100/80" />
          <div className="tf-core relative flex h-[108px] w-[108px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-center text-white shadow-[0_0_0_5px_rgba(147,197,253,.55)]">
            <span className="font-franklin text-[15px] font-bold leading-tight">G-Med ID</span>
            <span className="font-franklin text-[15px] font-bold leading-tight">P³DSC</span>
          </div>
        </div>

        {/* ---------- 4. Care Team box ---------- */}
        <Box
          on={on(I_TEAM)}
          title="Care Team"
          items={TEAM_ITEMS}
          className="w-full max-w-[220px] lg:w-[185px]"
          indent
        />

        {/* ---------- 5. Network box ---------- */}
        <Box
          on={on(I_NET)}
          items={NETWORK_ITEMS}
          className="w-full max-w-[240px] lg:w-[212px]"
          padded
        />

        {/* ---------- 6. Follow-up pill ---------- */}
        <Pill on={on(I_FOLLOW)} kicker="Follow-up Care" label="Medicine's Delivery" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Pill({ on, kicker, label }: { on: string; kicker: string; label: string }) {
  return (
    <div
      data-on={on}
      className="tf-item tf-pill w-full max-w-[220px] flex-none cursor-pointer rounded-[12px] bg-blue-600 px-4 py-3 text-left text-white lg:w-[175px]"
    >
      <p className="text-[13px] font-medium leading-tight text-blue-100">{kicker}</p>
      <p className="mt-0.5 text-[13.5px] font-bold leading-tight">{label}</p>
    </div>
  );
}

function Box({
  on,
  items,
  title,
  className = "",
  padded,
  indent,
}: {
  on: string;
  items: string[];
  title?: string;
  className?: string;
  padded?: boolean;
  indent?: boolean;
}) {
  return (
    <div
      data-on={on}
      className={`tf-item tf-box flex-none cursor-pointer rounded-[14px] border border-white/70 bg-[#E6ECF8] ${
        padded ? "p-[22px]" : "p-4"
      } ${className}`}
    >
      {title && (
        <p className="mb-2.5 pl-1 text-[13.5px] font-medium text-slate-600">{title}</p>
      )}
      <div className={`flex flex-col gap-3 ${indent ? "pl-2" : ""}`}>
        {items.map((it) => (
          <div
            key={it}
            className="rounded-[8px] bg-white px-3 py-[11px] text-center text-[13.5px] font-semibold leading-snug text-slate-800 shadow-[0_2px_6px_-2px_rgba(15,23,42,.12)]"
          >
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

const APPS = [
  {
    id: "patient",
    name: "T-CARE App",
    icon: User,
    desc: "A consumer-grade mobile experience that puts patients in control of their entire healthcare journey.",
    stats: [
      ["98%", "Satisfaction"],
      ["4.9★", "App Store"],
      ["2min", "Avg. Response"],
    ],
    pills: [
      "Appointment Booking",
      "Health Records",
      "Teleconsultation",
      "Medication Reminders",
    ],
    img: IMG.app1,
    cta: "Explore T-CARE App",
    to: EXTERNAL.playstore,
  },
  {
    id: "tdoc",
    name: "T-DOC App",
    icon: Stethoscope,
    desc: "Streamlined clinical workflows that give physicians more time for patients and less time on paperwork.",
    stats: [
      ["40%", "Time Saved"],
      ["350+", "Physicians"],
      ["24/7", "Support"],
    ],
    pills: [
      "AI-Assisted Diagnosis",
      "Patient History",
      "E-Prescriptions",
      "Video Consultations",
    ],
    img: IMG.app2,
    cta: "Explore T-DOC APP",
    to: ROUTES.tdoc,
  },
  {
    id: "cmccm",
    name: "CM/CCM App",
    icon: Users,
    desc: "Powerful coordination tools that keep care teams aligned and patients on track with their health goals.",
    stats: [
      ["60%", "Better Adherence"],
      ["5,200+", "Plans Active"],
      ["Real-time", "Updates"],
    ],
    pills: [
      "Care Plan Builder",
      "Patient Outreach",
      "Team Coordination",
      "Outcome Tracking",
    ],
    img: IMG.app3,
    cta: "Explore CM/CCM APP",
    to: ROUTES.cmccm,
  },
];

const WHY = [
  {
    icon: GitMerge,
    title: "Connected Healthcare",
    text: "Every stakeholder in your care network works from a single source of truth, eliminating silos and miscommunication.",
  },
  {
    icon: Activity,
    title: "Continuous Patient Care",
    text: "From appointment to recovery, monitoring never stops. Proactive alerts prevent complications before they escalate.",
  },
  {
    icon: LayoutDashboard,
    title: "Digital Operations",
    text: "Replace manual, paper-based processes with automated digital workflows.",
  },
  {
    icon: Brain,
    title: "Smarter Coordination",
    text: "AI-powered care coordination automatically assigns tasks to the CM/CCM member at the right time. It also helps structure your care plan efficiently.",
  },
  {
    icon: Smile,
    title: "Better Patient Experience",
    text: "Consumer-grade digital experiences that patients love lead to higher engagement and better health outcomes.",
  },
  {
    icon: Gauge,
    title: "Scalable Enterprise Platform",
    text: "Built for enterprise from day one.",
  },
];

const STAKEHOLDERS = [
  [Hospital, "Hospitals"],
  [Building2, "Clinics"],
  [Stethoscope, "Healthcare Providers"],
  [Briefcase, "Employers"],
  [Landmark, "Government"],
  [Microscope, "Research Organizations"],
  [Rocket, "Healthcare Startups"],
  [HomeIcon, "Home Healthcare"],
] as const;

const PARTNERS = [
  [Stethoscope, "Healthcare Providers", "Clinics, hospitals, and specialists"],
  [Cpu, "Technology Partners", "Software and device integrations"],
  [Hospital, "Hospitals", "Large health systems and networks"],
  [FlaskConical, "Researchers", "Academic and clinical research partners"],
  [TrendingUp, "Investors", "Strategic and financial partners"],
  [Landmark, "Governments", "National and regional health authorities"],
] as const;

// Three overlapping phones (T-DOC left, Patient centre, CM/CCM right) as in the Figma.
// Positions are % of the stack box, measured from the Figma frame.
const PHONE_STACK = [
  { src: IMG.app1, alt: "T-DOC app", left: "0%", top: "16.2%", z: 2, delay: 200, fx: "-36px", fy: "24px", hx: "5.4%", hy: "-4%" },
  { src: IMG.app2, alt: "Telth T-CARE App", left: "28.1%", top: "0%", z: 1, delay: 0, fx: "0px", fy: "48px", hx: "0%", hy: "3.4%" },
  { src: IMG.app3, alt: "CM/CCM app", left: "60.1%", top: "12.6%", z: 2, delay: 400, fx: "36px", fy: "24px", hx: "-5.4%", hy: "-2.6%" },
];

function PhoneStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-on={on}
      className="phone-stack relative mx-auto aspect-[441/469] w-full max-w-[300px] sm:max-w-[440px]"
    >
      <style>{`
        .phone-stack__glow{opacity:0;transition:opacity 1.2s ease}
        .phone-stack[data-on="true"] .phone-stack__glow{opacity:1}
        .phone-stack__item{opacity:0;transform:translate(var(--fx),var(--fy)) scale(.96);
          transition:opacity .8s ease,transform .9s cubic-bezier(.22,1,.36,1);transition-delay:var(--d)}
        .phone-stack[data-on="true"] .phone-stack__item{opacity:1;transform:none}
        .phone-stack__hover{transition:transform .7s cubic-bezier(.22,1,.36,1)}
        .phone-stack[data-on="true"]:hover .phone-stack__hover{transform:translate(var(--hx),var(--hy))}
        .phone-stack[data-on="true"] .phone-stack__img{animation:phone-float 6s ease-in-out infinite;
          animation-delay:calc(var(--d) + 1.2s)}
        @keyframes phone-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @media (prefers-reduced-motion:reduce){
          .phone-stack__item{opacity:1;transform:none;transition:none}
          .phone-stack__glow{opacity:1;transition:none}
          .phone-stack__hover{transition:none}
          .phone-stack[data-on="true"] .phone-stack__img{animation:none}
        }
      `}</style>

      {/* soft purple glow behind the phones (as in Figma) */}
      <div className="phone-stack__glow pointer-events-none absolute inset-[6%] rounded-full bg-purple-400/30 blur-3xl" />

      {PHONE_STACK.map((p) => (
        <div
          key={p.alt}
          className="phone-stack__item absolute w-[40.3%]"
          style={
            {
              left: p.left,
              top: p.top,
              zIndex: p.z,
              "--d": `${p.delay}ms`,
              "--fx": p.fx,
              "--fy": p.fy,
              "--hx": p.hx,
              "--hy": p.hy,
            } as CSSProperties
          }
        >
          <div className="phone-stack__hover">
            <img
              src={p.src}
              alt={p.alt}
              className="phone-stack__img w-full drop-shadow-[0_20px_30px_rgba(15,23,42,.25)]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

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

/* ---------------- platform: purpose-built applications ---------------- */
const APP_THEME: Record<string, { hex: string; rgb: string; lite: string }> = {
  patient: { hex: "#2563EB", rgb: "37,99,235", lite: "#7FB0FF" },
  tdoc: { hex: "#10B981", rgb: "16,185,129", lite: "#34D3A0" },
  cmccm: { hex: "#8B5CF6", rgb: "139,92,246", lite: "#B8A2FF" },
};
const APP_MS = 5000; // auto-switch tabs every 5s while visible (set 0 to turn off)

function PlatformShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [appId, setAppId] = useState(APPS[0].id);
  const app = APPS.find((a) => a.id === appId)!;
  const theme = APP_THEME[app.id];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // auto-advance tabs; restarts after every change, pauses on hover
  useEffect(() => {
    if (!APP_MS || !inView || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => {
      const i = APPS.findIndex((a) => a.id === appId);
      setAppId(APPS[(i + 1) % APPS.length].id);
    }, APP_MS);
    return () => clearTimeout(t);
  }, [inView, paused, appId]);

  const vars = {
    "--c": theme.hex,
    "--rgb": theme.rgb,
    "--cl": theme.lite,
  } as CSSProperties;

  return (
    <Section tone="dark" bg={IMG.waveSoft} className="relative overflow-hidden">
      <style>{`
        .pf-tab{display:inline-flex;align-items:center;gap:.75rem;border-radius:9999px;
          padding:.95rem 1.75rem;font-size:1.0625rem;font-weight:600;color:#cbd5e1;
          background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.06);
          transition:background-color .45s ease,color .45s ease,box-shadow .45s ease,transform .45s cubic-bezier(.22,1,.36,1),border-color .45s ease}
        .pf-tab:hover{background:rgba(255,255,255,.11);color:#fff;transform:translateY(-2px)}
        .pf-tab[aria-selected="true"]{background:var(--c);border-color:var(--c);color:#fff;
          box-shadow:0 0 0 4px rgba(var(--rgb),.18),0 14px 34px -10px rgba(var(--rgb),.85)}

        .pf-glow{background:rgba(var(--rgb),.22);transition:background-color .7s ease}
        .pf-card{border-radius:72px 28px 72px 28px;border:1px solid rgba(255,255,255,.12);
          background:linear-gradient(135deg,rgba(255,255,255,.07),rgba(255,255,255,.015));
          backdrop-filter:blur(10px);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 40px 90px -40px rgba(var(--rgb),.5);
          transition:box-shadow .7s ease}
        .pf-ico{display:grid;place-items:center;width:80px;height:80px;border-radius:20px;color:var(--cl);
          background:rgba(var(--rgb),.16);border:1px solid rgba(var(--rgb),.3);
          box-shadow:0 0 34px -6px rgba(var(--rgb),.55);
          transition:background-color .6s ease,border-color .6s ease,color .6s ease,box-shadow .6s ease}
        .pf-chip{border-radius:9999px;padding:.6rem 1.1rem;font-size:.95rem;font-weight:500;color:var(--cl);
          border:1px solid rgba(var(--rgb),.35);background:rgba(var(--rgb),.08);
          transition:background-color .35s ease,transform .35s ease,color .6s ease,border-color .6s ease}
        .pf-chip:hover{background:rgba(var(--rgb),.18);transform:translateY(-2px)}
        .pf-cta a,.pf-cta button{background:var(--c)!important;color:#fff!important;border-color:transparent!important;
          border-radius:10px!important;box-shadow:0 14px 30px -10px rgba(var(--rgb),.8)!important;
          transition:background-color .6s ease,box-shadow .6s ease,filter .3s ease,transform .3s ease!important}
        .pf-cta a:hover,.pf-cta button:hover{filter:brightness(1.1);transform:translateY(-2px)}

        .pf-panel{border-radius:32px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.035)}
        .pf-stat{border-radius:18px;padding:1.1rem 1.1rem;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1)}
        .pf-stat b{display:block;font-size:1.9rem;line-height:1.2;color:var(--cl);transition:color .6s ease}
        .pf-stat span{font-size:.9rem;color:#94a3b8}
        .pf-row{display:flex;align-items:center;gap:.9rem;border-radius:14px;padding:.85rem 1.1rem;color:#e2e8f0;font-size:.95rem;
          background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);
          transition:transform .35s cubic-bezier(.22,1,.36,1),background-color .35s ease,border-color .35s ease}
        .pf-row:hover{transform:translateX(6px);background:rgba(var(--rgb),.09);border-color:rgba(var(--rgb),.4)}
        .pf-check{display:grid;place-items:center;flex:none;width:26px;height:26px;border-radius:9999px;color:#fff;
          background:var(--c);transition:background-color .6s ease}

        .pf-in{animation:pf-in .65s cubic-bezier(.22,1,.36,1) both}
        .pf-pop{animation:pf-pop .5s cubic-bezier(.34,1.56,.64,1) both}
        @keyframes pf-in{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
        @keyframes pf-pop{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:none}}
        @media (prefers-reduced-motion:reduce){
          .pf-tab,.pf-row,.pf-chip,.pf-glow,.pf-card,.pf-ico{transition:none}
          .pf-in,.pf-pop{animation:none}
        }
      `}</style>

      {/* darker navy wash so the waves sit behind the card like the design */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050a1f]/70 via-[#070b22]/40 to-[#050a1f]/70" />

      <Container>
        <div
          ref={ref}
          style={vars}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <div className="text-center">
            <p className="text-[15px] font-medium uppercase tracking-[0.22em] text-white">
              Platform
            </p>
            <h2 className="mt-4 text-[34px] font-bold !text-white sm:text-[46px] lg:text-[54px]">
              Four Purpose-Built Applications
            </h2>
          </div>

          {/* tabs: separate pills, no wrapper pill */}
          <div
            role="tablist"
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8"
          >
            {APPS.map((a) => (
              <button
                key={a.id}
                type="button"
                role="tab"
                aria-selected={a.id === appId}
                onClick={() => setAppId(a.id)}
                className="pf-tab"
              >
                <a.icon className="h-6 w-6" aria-hidden="true" />
                {a.name}
              </button>
            ))}
          </div>

          <div className="relative mx-auto mt-12 max-w-[1270px]">
            <div className="pf-glow pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full blur-[130px]" />

            <div key={app.id} className="pf-card pf-in relative grid items-center gap-10 p-7 sm:p-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
              {/* left */}
              <div>
                <span className="pf-ico pf-pop">
                  <app.icon className="h-10 w-10" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="pf-in mt-9 text-[36px] font-bold !text-white sm:text-[44px]" style={{ animationDelay: "60ms" }}>
                  {app.name}
                </h3>
                <p className="pf-in mt-5 max-w-[540px] text-[17px] leading-[1.8] text-slate-300 sm:text-[19px]" style={{ animationDelay: "120ms" }}>
                  {app.desc}
                </p>
                <div className="pf-in mt-8 flex flex-wrap gap-3" style={{ animationDelay: "180ms" }}>
                  {app.pills.map((p) => (
                    <span key={p} className="pf-chip">
                      {p}
                    </span>
                  ))}
                </div>
                <div className="pf-cta pf-in mt-9" style={{ animationDelay: "240ms" }}>
                  <Btn to={app.to} arrow>
                    {app.cta}
                  </Btn>
                </div>
              </div>

              {/* right */}
              <div className="pf-panel p-6 sm:p-7">
                <p className="text-[15px] text-slate-500">{app.name}</p>
                <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
                  {app.stats.map(([v, l], i) => (
                    <div key={l} className="pf-stat pf-in" style={{ animationDelay: `${120 + i * 80}ms` }}>
                      <b>{v}</b>
                      <span>{l}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-3">
                  {app.pills.map((p, i) => (
                    <div key={p} className="pf-row pf-in" style={{ animationDelay: `${300 + i * 90}ms` }}>
                      <span className="pf-check pf-pop" style={{ animationDelay: `${380 + i * 90}ms` }}>
                        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------- why telth: coloured feature cards ---------------- */
const WHY_THEME = [
  { rgb: "37,99,235", hex: "#2563EB" }, // blue
  { rgb: "16,185,129", hex: "#10B981" }, // green
  { rgb: "139,92,246", hex: "#8B5CF6" }, // purple
  { rgb: "245,158,11", hex: "#F59E0B" }, // amber
  { rgb: "236,72,153", hex: "#EC4899" }, // pink
  { rgb: "14,165,233", hex: "#0EA5E9" }, // sky
];

function WhyGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-seen={seen} className="wy mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <style>{`
        .wy-card{position:relative;overflow:hidden;border-radius:24px;padding:2.2rem 2.2rem 2.4rem;
          background:linear-gradient(180deg,rgba(var(--rgb),.07),#fff 46%);
          border:1px solid rgba(var(--rgb),.16);
          box-shadow:0 10px 30px -18px rgba(var(--rgb),.35);
          transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s ease,border-color .45s ease}
        .wy[data-seen="false"] .wy-card{opacity:0}
        .wy[data-seen="true"] .wy-card{animation:wy-in .7s cubic-bezier(.22,1,.36,1) var(--d,0ms) backwards}
        @keyframes wy-in{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
        .wy-card:hover,.wy-card:focus-within{transform:translateY(-8px);border-color:var(--c);
          box-shadow:0 0 0 4px rgba(var(--rgb),.10),0 26px 54px -20px rgba(var(--rgb),.6)}
        .wy-ico{display:grid;place-items:center;width:60px;height:60px;border-radius:18px;
          color:var(--c);background:rgba(var(--rgb),.12);
          transition:background-color .45s ease,color .45s ease,transform .45s cubic-bezier(.34,1.56,.64,1),box-shadow .45s ease}
        .wy-card:hover .wy-ico{background:var(--c);color:#fff;transform:scale(1.08) rotate(-4deg);
          box-shadow:0 14px 26px -8px rgba(var(--rgb),.75)}
        .wy-title{transition:color .35s ease}
        .wy-card:hover .wy-title{color:var(--c)}
        .wy-bar{position:absolute;left:0;bottom:0;height:4px;width:100%;background:var(--c);
          transform:scaleX(0);transform-origin:left;transition:transform .55s cubic-bezier(.22,1,.36,1)}
        .wy-card:hover .wy-bar{transform:scaleX(1)}
        @media (prefers-reduced-motion:reduce){
          .wy[data-seen="false"] .wy-card{opacity:1}
          .wy-card{animation:none!important;transition:none}
          .wy-ico,.wy-bar{transition:none}
          .wy-card:hover{transform:none}
        }
      `}</style>
      {WHY.map((w, i) => {
        const t = WHY_THEME[i % WHY_THEME.length];
        return (
          <div
            key={w.title}
            tabIndex={0}
            className="wy-card"
            style={
              {
                "--c": t.hex,
                "--rgb": t.rgb,
                "--d": `${(i % 3) * 110 + Math.floor(i / 3) * 80}ms`,
              } as CSSProperties
            }
          >
            <span className="wy-ico">
              <w.icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3 className="wy-title mt-7 text-[21px] font-bold text-slate-900">
              {w.title}
            </h3>
            <p className="mt-3 text-[16px] leading-[1.8] text-slate-500">
              {w.text}
            </p>
            <span className="wy-bar" />
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- THOS: light copy panel + black capability panel ---------------- */
const THOS_CARDS = [
  { icon: Cloud, title: "Cloud Infrastructure", hex: "#2563EB", rgb: "37,99,235" },
  { icon: Cpu, title: "AI & Machine Learning", hex: "#10B981", rgb: "16,185,129" },
  { icon: Database, title: "Health Data Layer", hex: "#8B5CF6", rgb: "139,92,246" },
  { icon: Lock, title: "Enterprise Security", hex: "#F59E0B", rgb: "245,158,11" },
  { icon: Activity, title: "Real-time Analytics", hex: "#EC4899", rgb: "236,72,153" },
  { icon: Network, title: "Interoperability", hex: "#6366F1", rgb: "99,102,241" },
];

// purple "light curtain" strands drawn in SVG (swap for the exported Figma image if you prefer)
function ThosCurtain() {
  const N = 24;
  const W = 725;
  const left: string[] = [];
  const right: string[] = [];
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const xt = 40 + t * 150;
    const xb = 198 + t * 14;
    left.push(`M${xt},-10 C${xt},130 ${xb},110 ${xb},250 L${xb},600`);
    right.push(`M${W - xt + 10},-10 C${W - xt + 10},130 ${W - xb + 10},110 ${W - xb + 10},250 L${W - xb + 10},600`);
  }
  const all = [...left, ...right];
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 725 572"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="th-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3e8ff" />
          <stop offset=".45" stopColor="#c4a8ff" />
          <stop offset="1" stopColor="#7c3aed" stopOpacity=".55" />
        </linearGradient>
        <filter id="th-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>
      <g className="th-glow" filter="url(#th-blur)" stroke="#8b5cf6" strokeWidth="4" fill="none">
        {all.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <g stroke="url(#th-grad)" strokeWidth="1.1" fill="none" opacity=".95">
        {all.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}

function ThosShowcase() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [count, setCount] = useState(0); // how many cards are currently "lit"

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // light the cards one by one, hold, reset to dim, repeat (like the Figma)
  useEffect(() => {
    if (!inView || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(THOS_CARDS.length);
      return;
    }
    const delay = count >= THOS_CARDS.length ? 1900 : count === 0 ? 800 : 850;
    const t = setTimeout(
      () => setCount((c) => (c >= THOS_CARDS.length ? 0 : c + 1)),
      delay,
    );
    return () => clearTimeout(t);
  }, [inView, paused, count]);

  return (
    <section ref={ref} className="th relative overflow-hidden bg-[#F8FAFC]">
      <style>{`
        .th-card{position:relative;display:flex;flex-direction:column;justify-content:space-between;
          height:132px;border-radius:18px;padding:1.25rem 1.3rem;cursor:default;
          background:rgba(255,255,255,.24);border:1px solid rgba(255,255,255,.2);
          backdrop-filter:blur(10px);color:rgba(15,23,42,.88);
          box-shadow:0 0 0 0 rgba(var(--rgb),0);
          transition:background-color .6s ease,transform .6s cubic-bezier(.22,1,.36,1),box-shadow .6s ease,border-color .6s ease,color .6s ease}
        .th-card[data-lit="true"],.th-card:hover{background:#fff;border-color:#fff;color:#0f172a;
          transform:translateY(-4px);
          box-shadow:0 0 0 4px rgba(var(--rgb),.22),0 26px 50px -18px rgba(var(--rgb),.7)}
        .th-ico{display:grid;place-items:center;width:48px;height:48px;border-radius:14px;
          color:var(--c);background:rgba(var(--rgb),.16);opacity:.6;
          transition:opacity .5s ease,transform .6s cubic-bezier(.34,1.56,.64,1),background-color .5s ease}
        .th-card[data-lit="true"] .th-ico,.th-card:hover .th-ico{opacity:1;background:rgba(var(--rgb),.12);transform:scale(1.1) rotate(-4deg)}
        .th-title{font-size:.95rem;font-weight:700;line-height:1.25}
        .th-glow{animation:th-breathe 5s ease-in-out infinite}
        @keyframes th-breathe{0%,100%{opacity:.45}50%{opacity:.85}}
        @media (prefers-reduced-motion:reduce){
          .th-card,.th-ico{transition:none}
          .th-glow{animation:none}
        }
      `}</style>

      <div className="grid lg:grid-cols-2">
        {/* ---------- left: light copy panel ---------- */}
        <div className="flex items-center px-6 py-14 sm:px-10 lg:py-20">
          <div className="ml-auto w-full max-w-[600px] lg:pr-10">
            <Reveal dir="left">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-brand">
                  Powered by THOS
                </p>
                <h2 className="mt-5 font-franklin text-[34px] font-semibold leading-[1.35] !text-[#0B1437] sm:text-[44px]">
                  The <span className="text-brand">Intelligent</span>
                  <br />
                  Digital Foundation
                  <br />
                  of Healthcare
                </h2>
                <p className="mt-6 max-w-[520px] text-[17px] leading-[1.75] text-slate-500">
                  Telth brings patients, providers, care managers, technology,
                  and healthcare services together through one intelligent
                  ecosystem that simplifies every stage of the care journey.
                </p>
                <div className="mt-9">
                  <Btn to={ROUTES.thos}>Explore THOS</Btn>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------- right: black panel with curtain light + cards ---------- */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative flex items-center justify-center overflow-hidden rounded-t-[48px] bg-[#04020a] px-6 py-14 sm:px-10 lg:rounded-l-[80px] lg:rounded-tr-none lg:py-[72px]"
        >
          <ThosCurtain />
          <div className="relative grid w-full max-w-[540px] grid-cols-2 gap-4">
            {THOS_CARDS.map((c, i) => (
              <div
                key={c.title}
                data-lit={i < count}
                style={{ "--c": c.hex, "--rgb": c.rgb } as CSSProperties}
                className="th-card"
              >
                <span className="th-ico">
                  <c.icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <p className="th-title">{c.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {

  return (
    <>
      {/* ---------------- hero ---------------- */}
      <section className="relative -mt-[78px] overflow-hidden bg-[linear-gradient(135deg,#EAF2FF_0%,#fff_70%)] pt-[78px] sm:-mt-[82px] sm:pt-[82px]">
        <div className="pointer-events-none absolute -left-24 -top-20 h-[420px] w-[420px] animate-float rounded-full bg-blue-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-10 h-[320px] w-[320px] animate-floatAlt rounded-full bg-cyan-200/40 blur-3xl" />
        <Container className="relative grid items-center gap-10 py-12 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-24">
          <div>
            <Reveal>
              <h1 className="font-franklin text-[38px] font-bold leading-[1.1] sm:text-[52px] lg:text-[60px]">
                Healthcare Shouldn't Be This Complicated.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-[520px] text-[16px] leading-[1.75] sm:text-[19px]">
                Connect Patients, Doctors, Care Managers, and Administrators
                through one intelligent healthcare ecosystem.
              </p>
            </Reveal>
            {/* <Reveal delay={220}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Btn to={`${ROUTES.enquiry}`} arrow>
                  Book a Demo
                </Btn>
                <Btn to={ROUTES.ecosystem} variant="ghost">
                  Explore Ecosystem
                </Btn>
              </div>
            </Reveal> */}
          </div>
          <Reveal dir="zoom" delay={150}>
            <div className="img-zoom relative overflow-hidden rounded-[24px] shadow-lift">
              <img
                src={IMG.heroCare}
                alt="A Telth care manager with a family at home"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- solution + infrastructure (REDESIGNED v2) ---------------- */}
      <Section tone="soft" className="relative overflow-hidden">
        {/* Ambient atmosphere */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-blue-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-indigo-200/25 blur-3xl" />

        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Our Solution</Eyebrow>
                <h2 className="mt-2.5 font-franklin text-[32px] font-semibold leading-[1.15] sm:text-[42px]">
                  One Connected{" "}
                  <span className="text-brand">Healthcare Ecosystem</span>
                </h2>
                <p className="mt-5 text-[16px] leading-[1.75]">
                  Telth brings patients, providers, care managers, technology,
                  and healthcare services together through one intelligent
                  ecosystem that simplifies every stage of the care journey.
                </p>
                <div className="mt-7">
                  <Btn to={ROUTES.ecosystem}>
                    Explore Ecosystem
                  </Btn>
                </div>
              </Reveal>
            </div>
            <PhoneStack />
          </div>

          {/* ================= REDESIGNED: Telth care Infrastructure ================= */}
          <div className="relative mt-28">
            {/* soft grid backdrop */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(37,99,235,0.14) 1px, transparent 1px), radial-gradient(rgba(37,99,235,0.14) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                backgroundPosition: "0 0, 14px 14px",
                maskImage:
                  "radial-gradient(ellipse at center, black 40%, transparent 78%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 40%, transparent 78%)",
              }}
            />

            {/* Section heading */}
            <div className="text-center">
              <Reveal>
                <h3 className="mt-4 font-franklin text-[32px] font-semibold leading-[1.15] text-slate-900 sm:text-[40px]">
                  Telth care{" "}
                  <span className="text-gradient">Infrastructure</span>
                </h3>
              </Reveal>
            </div>

            {/* Figma flow diagram */}
            <div className="mt-14">
              <InfrastructureFlow />
            </div>
          </div>
          {/* ================= END REDESIGNED ================= */}
        </Container>
      </Section>

      {/* ---------------- four pillars ---------------- */}
      <Section tone="dark" bg={IMG.waveSoft}>
        <Container>
          <SectionTitle
            center
            light
            eyebrow="Core Solutions"
            title="Four Pillars of Connected Care"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="h-full">
                <article className="card-hover flex h-full flex-col rounded-[20px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
                  <IconBadge icon={p.icon} tone="dark" />
                  <h3 className="mt-5 text-[19px] font-bold !text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.65] text-slate-300">
                    {p.text}
                  </p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {p.pts.map((t) => (
                      <li
                        key={t}
                        className="flex items-center gap-2 text-[13.5px] text-slate-200"
                      >
                        <Check
                          className="h-4 w-4 flex-none text-emerald-400"
                          strokeWidth={3}
                        />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <TextLink to={p.to} light>
                      Explore
                    </TextLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------- care plan ---------------- */}
      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal dir="left">
              <div>
                <Eyebrow>Care plan</Eyebrow>
                <h2 className="mt-2.5 font-franklin text-[32px] font-semibold leading-[1.15] sm:text-[42px]">
                  Healthcare services.{" "}
                  <span className="text-brand">
                    Connected around our members.
                  </span>
                </h2>
                <p className="mt-5 text-[16px] leading-[1.75]">
                  Telth Healthcare Private Limited is a healthcare company
                  bringing health checks, doctor consultations, care
                  coordination and wellness support into one membership
                  experience.
                </p>
                <div className="mt-7">
                  <Btn to={ROUTES.carePlan} arrow>
                    Explore Care Plan
                  </Btn>
                </div>
              </div>
            </Reveal>
            <Reveal dir="right" delay={100}>
              <div className="img-zoom mx-auto max-w-[420px] overflow-hidden rounded-[28px] shadow-lift">
                <img
                  src={IMG.homeCarePlan}
                  alt="Connected care membership"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------------- journey ---------------- */}
      <Section tone="soft">
        <Container>
          <SectionTitle
            center
            eyebrow="How It Works"
            title={
              <>
                From First Contact to
                <br />
                <span className="text-gradient">
                  Our Continuous Care Journey
                </span>
              </>
            }
          />
          <JourneyShowcase />
        </Container>
      </Section>

      {/* ---------------- platform ---------------- */}
      <PlatformShowcase />

      {/* ---------------- why ---------------- */}
      <Section>
        <Container>
          <SectionTitle
            center
            eyebrow="Why Telth"
            title={
              <>
                Why Healthcare Organizations Choose{" "}
                <span className="text-brand">Telth</span>
              </>
            }
          />
          <WhyGrid />
        </Container>
      </Section>

      {/* ---------------- THOS ---------------- */}
      <ThosShowcase />

      {/* ---------------- stakeholders ---------------- */}
      <Section>
        <Container>
          <SectionTitle
            center
            eyebrow="Built For"
            title={
              <>
                Built for Every Stakeholder{" "}
                <span className="text-brand">in Healthcare</span>
              </>
            }
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {STAKEHOLDERS.map(([I, t], i) => (
              <Reveal key={t} delay={(i % 4) * 80}>
                <div className="card-hover flex h-full flex-col items-center gap-3 rounded-[18px] border border-slate-100 bg-white p-6 text-center shadow-card">
                  <IconBadge icon={I} />
                  <p className="font-franklin text-[15px] font-semibold text-ink">
                    {t}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------- partnerships ---------------- */}
      <Section tone="dark" bg={IMG.wavePartners}>
        <Container>
          <SectionTitle
            center
            light
            eyebrow="Partnerships"
            title="Together, We Can Build the Future of Connected Healthcare."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map(([I, t, d], i) => (
              <Reveal key={t} delay={(i % 3) * 100}>
                <div className="card-hover flex h-full items-start gap-4 rounded-[20px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
                  <IconBadge icon={I} tone="dark" />
                  <div>
                    <h3 className="text-[17px] font-bold !text-white">{t}</h3>
                    <p className="mt-1.5 text-[14px] text-slate-300">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-10 text-center">
              <Btn to={ROUTES.partnership}>Become a Partner</Btn>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title={<>Ready to Transform Healthcare?</>}
        text="Join healthcare organizations building a smarter, connected, and patient-first future with Telth."
        bg={IMG.ctaAuroraTall}
        primary={{ label: "Book a Demo", to: ROUTES.enquiry }}
      />
    </>
  );
}
