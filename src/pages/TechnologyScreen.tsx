import { ArrowRight, Check, Database, Activity, Brain, Building2, House, Infinity as InfinityIcon } from "lucide-react";
import CtaBand from "../components/CtaBand";
import { Btn, Container, Eyebrow, Reveal, Section, SectionTitle } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";
import technologyHero from "../assets/technology.png";
import connectedTechnologyArtwork from "../assets/ConnectedTechnology.png";
import connectedScreeningArtwork from "../assets/connectedScreening.png";
import connectedCareArtwork from "../assets/conneectedcare.png";
import smarterWayArtwork from "../assets/smarterway.png";

const STATS = [
  { v: "4", a: "Core", b: "Technology Pillars" },
  { v: "6", a: "Real-World", b: "Care Models" },
  { v: "360°", a: "", b: "Connected Health View" },
  { v: "1", a: "Unified", b: "Ecosystem" },
];

const PILLARS = [
  { tag: "G Med ID", title: "Your Health. Connected Over Time.", text: "A secure digital health identity designed to keep your health information connected across your healthcare journey.", points: ["Longitudinal health record", "Access your health information when needed", "Patient-controlled data"] },
  { tag: "TWBAN & Monitoring Devices", title: "Connected Devices. Better Health Awareness.", text: "Telth connects compatible health-monitoring devices to help capture meaningful health information and support continuous care.", points: ["Diabetes monitoring", "Heart and vital-sign monitoring", "Connected health devices"] },
  { tag: "P³DSC", title: "Turning Health Data Into Meaningful Care.", text: "Telth's intelligent data and workflow technology helps bring together health information, measurements and care workflows to support more informed healthcare.", chips: ["Predictive", "Precise", "Point-of-Care", "Data-Driven", "Smart Care"] },
  { tag: "Telth Hubs & Kiosks", title: "Healthcare Technology, Where People Need It.", text: "Telth brings connected healthcare technology into communities through AI Kiosks, Health Hubs and specialised care facilities.", chips: ["Telth AI Kiosk", "Basic AI Health Hub", "Advanced AI Health Hub", "AI Multispecialty Hub", "Telth Diagnostic Hub"] },
];

const DEPLOY = [
  { tag: "Telth AI Kiosk", title: "Connected Screening, Wherever People Need It.", text: "Compact technology designed to bring accessible health screening closer to communities.", img: connectedScreeningArtwork },
  { tag: "Care@Home", title: "Connected Care, Delivered at Home.", text: "Technology and Care Manager support that help extend healthcare beyond traditional facilities and into the home.", img: connectedCareArtwork },
  { tag: "Telth AI Health Hubs", title: "A Smarter Way to Bring Care Together.", text: "Connected healthcare environments combining technology, health examination and care services.", img: smarterWayArtwork },
  { tag: "Multispecialty Hubs", title: "More Healthcare Under One Roof.", text: "Connected facilities designed to bring multiple healthcare services and specialists closer to the community.", img: IMG.techHub },
  { tag: "Eterna Medical Aesthetics", title: "Technology-Enabled Aesthetics & Wellness.", text: "Modern technology-supported aesthetics and wellness services delivered by appropriately qualified professionals.", img: IMG.techAesthetics },
  { tag: "Eterna Longevity Centers", title: "Technology for Healthier Ageing.", text: "Connected preventive, wellness and healthy-ageing experiences designed around long-term wellbeing.", img: IMG.techAgeing },
];

const FLOW = [
  { icon: Database, title: "G Med ID", sub: "Health Information", tone: "border-blue-200 bg-blue-50 text-blue-700" },
  { icon: Activity, title: "Connected Devices", sub: "Health Measurements", tone: "border-teal-200 bg-teal-50 text-teal-700" },
  { icon: Brain, title: "P³DSC™", sub: "Intelligence & Workflows", tone: "border-violet-200 bg-violet-50 text-violet-700" },
  { icon: Building2, title: "AI Kiosks & Health Hubs", sub: "Healthcare Infrastructure", tone: "border-blue-200 bg-blue-50 text-blue-700" },
  { icon: House, title: "Care@Home & Community", sub: "Real-World Delivery", tone: "border-teal-200 bg-teal-50 text-teal-700" },
  { icon: InfinityIcon, title: "Continuous Care", sub: "Connected Healthcare", tone: "border-amber-200 bg-amber-50 text-amber-700" },
];

