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
  LineChart,
  Network,
  Rocket,
  ShieldCheck,
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
  Waypoints,
  HeartPulse,
  UserRound,
  Sparkles,
  Zap,
  Layers,
  Shield,
  Heart,
  Server,
  Boxes,
  Workflow,
  Boxes as BoxesIcon,
} from "lucide-react";
import CtaBand from "../components/CtaBand";
import { JourneySteps } from "../components/extra";
import {
  Btn,
  Container,
  Eyebrow,
  FeatureCard,
  FeatureGrid,
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
    name: "Patient App",
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
    cta: "Explore Patient APP",
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

const THOS = [
  [Cloud, "Cloud Infrastructure"],
  [Brain, "AI & Machine Learning"],
  [Database, "Health Data Layer"],
  [ShieldCheck, "Enterprise Security"],
  [LineChart, "Real-time Analytics"],
  [Waypoints, "Interoperability"],
] as const;

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
  { src: IMG.app2, alt: "Telth patient app", left: "28.1%", top: "0%", z: 1, delay: 0, fx: "0px", fy: "48px", hx: "0%", hy: "3.4%" },
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

export default function HomePage() {
  const [appId, setAppId] = useState("patient");
  const app = APPS.find((a) => a.id === appId)!;

  return (
    <>
      {/* ---------------- hero ---------------- */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#EAF2FF_0%,#fff_70%)]">
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
                From First Contact to{" "}
                <span className="text-gradient">
                  Our Continuous Care Journey
                </span>
              </>
            }
          />
          <JourneySteps />
        </Container>
      </Section>

      {/* ---------------- platform ---------------- */}
      <Section tone="dark" bg={IMG.waveSoft}>
        <Container>
          <SectionTitle
            center
            light
            eyebrow="Platform"
            title="Purpose-Built Applications"
          />
          <div
            role="tablist"
            className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-1.5 backdrop-blur"
          >
            {APPS.map((a) => (
              <button
                key={a.id}
                role="tab"
                aria-selected={a.id === appId}
                onClick={() => setAppId(a.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13.5px] font-bold transition-all sm:px-5 ${a.id === appId ? "bg-brand text-white shadow-lg" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}
              >
                <a.icon className="h-4 w-4" aria-hidden="true" />
                {a.name}
              </button>
            ))}
          </div>
          <div
            key={app.id}
            className="mx-auto mt-10 grid max-w-5xl animate-fadeIn items-center gap-8 rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-10 lg:grid-cols-[1.2fr_1fr]"
          >
            <div>
              <h3 className="text-[28px] font-bold !text-white sm:text-[34px]">
                {app.name}
              </h3>
              <p className="mt-3 text-[15.5px] leading-[1.7] text-slate-300">
                {app.desc}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {app.stats.map(([v, l]) => (
                  <div
                    key={l}
                    className="rounded-2xl bg-white/10 px-2 py-4 text-center"
                  >
                    <p className="font-franklin text-[22px] font-bold text-sky-300 sm:text-[26px]">
                      {v}
                    </p>
                    <p className="text-[12px] text-slate-300">{l}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {app.pills.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[12.5px] font-semibold text-slate-100"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <div className="mt-7">
                <Btn to={app.to} arrow>
                  {app.cta}
                </Btn>
              </div>
            </div>
            <img
              src={app.img}
              alt={`${app.name} screen`}
              loading="lazy"
              className="mx-auto max-h-[420px] w-auto drop-shadow-[0_30px_60px_rgba(104,71,245,.4)]"
            />
          </div>
        </Container>
      </Section>

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
          <FeatureGrid cols={3}>
            {WHY.map((w, i) => (
              <FeatureCard key={w.title} {...w} delay={(i % 3) * 100} />
            ))}
          </FeatureGrid>
        </Container>
      </Section>

      {/* ---------------- THOS ---------------- */}
<Section tone="dark" className="relative overflow-hidden">
  {/* ---- Ambient lighting: purple side glows ---- */}
  <div className="pointer-events-none absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[120px]" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[120px]" />
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[100px]" />

  {/* ---- Curtain light streaks (top corners) ---- */}
  <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[180px] opacity-40"
       style={{ background: "linear-gradient(180deg, rgba(168,85,247,0.35) 0%, transparent 70%)",
                maskImage: "linear-gradient(90deg, black 40%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(90deg, black 40%, transparent 100%)" }} />
  <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[180px] opacity-40"
       style={{ background: "linear-gradient(180deg, rgba(168,85,247,0.35) 0%, transparent 70%)",
                maskImage: "linear-gradient(270deg, black 40%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(270deg, black 40%, transparent 100%)" }} />

  <Container className="relative">
    <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
      {/* ================= LEFT: copy + CTA ================= */}
      <Reveal dir="left">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-violet-200 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Powered by THOS
          </span>

          <h2 className="mt-5 font-franklin text-[32px] font-semibold leading-[1.12] !text-white sm:text-[44px]">
            The{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-violet-300 bg-clip-text text-transparent">
              Intelligent
            </span>{" "}
            Digital Foundation of Healthcare
          </h2>

          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.75] text-slate-300">
            Telth brings patients, providers, care managers, technology, and
            healthcare services together through one intelligent ecosystem that
            simplifies every stage of the care journey.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Btn to={ROUTES.thos} arrow>
              Explore THOS
            </Btn>
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Live in production
            </span>
          </div>
        </div>
      </Reveal>

      {/* ================= RIGHT: capability card grid ================= */}
      <Reveal dir="zoom" delay={100}>
        <div className="relative">
          {/* Glow halo behind the grid */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-br from-violet-600/40 via-fuchsia-500/20 to-transparent blur-3xl" />

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {THOS.map(([I, t], i) => {
              const isLast = i === THOS.length - 1;
              return (
                <div
                  key={t}
                  className={`thos-card group relative flex h-[130px] flex-col justify-between overflow-hidden rounded-[22px] p-5 sm:h-[150px] sm:p-6 ${
                    isLast
                      ? "border border-violet-400/30 bg-gradient-to-br from-violet-900/40 via-slate-900/60 to-slate-900/80 backdrop-blur-xl"
                      : "border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-violet-400/40"
                  }`}
                >
                  {/* inner top highlight */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                  {/* corner glow on hover */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/30 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* icon tile */}
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-inset ring-white/15 backdrop-blur">
                    <I className={`h-5 w-5 ${isLast ? "text-violet-200" : "text-violet-300"}`} strokeWidth={1.9} />
                  </span>

                  {/* title */}
                  <p className={`relative font-franklin text-[15px] font-bold leading-tight sm:text-[16.5px] ${
                    isLast ? "text-white" : "text-slate-100"
                  }`}>
                    {t}
                  </p>

                  {/* last card: purple sweeping light */}
                  {isLast && (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
                      <div className="pointer-events-none absolute -right-10 top-1/2 h-[180%] w-24 -translate-y-1/2 rotate-12 bg-gradient-to-b from-transparent via-violet-300/25 to-transparent blur-md" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  </Container>
</Section>

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
