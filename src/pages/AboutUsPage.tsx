import { useState } from "react";
import { Globe2, Handshake, LockKeyhole, MapPin, Search, UserRound, Workflow } from "lucide-react";
import CtaBand from "../components/CtaBand";
import { Container, Eyebrow, Reveal, Section } from "../components/ui";
import { ROUTES } from "../lib/links";
import { IMG } from "../assets/slots";
import worldMap from "../assets/Map.png";

const PRINCIPLES = [
  { icon: UserRound, title: "Human-Centered", text: "Every design decision starts with the person receiving care — their needs, dignity and lived experience." },
  { icon: Search, title: "Evidence-Aware", text: "Our platform is based on evidence, using responsible language and honestly distinguishing proposed from proven." },
  { icon: Handshake, title: "Collaborative", text: "Telth grows through genuine partnerships with healthcare professionals, organisations and communities." },
  { icon: Globe2, title: "Globally Ambitious", text: "Designed from the outset for multinational, multilingual deployment across diverse healthcare contexts." },
  { icon: LockKeyhole, title: "Trustworthy", text: "Data governance, consent and patient safety are foundational to how we design and operate." },
  { icon: Workflow, title: "Responsible Progress", text: "We advance technology thoughtfully — where it is safe, useful and accountable." },
];

const LOCATIONS = [
  {
    id: "us",
    country: "United States",
    company: "TELTH Holdings Inc.",
    detail: "International strategy, technology collaboration and corporate development.",
    position: "left-[7%] top-[32%]",
    card: "left-1/2 top-10 -translate-x-1/2",
  },
  {
    id: "uk",
    country: "United Kingdom",
    company: "TELTH Healthcare",
    detail: "Regional business development and international collaboration, subject to legal scope.",
    position: "left-[48%] top-[27%]",
    card: "left-1/2 top-10 -translate-x-1/2",
  },
  {
    id: "india",
    country: "India",
    company: "TELTH Healthcare Pvt. Ltd.",
    detail: "Operational coordination, training, technology initiatives and community market development, including Salem and proposed national engagement in Delhi.",
    position: "left-[66%] top-[51%]",
    card: "left-1/2 top-10 -translate-x-1/2",
  },
];

