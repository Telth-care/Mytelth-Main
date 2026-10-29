import {
  Activity,
  ArrowRight,
  Building2,
  ChartColumnIncreasing,
  Check,
  Cloud,
  Cpu,
  Database,
  FileText,
  Globe2,
  Heart,
  HeartPulse,
  Home as HomeIcon,
  IdCard,
  Layers3,
  Lock,
  Network,
  Stethoscope,
  Users,
  UsersRound,
  UserRound,
  Workflow,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Btn, Container, Reveal, TextLink } from "../components/ui";
import { ROUTES } from "../lib/links";
import heroArtwork from "../assets/home-hero-frame299.jpg";
import getStartedArtwork from "../assets/homegetstartedimg.webp";
import careJourneyAnimation from "../assets/undefined - Imgur.gif";
import connectedCareArtwork from "../assets/homecareplanimg.webp";
import thosArtwork from "../assets/homethossectionimg.webp";
import partnersArtwork from "../assets/homepartnersimg.webp";
import appPatientArtwork from "../assets/homeapp1img.webp";
import appDoctorArtwork from "../assets/homeapp2img.webp";
import appCareArtwork from "../assets/homeapp3img.webp";
import partnerHealthcareImage from "../assets/image 43.png";
import partnerTechnologyImage from "../assets/image 44.png";
import partnerHospitalImage from "../assets/image 45.png";
import partnerResearchImage from "../assets/image 46.png";
import partnerInvestorImage from "../assets/image 47.png";
import partnerGovernmentImage from "../assets/image 48.png";

const pillars = [
  { icon: Globe2, title: "Care @ Community", text: "Bringing healthcare closer to where people live through connected community healthcare services.", points: ["Book appointments instantly", "Video consultations", "Health records & prescriptions"], to: ROUTES.careCommunity },
  { icon: HomeIcon, title: "Care @ Home", text: "Continuous care, recovery support and remote monitoring delivered at home.", points: ["Remote patient monitoring", "Home visit coordination", "IoT device integration"], to: ROUTES.careHome },
  { icon: UserRound, title: "Personal Care", text: "Personalized prevention, wellness and long-term health programs for every individual.", points: ["Personalized health plans", "Preventive care programs", "Wellness tracking"], to: ROUTES.personalCare },
  { icon: Zap, title: "Intelligent Care Economy", text: "Connecting all healthcare services into one ecosystem.", points: ["Digital marketplace", "Pharmacy integration", "Lab & diagnostics network"], to: ROUTES.intelligentCareEconomy },
];

const applications = [
  { label: "Patient App", title: "Patient App", icon: Users, image: appPatientArtwork, tone: "blue", to: ROUTES.carePlan, text: "A consumer-grade mobile experience that puts patients in control of their entire healthcare journey.", features: ["Appointment Booking", "Health Records", "Teleconsultation", "Medication Reminders"], stats: ["98%|Satisfaction", "4.9★|App Store", "2min|Avg. Response"] },
  { label: "T-DOC App", title: "T-DOC App", icon: Stethoscope, image: appDoctorArtwork, tone: "emerald", to: ROUTES.tdoc, text: "A connected workspace for physicians to manage appointments, availability, patient context and follow-up.", features: ["Practice modes", "Patient context", "Consultations", "Care-team coordination"], stats: ["One|Care network", "Secure|Records", "Connected|Workflows"] },
  { label: "CM/CCM App", title: "CM/CCM App", icon: HeartPulse, image: appCareArtwork, tone: "violet", to: ROUTES.cmccm, text: "Purpose-built tools that help Care Managers and Clinical Care Managers coordinate permitted care workflows.", features: ["Care plans", "Patient follow-up", "Assessment workflows", "Team coordination"], stats: ["Connected|Care teams", "Guided|Follow-up", "Unified|Workflows"] },
];