export default function TechnologyScreen() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden">
        <Container className="relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-24">
          <div>
            <Reveal><Eyebrow>Technology</Eyebrow></Reveal>
            <Reveal delay={90}>
              <h1 className="mt-3 font-franklin text-[36px] font-semibold leading-[1.12] sm:text-[48px] lg:text-[54px]">
                Technology That Brings Better Healthcare <span className="text-gradient">Closer</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] sm:text-[17.5px]">
                From connected health devices and intelligent data systems to AI-powered health hubs, Telth brings together the technology and infrastructure needed to make healthcare more connected, proactive and accessible.
              </p>
              <p className="mt-5 font-franklin text-[17px] font-semibold text-ink">Connected technology. Human care. Real-world impact.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Btn to={ROUTES.technologyDevices}>Explore Telth Devices</Btn>
                <Btn to={ROUTES.healthConnect} variant="ghost">Explore Telth HealthGuard AI</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal dir="zoom" delay={150}>
            <div className="mx-auto w-full max-w-[680px]">
              <img src={technologyHero} alt="TELTH connected health hub and diagnostic devices" className="aspect-[16/10] w-full object-contain" />
            </div>
          </Reveal>
        </Container>

        <Container className="relative pb-14 sm:pb-20">
          <div className="grid grid-cols-2 gap-4 rounded-[24px] border border-slate-100 bg-white p-5 shadow-card sm:p-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.b} delay={i * 90} className="text-center">
                <p className="font-franklin text-[34px] font-bold text-brand sm:text-[44px]">{s.v}</p>
                <p className="text-[12.5px] font-semibold uppercase tracking-wide text-muted sm:text-[13px]">{s.a} {s.b}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* connected technology */}
      <Section className="bg-white py-14 sm:py-20">
        <Container>
          <SectionTitle center eyebrow="Connected Technology" title="Connected Technology" text="Telth connects health information, monitoring devices and intelligent technology to support a more continuous healthcare experience." />
          <Reveal delay={80}>
            <div className="mx-auto mt-8 max-w-[920px] overflow-hidden rounded-[18px] shadow-card">
              <img src={connectedTechnologyArtwork} alt="Connected healthcare technology linking patients, clinicians, devices and health information" loading="lazy" decoding="async" className="aspect-[2.4/1] w-full object-cover" />
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-12">
            {PILLARS.map((p, i) => {
              const accent = ["text-blue-600", "text-teal-600", "text-violet-600", "text-orange-500"][i];
              const iconTone = ["bg-blue-50 text-blue-600", "bg-teal-50 text-teal-600", "bg-violet-50 text-violet-600", "bg-orange-50 text-orange-500"][i];
              const items = p.points ?? p.chips ?? [];
              return (
                <Reveal key={p.tag} delay={(i % 2) * 100} className="h-full">
                  <article className="card-hover h-full overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,.08)]">
                    <div className="px-5 py-5 sm:px-6 sm:py-6">
                      <h3 className="font-franklin text-[18px] font-semibold text-slate-900">{p.tag}</h3>
                      <p className={`mt-0.5 text-[12px] font-medium ${accent}`}>{p.title}</p>
                      <p className="mt-3 text-[12.5px] leading-[1.65] text-slate-600">{p.text}</p>
                      {p.tag === "P³DSC" ? (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {p.chips?.map((chip) => (
                            <span key={chip} className="rounded-full border border-violet-100 bg-violet-50 px-2.5 py-1 text-[10px] font-medium leading-none text-violet-600">{chip}</span>
                          ))}
                        </div>
                      ) : (
                        <ul className={`mt-3 grid gap-x-4 gap-y-1.5 ${items.length > 3 ? "sm:grid-cols-2" : ""}`}>
                          {items.map((item) => (
                            <li key={item} className="flex items-start gap-1.5 text-[11.5px] leading-[1.45] text-slate-600">
                              <span className={`mt-px flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full ${iconTone.split(" ")[0]}`}>
                                <Check className={`h-2.5 w-2.5 ${iconTone.split(" ")[1]}`} strokeWidth={3} aria-hidden="true" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>
      {/* real-world deployment */}
      <Section id="real-world-deployment"><Container>
          <SectionTitle center eyebrow="Real-World Deployment" title="Bringing Telth Technology Into Communities" text="Telth provides the technology, infrastructure and connected-care models that enable entrepreneurs and healthcare partners to bring modern healthcare closer to the communities they serve." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DEPLOY.map((d, i) => (
              <Reveal key={d.tag} delay={(i % 3) * 80} className="h-full">
                <article className="card-hover h-full overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,.07)]">
                  <div className={`img-zoom relative overflow-hidden ${i < 3 ? "aspect-[1.85/1]" : "aspect-[2.15/1]"}`}>
                    <img src={d.img} alt={d.tag} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
                    <p className="absolute bottom-3 left-4 font-franklin text-[14px] font-semibold text-white">{d.tag}</p>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-[14px] font-semibold leading-snug text-brand">{d.title}</h3>
                    <p className="mt-2 text-[12px] leading-[1.65] text-slate-600">{d.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* technology → care */}
      <Section className="border-y border-slate-100 bg-white py-12 sm:py-14">
        <Container>
          <SectionTitle center title="From Technology to Real-World Care" text="Telth technology is designed to move beyond screens and devices — connecting people, healthcare professionals, Care Managers and communities through practical care environments." />
          <ol className="mx-auto mt-9 flex max-w-6xl items-start justify-between gap-2 overflow-x-auto pb-2 sm:gap-3">
            {FLOW.map((step, i) => (
              <li key={step.title} className="flex min-w-[118px] flex-1 items-start justify-center gap-1.5 sm:min-w-0 sm:gap-2">
                <div className="flex min-w-[96px] flex-col items-center text-center">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl border ${step.tone}`}>
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="mt-2 text-[11px] font-semibold leading-tight text-slate-700">{step.title}</span>
                  <span className="mt-0.5 text-[10px] leading-tight text-slate-500">{step.sub}</span>
                </div>
                {i < FLOW.length - 1 && <ArrowRight className="mt-3 h-3.5 w-3.5 flex-none text-slate-300" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBand
        title="Build the Future of Connected Healthcare With Telth"
        text="Explore Telth technology, healthcare infrastructure and opportunities to bring connected care closer to your community."
        bg={IMG.techFuture}
        primary={{ label: "Explore Our Technology", to: `${ROUTES.enquiry}?type=Technology%20%2F%20MedPreneur` }}
        secondary={{ label: "Become a Medpreneur", to: `${ROUTES.enquiry}?type=Technology%20%2F%20MedPreneur` }}
      />
    </>
  );
}