export default function AboutUsPage() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-slate-50 px-6 py-14 text-center sm:px-12 sm:py-16">
              <img src={IMG.blobTR} alt="" aria-hidden="true" className="pointer-events-none absolute -right-4 -top-4 w-24 animate-float opacity-70 sm:w-36 lg:w-44" />
              <img src={IMG.blobDL} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-5 -left-5 w-24 animate-floatAlt opacity-50 sm:w-36 lg:w-44" />
              <Eyebrow>About Telth</Eyebrow>
              <h1 className="mx-auto mt-5 max-w-5xl font-franklin text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                One Intelligent Ecosystem. Every Dimension of Care.
              </h1>
              <p className="mx-auto mt-7 max-w-5xl text-[15px] leading-7 text-slate-600 sm:text-base">
                TELTH is a global healthcare technology and services ecosystem dedicated to transforming reactive, hospital-centric healthcare into predictive, preventive, precise, personalized and continuous smart care.
              </p>
              <p className="mx-auto mt-5 max-w-5xl text-[15px] leading-7 text-slate-600 sm:text-base">
                TELTH aims to bring advanced precision healthcare within reach of everyday individuals and families, not only those served by premium medical institutions. The 360° ecosystem combines connected medical devices, intelligent diagnostics, digital health infrastructure, professional medical expertise, community delivery, membership programmes and healthcare commerce.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>Our Healthcare Philosophy</Eyebrow>
              <h2 className="mt-4 max-w-lg font-franklin text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Predict. Prevent. Personalize. Connect.
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600">
                Use validated risk methods appropriately; encourage suitable screening and prevention; support care informed by individual clinical context; and connect patients, providers and technologies through coordinated workflows.
              </p>
            </Reveal>
            <div className="space-y-8">
              <Reveal dir="right">
                <h2 className="font-franklin text-3xl font-semibold text-slate-900">Our Vision</h2>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">To bring advanced healthcare innovation to every community by connecting intelligent technologies, medical expertise and sustainable healthcare delivery into one accessible, personalized and continuous care ecosystem.</p>
              </Reveal>
              <Reveal dir="right" delay={100}>
                <h2 className="font-franklin text-3xl font-semibold text-slate-900">Our Mission</h2>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">To empower individuals with data-driven smart care, enable healthcare professionals through intelligent clinical and service infrastructure, and build a sustainable healthcare ecosystem in which better patient care and responsible provider growth advance together.</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50 py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl rounded-2xl border border-slate-100 bg-white px-6 py-9 text-center shadow-md sm:px-12 sm:py-12">
              <h2 className="font-franklin text-2xl font-semibold text-slate-900 sm:text-3xl">Data-Driven Care With Service-Driven Revenue</h2>
              <p className="mx-auto mt-6 max-w-4xl text-[15px] leading-7 text-slate-600">For care seekers, the model is designed to support appropriate, evidence-based assessments and personalized care rather than unnecessary tests or services.</p>
              <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-slate-600">For physicians, clinics, pharmacies and care professionals, TELTH proposes service-driven revenue opportunities through T Pay Care Plans, Care@Home, connected monitoring, AI Kiosks, T Mart and NatLife.</p>
              <p className="mt-5 text-[15px] leading-7 text-slate-600">Commercial arrangements must remain transparent and must not influence clinical decisions.</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="py-14 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-center font-franklin text-3xl font-semibold text-slate-900 sm:text-4xl">Global corporate presence</h2>
          </Reveal>
          <div className="relative mx-auto mt-8 max-w-6xl">
            <img src={worldMap} alt="World map showing TELTH's corporate presence in the United States, United Kingdom and India" className="block w-full" />
            {LOCATIONS.map((location) => (
              <div key={location.id} className={`group absolute z-10 ${location.position}`}>
                <button
                  type="button"
                  aria-label={`${location.country} location details`}
                  aria-expanded={activeLocation === location.id}
                  onClick={() => setActiveLocation(activeLocation === location.id ? null : location.id)}
                  onBlur={(event) => {
                    if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node | null)) setActiveLocation(null);
                  }}
                  className="relative flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber-400 text-white shadow-lg ring-4 ring-white transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >
                  <MapPin size={23} fill="currentColor" strokeWidth={2.4} />
                </button>
                <div className={`pointer-events-none absolute ${location.card} w-60 rounded-xl border border-amber-300 bg-white px-4 py-3 text-center text-xs leading-[1.45] text-slate-800 opacity-0 shadow-lg transition duration-200 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 ${activeLocation === location.id ? "pointer-events-auto opacity-100" : ""}`}>
                  <strong className="block font-semibold">{location.country}</strong>
                  <span className="mt-1 block font-semibold">{location.company}</span>
                  <span className="mt-2 block">{location.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50 py-12 sm:py-14">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl rounded-2xl border border-slate-100 bg-white px-6 py-9 text-center shadow-md sm:px-12 sm:py-11">
              <h2 className="font-franklin text-2xl font-semibold text-red-500 sm:text-3xl">Governance and Responsibility</h2>
              <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-7 text-red-400">TELTH’s approach emphasizes patient safety, clinical accountability, privacy, cybersecurity, regulatory compliance, ethical commerce and transparent representation of research, product readiness and institutional affiliations.</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.wavePartners} className="py-14 sm:py-16">
        <Container>
          <Reveal className="text-center">
            <p className="font-open text-[11px] font-semibold uppercase tracking-[0.16em] text-white">What Makes Telth Different</p>
            <h2 className="mt-3 font-franklin text-[26px] font-semibold text-white sm:text-[32px]">Our Principles</h2>
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-[1050px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={(index % 3) * 70} className="h-full">
                <article className="h-full rounded-[15px] border border-white/80 bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.18)] sm:p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-blue-50 text-blue-600">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-franklin text-[13px] font-bold leading-snug text-slate-900">{title}</h3>
                  <p className="mt-2 text-[11px] leading-[1.6] text-slate-500">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Ready to Start a Conversation?"
        text="Whether you are a healthcare organization, partner or individual, we'd love to hear from you."
        primary={{ label: "Start a Conversation", to: ROUTES.enquiry }}
        secondary={{ label: "Explore Our Solutions", to: ROUTES.ecosystem }}
      />
    </>
  );
}