const applicationThemes = {
  blue: { selectedTab: "bg-[#2860e9] text-white", badge: "bg-blue-500/20 text-blue-300", chip: "border-blue-300/20 bg-blue-400/[0.08] text-blue-200", button: "!bg-[#2860e9] hover:!bg-blue-700", metric: "text-blue-300", check: "bg-[#2860e9]", imageHalo: "bg-blue-400/15" },
  emerald: { selectedTab: "bg-emerald-500 text-white", badge: "bg-emerald-500/20 text-emerald-300", chip: "border-emerald-300/20 bg-emerald-400/[0.08] text-emerald-200", button: "!bg-emerald-600 hover:!bg-emerald-700", metric: "text-emerald-300", check: "bg-emerald-500", imageHalo: "bg-emerald-400/15" },
  violet: { selectedTab: "bg-violet-500 text-white", badge: "bg-violet-500/20 text-violet-300", chip: "border-violet-300/20 bg-violet-400/[0.08] text-violet-200", button: "!bg-violet-600 hover:!bg-violet-700", metric: "text-violet-300", check: "bg-violet-500", imageHalo: "bg-violet-400/15" },
};

const thosFeatures = [
  { icon: Cloud, title: "Cloud Infrastructure", color: "text-[#2563eb]", badge: "bg-blue-100/70" },
  { icon: Cpu, title: "AI & Machine Learning", color: "text-[#10b981]", badge: "bg-emerald-100/70" },
  { icon: Database, title: "Health Data Layer", color: "text-[#9333ea]", badge: "bg-purple-100/70" },
  { icon: Lock, title: "Enterprise Security", color: "text-[#eab308]", badge: "bg-amber-100/70" },
  { icon: Activity, title: "Real-time Analytics", color: "text-[#f43f5e]", badge: "bg-rose-100/70" },
  { icon: Network, title: "Interoperability", color: "text-[#6366f1]", badge: "bg-indigo-100/70" },
];

const partnerImages = [
  { src: partnerHealthcareImage, alt: "Healthcare providers and clinical team", title: "Healthcare Providers", description: "Clinics, hospitals, and specialists" },
  { src: partnerTechnologyImage, alt: "Healthcare technology partners", title: "Technology Partners", description: "Software and device integrations" },
  { src: partnerHospitalImage, alt: "Modern hospital building", title: "Hospitals", description: "Large health systems and networks" },
  { src: partnerResearchImage, alt: "Clinical research laboratory", title: "Researchers", description: "Academic and clinical research partners" },
  { src: partnerInvestorImage, alt: "Healthcare investment and analytics", title: "Investors", description: "Strategic and financial partners" },
  { src: partnerGovernmentImage, alt: "Government health institution", title: "Governments", description: "National and regional health authorities" },
];

const organizationReasons = [
  { icon: Network, title: "Connected Healthcare", text: "Every stakeholder in your care network works from a connected source of truth, helping reduce silos and miscommunication." },
  { icon: HeartPulse, title: "Continuous Patient Care", text: "From appointment to recovery, monitoring continues. Proactive alerts can help care teams respond earlier." },
  { icon: Layers3, title: "Digital Operations", text: "Replace manual, paper-based processes with coordinated digital workflows that can scale across your organization." },
  { icon: Workflow, title: "Smarter Coordination", text: "Intelligent workflows help route tasks to the right care team member and support consistent follow-up." },
  { icon: Heart, title: "Better Patient Experience", text: "Accessible digital services help patients stay engaged and understand the next step in their care journey." },
  { icon: Building2, title: "Scalable Enterprise Platform", text: "A platform designed to support multiple facilities with consistent governance, visibility and security." },
];

const stakeholders = [
  { icon: Building2, title: "Hospitals" }, { icon: HomeIcon, title: "Clinics" },
  { icon: Stethoscope, title: "Healthcare Providers" }, { icon: Users, title: "Employers" },
  { icon: Building2, title: "Government" }, { icon: FileText, title: "Research Organizations" },
  { icon: Activity, title: "Healthcare Startups" }, { icon: HomeIcon, title: "Home Healthcare" },
];

const responseLeft = [
  "Connected Measurements",
  "Organized Health Information",
  "AI-Assisted Workflows",
];

const responseRight = [
  "Care Coordination",
  "Clinician-Led Decisions",
  "Continuous Follow-Up",
];

const careJourney = [
  { icon: HomeIcon, title: "Home", text: <>Family, Elderly,<br />Chronic Care</> },
  { icon: IdCard, title: "Care Manager + HES", text: <>Health Assessment<br />at Home</> },
  { icon: Cloud, title: "Connected Measurements", text: <>Securely<br />Transmitted</> },
  { icon: Stethoscope, title: "Physician / Specialist", text: <>Teleconsultation &amp;<br />Review</> },
  { icon: FileText, title: "Personalized care plan", text: <>Treatment and<br />Guidance</> },
  { icon: ChartColumnIncreasing, title: "Follow-up and Remote monitoring", text: <>Ongoing Support</> },
  { icon: UsersRound, title: "Care Community", text: <>Healthier Families<br />Stronger Communities</> },
];

function ResponseCard({ children }: { children: string }) {
  return (
    <div className="flex min-h-[88px] items-center justify-center rounded-[24px] border border-cyan-100/90 bg-[#e9fbff] px-5 py-5 text-center font-franklin text-[16px] font-medium text-slate-900 shadow-[0_8px_24px_rgba(44,128,151,0.17)] sm:text-[17px]">
      {children}
    </div>
  );
}

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


export default function HomePageRedesign() {
  const [activeApplication, setActiveApplication] = useState(0);
  const application = applications[activeApplication];
  const ApplicationIcon = application.icon;
  const applicationTheme = applicationThemes[application.tone as keyof typeof applicationThemes];

  return (
    <>
      <section className="relative isolate -mt-[78px] flex min-h-[805px] overflow-hidden bg-[#edf2ff] pt-[78px] sm:-mt-[82px] sm:min-h-[805px] sm:pt-[82px]">
        <img
          src={heroArtwork}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/25 via-white/5 to-transparent" />
        <Container className="flex w-full max-w-[1447px] flex-1 flex-col px-5 pb-10 pt-[137px] sm:px-8 sm:pb-12 sm:pt-[137px] lg:px-[76px]">
          <Reveal>
            <div className="max-w-[682px]">
              <h1 className="text-balance font-franklin text-[40px] font-semibold leading-[1.12] tracking-[-0.025em] text-[#0f172a] sm:text-[54px] lg:text-[58px] lg:leading-[1.115]">
                Connected care. Everywhere. Everyone.
              </h1>
              <p className="mt-8 max-w-[533px] text-[17px] font-semibold leading-[1.46] text-black sm:text-[20px]">
                Technology-Enabled - Data-Driven - Clinician-Guided -
                Community-Connected
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Btn to={ROUTES.ecosystem} className="!rounded-[11px] !bg-[#2457e8] !px-5 !text-[14px] !shadow-none hover:!bg-[#1745cf]">
                  Explore Our Ecosystem
                </Btn>
                <Btn to={ROUTES.technology} className="!rounded-[11px] !bg-[#2457e8] !px-5 !text-[14px] !shadow-none hover:!bg-[#1745cf]">
                  Discover Our Technologies
                </Btn>
                <Btn to={ROUTES.partnership} className="!rounded-[11px] !bg-[#2457e8] !px-5 !text-[14px] !shadow-none hover:!bg-[#1745cf]">
                  Work With Telth
                </Btn>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-auto pt-12">
            <div className="mx-auto grid max-w-[1280px] gap-5 rounded-[28px] border border-white/80 bg-white/70 px-6 py-6 shadow-[0_12px_40px_rgba(44,67,122,0.12)] backdrop-blur-xl sm:px-9 sm:py-7 lg:grid-cols-2 lg:gap-0 lg:px-10 lg:py-5">
              <p className="flex items-center text-center text-[14px] leading-[2] text-[#101522] sm:text-[14.5px] lg:pr-8">
                TELTH is developing an integrated global healthcare technology and services ecosystem connecting medical innovation, artificial intelligence, connected diagnostics, healthcare professionals, community care, healthcare memberships and responsible commerce.
              </p>
              <p className="flex items-center border-white/80 text-center text-[14px] leading-[2] text-[#101522] sm:text-[14.5px] lg:border-l lg:pl-8">
                Our vision is to move healthcare from reactive, hospital-centric treatment toward predictive, preventive, precise, personalized and continuous smart care bringing advanced healthcare innovation within reach of more people and communities.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <Reveal dir="left">
              <h2 className="max-w-[660px] font-franklin text-[32px] font-semibold leading-[1.12] tracking-[-0.025em] text-[#111a32] sm:text-[40px] lg:text-[44px]">
                Healthcare Has Advanced.
                <span className="block text-[#2b63ee]">
                  The Healthcare Journey Is Still Fragmented.
                </span>
              </h2>
              <div className="mt-7 max-w-[690px] space-y-6 text-[15px] leading-[2] text-[#71809e] sm:text-[15.5px]">
                <p>
                  Medical science has transformed diagnosis, treatment and disease management. Imaging, laboratory testing, pharmaceuticals, wearables, artificial intelligence and digital health offer unprecedented possibilities. Yet patients still navigate disconnected hospitals, laboratories, pharmacies, specialists and home-care services. Health records may be scattered, preventive care delayed and chronic conditions insufficiently supported between appointments.
                </p>
                <p>
                  The challenge is not simply to invent more technologies; it is to connect appropriate technologies, qualified clinical expertise, relevant information and practical services. TELTH is working to connect what healthcare has left apart—not to replace physicians or hospitals, but to support them through integrated information, intelligent workflows and accessible delivery models.
                </p>
              </div>
            </Reveal>

            <Reveal dir="right" delay={100}>
              <div className="mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[28px] bg-[#090a12] shadow-[0_24px_60px_rgba(14,22,46,0.16)]">
                <img
                  src={careJourneyAnimation}
                  alt="A holographic visualization of a connected healthcare assessment"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="text-center">
            <h2 className="font-franklin text-[32px] font-semibold tracking-[-0.025em] text-[#111a32] sm:text-[40px]">
              Our <span className="text-[#2b63ee]">Integrated Response</span>
            </h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-[1120px] gap-5 md:grid-cols-[minmax(0,1fr)_220px_minmax(0,1fr)] md:items-stretch md:gap-x-10">
            <div className="grid gap-5">
              {responseLeft.map((item) => <ResponseCard key={item}>{item}</ResponseCard>)}
            </div>
            <div className="flex min-h-[150px] items-center justify-center rounded-[24px] border border-cyan-100/90 bg-[#e2f9ff] px-6 py-8 text-center font-franklin text-[17px] font-semibold text-slate-900 shadow-[0_10px_28px_rgba(44,128,151,0.2)] md:my-auto md:min-h-[170px]">
              Preventive Care
            </div>
            <div className="grid gap-5">
              {responseRight.map((item) => <ResponseCard key={item}>{item}</ResponseCard>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#eaf0ff] blur-3xl" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal dir="left">
              <p className="font-open text-[13px] font-bold uppercase tracking-[0.16em] text-[#2b63ee]">Our solution</p>
              <h2 className="mt-3 max-w-[620px] font-franklin text-[34px] font-semibold leading-[1.12] tracking-[-0.025em] text-[#111a32] sm:text-[42px]">
                One Connected<br /><span className="text-[#2b63ee]">Healthcare Ecosystem</span>
              </h2>
              <p className="mt-6 max-w-[590px] text-[16px] leading-[1.8] text-[#687794]">
                Healthcare is more than treatment. It is about people, trust, and feeling supported when it matters most. Telth brings patients, providers, care managers, technology and healthcare services closer together through one intelligent ecosystem, making every step of the care journey simpler, more personal and more connected.
              </p>
              <Btn to={ROUTES.ecosystem} arrow className="mt-7 !rounded-[11px] !bg-[#2457e8] !px-6">Explore Ecosystem</Btn>
            </Reveal>
            <Reveal dir="right" delay={100}>
              <div className="group relative mx-auto flex min-h-[500px] w-full max-w-[600px] cursor-pointer items-center justify-center sm:min-h-[560px] lg:min-h-[600px]">
                <div className="absolute inset-x-[10%] top-[14%] h-[70%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(114,128,255,0.2),rgba(183,222,255,0.08)_48%,transparent_72%)] blur-xl transition duration-500 group-hover:scale-110 group-hover:opacity-90" />
                <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cbd9ff] bg-white/70 shadow-[0_0_60px_rgba(137,124,255,0.17)] sm:h-[280px] sm:w-[280px]" />
                <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[26px] bg-white text-[#5a21a6] shadow-[0_12px_40px_rgba(81,49,153,0.2)] sm:h-24 sm:w-24">
                  <Network className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="absolute left-[4%] top-[16%] z-20 w-[38%] max-w-[185px] overflow-hidden rounded-[22px] border-[5px] border-[#111827] bg-white shadow-[0_18px_45px_rgba(18,28,60,0.22)] transition duration-500 ease-out group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-3 sm:left-[8%] sm:top-[13%]">
                  <img src={appDoctorArtwork} alt="T-DOC physician application preview" loading="lazy" decoding="async" className="aspect-[0.45] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="absolute right-[3%] top-[18%] z-20 w-[38%] max-w-[185px] overflow-hidden rounded-[22px] border-[5px] border-[#111827] bg-white shadow-[0_18px_45px_rgba(18,28,60,0.22)] transition duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-3 sm:right-[8%] sm:top-[15%]">
                  <img src={appPatientArtwork} alt="Patient application preview" loading="lazy" decoding="async" className="aspect-[0.45] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="absolute bottom-[8%] left-1/2 z-30 w-[38%] max-w-[185px] -translate-x-1/2 overflow-hidden rounded-[22px] border-[5px] border-[#111827] bg-white shadow-[0_18px_45px_rgba(18,28,60,0.24)] transition duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-[1.04] sm:bottom-[4%]">
                  <img src={appCareArtwork} alt="Care team application preview" loading="lazy" decoding="async" className="aspect-[0.45] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <span className="absolute bottom-[3%] left-[3%] h-24 w-24 rounded-full bg-[#c8f5f0]/70 blur-2xl" />
                <span className="absolute right-[2%] bottom-[8%] h-28 w-28 rounded-full bg-[#d9d0ff]/70 blur-2xl" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#f5f8ff] py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal className="text-center">
            <p className="font-open text-[13px] font-semibold uppercase tracking-[0.16em] text-[#2563eb]">Connected Care Infrastructure</p>
            <h2 className="mt-3 font-franklin text-[32px] font-semibold leading-[1.15] text-slate-900 sm:text-[40px]">
              Telth care <span className="text-[#2563eb]">Infrastructure</span>
            </h2>
          </Reveal>
          <div className="mt-14">
            <InfrastructureFlow />
          </div>
        </Container>
      </section>
      <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-10 -z-10 h-56 w-56 rounded-full bg-gradient-to-b from-[#7da7ff]/80 via-[#a9c5ff]/55 to-white/0 sm:right-[6%] sm:h-64 sm:w-64" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[22%] top-4 -z-10 h-28 w-28 rounded-full bg-gradient-to-b from-[#7da7ff]/75 to-white/0 sm:right-[25%] sm:h-32 sm:w-32" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 bottom-8 -z-10 h-56 w-56 rounded-full bg-gradient-to-b from-[#7da7ff]/75 via-[#a9c5ff]/55 to-white/0 sm:left-[4%] sm:h-64 sm:w-64" />
        <div aria-hidden="true" className="pointer-events-none absolute left-[13%] bottom-0 -z-10 h-28 w-28 rounded-full bg-gradient-to-b from-[#7da7ff]/65 to-white/0 sm:left-[16%] sm:h-32 sm:w-32" />
        <Container>
          <Reveal className="text-center">
            <p className="font-open text-[13px] font-semibold uppercase tracking-[0.16em] text-[#2563eb]">Core Solutions</p>
            <h2 className="mt-3 font-franklin text-[32px] font-semibold tracking-[-0.025em] text-[#111a32] sm:text-[40px]"><span className="text-[#2b63ee]">Four Pillars</span> of Connected Care</h2>
          </Reveal>
          <div className="relative mx-auto mt-12 grid max-w-[1000px] gap-5 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text, points, to }, index) => (
              <Reveal key={title} delay={index * 70} className="relative z-10 h-full">
                <article className="flex h-full flex-col rounded-[14px] border border-[#e8efff] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)] sm:p-6">
                  <div className="flex items-center gap-3"><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${index === 0 ? "bg-[#eff6ff] text-[#2563eb]" : index === 1 ? "bg-[#ecfdf5] text-[#10b981]" : index === 2 ? "bg-[#faf5ff] text-[#a855f7]" : "bg-[#fffbeb] text-[#f59e0b]"}`}><Icon className="h-[17px] w-[17px]" aria-hidden="true" /></span><h3 className="font-franklin text-[18px] font-bold text-[#111a32]">{title}</h3></div>
                  <p className="mt-4 text-[14px] leading-6 text-[#687794]">{text}</p>
                  <ul className="mt-4 space-y-2 text-[13px] text-[#687794]">{points.map((point) => <li key={point} className="flex items-center gap-2"><Check className="h-4 w-4 shrink-0 text-[#14a67a]" aria-hidden="true" />{point}</li>)}</ul>
                  <div className="mt-auto pt-5">
                    <TextLink to={to}>Explore</TextLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal dir="left">
              <p className="font-open text-[13px] font-bold uppercase tracking-[0.16em] text-[#2b63ee]">
                Care plan
              </p>
              <h2 className="mt-3 max-w-[570px] font-franklin text-[32px] font-semibold leading-[1.15] text-[#111a32] sm:text-[40px]">
                Healthcare services.
                <span className="block text-[#2b63ee]">Connected around our members.</span>
              </h2>
              <p className="mt-5 max-w-[560px] text-[16px] leading-[1.8] text-[#687794]">
                TELTH brings health checks, doctor consultations, care coordination and wellness support together in one connected membership experience.
              </p>
              <div className="mt-7">
                <Btn to={ROUTES.carePlan} arrow className="!rounded-[11px] !bg-[#2457e8] !px-6">
                  Explore Care Plan
                </Btn>
              </div>
            </Reveal>
            <Reveal dir="right" delay={100}>
              <div className="mx-auto max-w-[500px] overflow-hidden rounded-[28px]">
                <img
                  src={connectedCareArtwork}
                  alt="A care professional supporting a member at home"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="font-open text-[13px] font-bold uppercase tracking-[0.16em] text-[#2b63ee]">
              How CM/CCM connected
            </p>
            <h2 className="mt-3 font-franklin text-[32px] font-semibold tracking-[-0.025em] text-[#111a32] sm:text-[40px]">
              All linked in <span className="text-[#2b63ee]">one system</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-7 lg:gap-5">
            {careJourney.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 55} className="h-full">
                <div className="flex h-full flex-col items-center text-center">
                  <span className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-gradient-to-br from-[#e9ffff] to-[#b8fbfb] text-slate-950 shadow-[inset_0_0_0_1px_rgba(45,172,185,0.08)] sm:h-[96px] sm:w-[96px]">
                    <Icon className="h-9 w-9" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 min-h-[42px] text-[14px] font-semibold leading-[1.35] text-[#131a2b] sm:text-[15px]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[#71809e]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#0b1025] py-20 text-white sm:py-24 lg:py-28">
        <img src={partnersArtwork} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1025]/90 via-[#0b1025]/75 to-[#0b1025]/95" />
        <Container>
          <Reveal className="text-center">
            <p className="font-open text-[12px] font-bold uppercase tracking-[0.18em] text-sky-300">Platform</p>
            <h2 className="mt-3 font-franklin text-[32px] font-semibold tracking-[-0.025em] text-white sm:text-[40px]">Four Purpose-Built Applications</h2>
          </Reveal>
          <div className="mx-auto mt-8 flex max-w-max flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-1.5" role="tablist" aria-label="TELTH applications">
            {applications.map(({ label, icon: Icon, tone }, index) => (
            <button key={label} id={`application-tab-${index}`} type="button" role="tab" aria-selected={activeApplication === index} aria-controls="application-panel" onClick={() => setActiveApplication(index)} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold transition ${activeApplication === index ? `${applicationThemes[tone as keyof typeof applicationThemes].selectedTab} shadow-lg` : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
                <Icon className="h-4 w-4" aria-hidden="true" />{label}
              </button>
            ))}
          </div>
          <Reveal key={application.title} delay={80}>
            <div id="application-panel" role="tabpanel" aria-labelledby={`application-tab-${activeApplication}`} className="mx-auto mt-7 grid max-w-[1280px] gap-5 rounded-[28px] border border-white/10 bg-[#0c1328]/65 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur sm:p-7 md:grid-cols-[1fr_1fr] md:items-stretch lg:gap-8 lg:p-9">
              <div className="grid min-h-[340px] items-center gap-5 px-1 py-2 sm:px-2 lg:grid-cols-[minmax(0,1fr)_150px]">
                <div className="flex h-full flex-col justify-start">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${applicationTheme.badge}`}><ApplicationIcon className="h-6 w-6" aria-hidden="true" /></span>
                  <h3 className="mt-5 font-franklin text-[26px] font-bold text-white">{application.title}</h3>
                  <p className="mt-3 max-w-[480px] text-[14px] leading-[1.55] text-slate-300">{application.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{application.features.map((feature) => <span key={feature} className={`rounded-full border px-3 py-1.5 text-[11px] ${applicationTheme.chip}`}>{feature}</span>)}</div>
                  <Btn to={application.to} arrow className={`mt-7 self-start !rounded-[10px] !px-4 !py-2 !text-[12px] md:mt-auto ${applicationTheme.button}`}>Explore {application.title}</Btn>
                </div>
                <div className="relative mx-auto w-full max-w-[150px] lg:mx-0">
                  <div aria-hidden="true" className={`absolute -inset-4 rounded-[36px] blur-2xl ${applicationTheme.imageHalo}`} />
                  <img src={application.image} alt={`${application.title} app screen preview`} loading="lazy" decoding="async" className="relative aspect-[0.48] w-full rounded-[24px] border-[5px] border-[#090d1b] bg-white object-cover object-top shadow-[0_18px_42px_rgba(0,0,0,0.38)] transition duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_25px_55px_rgba(0,0,0,0.48)]" />
                </div>
              </div>
              <div className="rounded-[20px] border border-white/[0.06] bg-white/[0.045] p-4 sm:p-5">
                <p className="mb-4 px-1 text-[11px] font-medium text-slate-400">{application.title}</p>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">{application.stats.map((stat) => { const [value, label] = stat.split("|"); return <div key={stat} className="rounded-[14px] border border-white/[0.035] bg-white/[0.055] p-3"><p className={`font-franklin text-lg font-bold sm:text-xl ${applicationTheme.metric}`}>{value}</p><p className="mt-1 text-[10px] text-slate-400">{label}</p></div>; })}</div>
                <ul className="mt-3 space-y-2">{application.features.map((feature) => <li key={feature} className="flex items-center gap-2 rounded-[10px] border border-white/[0.035] bg-white/[0.045] px-3 py-2.5 text-[11px] text-slate-300"><span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white ${applicationTheme.check}`}><Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" /></span>{feature}</li>)}</ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal className="text-center"><p className="font-open text-xs font-bold uppercase tracking-[0.17em] text-[#2860e9]">Why TELTH</p><h2 className="mt-3 font-franklin text-[32px] font-semibold tracking-[-0.025em] text-[#111a32] sm:text-[40px]">Why Healthcare Organizations <span className="text-[#2860e9]">Choose TELTH</span></h2></Reveal>
          <div className="mx-auto mt-10 grid max-w-[1040px] gap-4 sm:grid-cols-2 lg:grid-cols-3">{organizationReasons.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 45} className="h-full"><article className="h-full rounded-[20px] border border-[#edf1f8] bg-[#f7f9fc] p-6 transition hover:-translate-y-1 hover:shadow-lg"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf1ff] text-[#2860e9]"><Icon className="h-5 w-5" aria-hidden="true" /></span><h3 className="mt-4 font-franklin text-[17px] font-semibold text-[#111a32]">{title}</h3><p className="mt-2 text-[13px] leading-6 text-[#71809e]">{text}</p></article></Reveal>)}</div>
        </Container>
      </section>

      <section className="overflow-hidden bg-[#f6f9fd] py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal dir="left">
              <p className="font-open text-xs font-bold uppercase tracking-[0.17em] text-[#2860e9]">Powered by THOS</p>
              <h2 className="mt-3 max-w-[560px] font-franklin text-[32px] font-semibold leading-tight text-[#111a32] sm:text-[40px]">
                The <span className="text-[#2860e9]">Intelligent Digital Foundation</span> of Healthcare
              </h2>
              <p className="mt-5 max-w-[540px] text-[15px] leading-7 text-[#687794]">
                Telth brings patients, providers, care managers, technology, and healthcare services together through one intelligent ecosystem that simplifies every stage of the care journey.
              </p>
              <Btn to={ROUTES.thos} className="mt-7 !rounded-[10px] !bg-[#2860e9]">Explore THOS</Btn>
            </Reveal>
            <Reveal dir="right" delay={90}>
              <div className="relative mx-auto aspect-[1.27] w-full overflow-hidden rounded-[28px] bg-black shadow-[0_22px_65px_rgba(31,49,93,0.16)]">
                <img src={thosArtwork} alt="Purple illuminated THOS platform artwork" loading="lazy" decoding="async" className="thos-artwork-drift absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-x-[15%] top-[13%] bottom-[13%] grid grid-cols-2 grid-rows-3 gap-2.5 sm:gap-3">
                  {thosFeatures.map(({ icon: Icon, title, color, badge }, index) => (
                    <div key={title} style={{ animationDelay: `${index * 700}ms` }} className="thos-feature-float flex flex-col justify-between rounded-[12px] border border-white/20 bg-white/[0.40] p-2.5 backdrop-blur-[2px] sm:rounded-[16px] sm:p-4">
                      <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${badge} ${color} sm:h-9 sm:w-9`}>
                        <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="text-[9px] font-semibold leading-tight text-[#0f172a] sm:text-[12px]">{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal className="text-center"><p className="font-open text-xs font-bold uppercase tracking-[0.17em] text-[#2860e9]">Built for</p><h2 className="mt-3 font-franklin text-[32px] font-semibold text-[#111a32] sm:text-[40px]">Built for Every <span className="text-[#2860e9]">Stakeholder</span> in Healthcare</h2></Reveal>
          <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-2 gap-4 sm:grid-cols-4">{stakeholders.map(({ icon: Icon, title }, index) => <Reveal key={title} delay={index * 35}><div className="flex min-h-[118px] flex-col items-center justify-center gap-3 rounded-[20px] bg-[#f7f9fc] p-4 text-center transition hover:bg-[#eef4ff] hover:shadow-md"><Icon className="h-8 w-8 text-[#2860e9]" strokeWidth={1.6} aria-hidden="true" /><h3 className="text-[13px] font-semibold text-[#17223d]">{title}</h3></div></Reveal>)}</div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#070b16] py-20 text-white sm:py-24">
        <img src={partnersArtwork} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#070b16]/55 via-[#070b16]/25 to-[#070b16]/65" />
        <Container>
          <Reveal className="text-center">
            <p className="font-open text-[13px] font-semibold uppercase tracking-[0.18em] text-white/90">Partnerships</p>
            <h2 className="mx-auto mt-3 max-w-[1200px] font-franklin text-[32px] font-semibold leading-[1.25] text-white sm:text-[48px]">
              Together, We Can Build the Future of Connected Healthcare.
            </h2>
            <div className="mx-auto mt-9 grid max-w-[1140px] grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-[40px]">
              {partnerImages.map(({ src, alt, title, description }, index) => (
                <Reveal key={alt} delay={(index % 3) * 70}>
                  <div
                    tabIndex={0}
                    aria-label={`${title}: ${description}`}
                    className="group relative aspect-[1.5] overflow-hidden rounded-[16px] shadow-[0_14px_35px_rgba(0,0,0,0.28)] outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b16] sm:rounded-[20px]"
                  >
                    <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] group-focus-visible:scale-[1.04]" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-0 bg-black/65 px-4 py-3 text-left opacity-100 transition-all duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100">
                      <p className="text-sm font-semibold leading-tight text-white">{title}</p>
                      <p className="mt-1 text-xs leading-snug text-white/80">{description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Btn to={ROUTES.partnership} className="mt-8 !rounded-[10px] !bg-[#2860e9] !px-8 !py-3">Become a Partner</Btn>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container className="max-w-[1360px]">
          <div className="relative mx-auto flex min-h-[420px] max-w-[1280px] items-center justify-center overflow-hidden rounded-[28px] bg-[#101b34] px-6 py-16 text-center text-white sm:min-h-[480px] sm:rounded-[32px] sm:px-12 lg:min-h-[517px] lg:px-20">
            <img src={getStartedArtwork} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1225]/35 via-transparent to-[#0b1225]/25" />
            <Reveal className="relative z-10 flex w-full flex-col items-center">
              <p className="font-open text-[12px] font-semibold uppercase tracking-[0.16em] text-[#60a5fa] sm:text-[14px]">Get Started</p>
              <h2 className="mt-5 max-w-[900px] font-franklin text-[32px] font-semibold leading-[1.08] text-white sm:text-[46px] lg:text-[56px]">
                Build the Future of Connected Healthcare With TELTH
              </h2>
              <p className="mt-5 max-w-[540px] text-[15px] leading-[1.7] text-slate-300 sm:text-[18px]">
                Explore the TELTH ecosystem, discover our technologies, or connect with us to explore a partnership.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Btn to={ROUTES.ecosystem} className="!rounded-[12px] !bg-[#2563eb] !px-7 !text-[14px] !shadow-none hover:!bg-[#1d4ed8]">Explore Our Ecosystem</Btn>
                <Btn to={ROUTES.partnership} className="!rounded-[12px] !bg-[#2563eb] !px-7 !text-[14px] !shadow-none hover:!bg-[#1d4ed8]">Work With Telth</Btn>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
