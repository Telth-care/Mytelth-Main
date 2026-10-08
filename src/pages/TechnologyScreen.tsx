import { ArrowRight, Check } from "lucide-react";
import CtaBand from "../components/CtaBand";
import { Btn, Container, Eyebrow, Reveal, Section, SectionTitle } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const STATS = [
  { v: "4", a: "Core", b: "Technology Pillars" },
  { v: "6", a: "Real-World", b: "Care Models" },
  { v: "360°", a: "", b: "Connected Health View" },
  { v: "1", a: "Unified", b: "Ecosystem" },
];

const PILLARS = [
  { tag: "G Med ID", title: "Your Health. Connected Over Time.", text: "A secure digital health identity designed to keep your health information connected across your healthcare journey.", points: ["Longitudinal health record", "Access your health information when needed", "Patient-controlled data"], img: IMG.techGmed },
  { tag: "TWBAN & Monitoring Devices", title: "Connected Devices. Better Health Awareness.", text: "Telth connects compatible health-monitoring devices to help capture meaningful health information and support continuous care.", points: ["Diabetes monitoring", "Heart and vital-sign monitoring", "Connected health devices"], img: IMG.techTwban },
  { tag: "P³DSC", title: "Turning Health Data Into Meaningful Care.", text: "Telth's intelligent data and workflow technology helps bring together health information, measurements and care workflows to support more informed healthcare.", chips: ["Predictive", "Precise", "Point-of-Care", "Data-Driven", "Smart Care"], img: IMG.techP3dsc },
  { tag: "Telth Hubs & Kiosks", title: "Healthcare Technology, Where People Need It.", text: "Telth brings connected healthcare technology into communities through AI Kiosks, Health Hubs and specialised care facilities.", chips: ["Telth AI Kiosk", "Basic AI Health Hub", "Advanced AI Health Hub", "AI Multispecialty Hub", "Telth Diagnostic Hub"], img: IMG.techHubs },
];

const DEPLOY = [
  { tag: "Telth AI Kiosk", title: "Connected Screening, Wherever People Need It.", text: "Compact technology designed to bring accessible health screening closer to communities.", img: IMG.techKiosk },
  { tag: "Care@Home", title: "Connected Care, Delivered at Home.", text: "Technology and Care Manager support that help extend healthcare beyond traditional facilities and into the home.", img: IMG.techHome },
  { tag: "Telth AI Health Hubs", title: "A Smarter Way to Bring Care Together.", text: "Connected healthcare environments combining technology, health examination and care services.", img: IMG.techSmarter },
  { tag: "Multispecialty Hubs", title: "More Healthcare Under One Roof.", text: "Connected facilities designed to bring multiple healthcare services and specialists closer to the community.", img: IMG.techHub },
  { tag: "Eterna Medical Aesthetics", title: "Technology-Enabled Aesthetics & Wellness.", text: "Modern technology-supported aesthetics and wellness services delivered by appropriately qualified professionals.", img: IMG.techAesthetics },
  { tag: "Eterna Longevity Centers", title: "Technology for Healthier Ageing.", text: "Connected preventive, wellness and healthy-ageing experiences designed around long-term wellbeing.", img: IMG.techAgeing },
];

const FLOW = [
  ["G Med ID", "Health Information"],
  ["Connected Devices", "Health Measurements"],
  ["P³DSC™", "Intelligence & Workflows"],
  ["AI Kiosks & Health Hubs", "Healthcare Infrastructure"],
  ["Care@Home & Community", "Real-World Delivery"],
  ["Continuous Care", "Connected Healthcare"],
];

export default function TechnologyScreen() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] animate-float rounded-full bg-gradient-to-br from-blue-200/60 to-cyan-100/40 blur-2xl" />
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
            </Reveal>
          </div>
          <Reveal dir="zoom" delay={150}>
            <div className="img-zoom overflow-hidden rounded-[24px] shadow-lift">
              <img src={IMG.techHero} alt="Telth AI kiosk and connected health devices" className="aspect-[16/10] w-full object-cover" />
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
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="Connected Technology" title="Connected Technology" text="Telth connects health information, monitoring devices and intelligent technology to support a more continuous healthcare experience." />
          <div className="mt-14 space-y-16 sm:space-y-20">
            {PILLARS.map((p, i) => (
              <div key={p.tag} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <Reveal dir={i % 2 ? "right" : "left"} className={i % 2 ? "lg:order-2" : ""}>
                  <div className="img-zoom overflow-hidden rounded-[22px] shadow-lift">
                    <img src={p.img} alt={p.tag} loading="lazy" className="aspect-[1600/608] w-full object-cover" />
                  </div>
                </Reveal>
                <Reveal dir={i % 2 ? "left" : "right"} delay={100}>
                  <span className="inline-block rounded-full bg-brand/10 px-3.5 py-1 text-[12.5px] font-bold text-brand">{p.tag}</span>
                  <h3 className="mt-4 text-[24px] font-semibold leading-snug sm:text-[28px]">{p.title}</h3>
                  <p className="mt-3.5 text-[15.5px] leading-[1.75]">{p.text}</p>
                  {p.points && (
                    <ul className="mt-5 space-y-2.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5 text-[15px] text-ink">
                          <Check className="h-4 w-4 text-emerald-600" strokeWidth={3} aria-hidden="true" /> {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.chips && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.chips.map((c) => (
                        <span key={c} className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-semibold text-slate-700 transition-colors hover:border-brand hover:text-brand">{c}</span>
                      ))}
                    </div>
                  )}
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* real-world deployment */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Real-World Deployment" title="Bringing Telth Technology Into Communities" text="Telth provides the technology, infrastructure and connected-care models that enable entrepreneurs and healthcare partners to bring modern healthcare closer to the communities they serve." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DEPLOY.map((d, i) => (
              <Reveal key={d.tag} delay={(i % 3) * 100}>
                <article className="card-hover h-full overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-card">
                  <div className="img-zoom aspect-[1395/800] overflow-hidden">
                    <img src={d.img} alt={d.tag} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-[12.5px] font-bold uppercase tracking-wide text-brand">{d.tag}</p>
                    <h3 className="mt-2 text-[18px] font-bold leading-snug">{d.title}</h3>
                    <p className="mt-2.5 text-[14.5px] leading-[1.7] text-muted">{d.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* technology → care */}
      <Section tone="dark" bg={IMG.waveTealWide}>
        <Container>
          <SectionTitle center light title="From Technology to Real-World Care" text="Telth technology is designed to move beyond screens and devices — connecting people, healthcare professionals, Care Managers and communities through practical care environments." />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {FLOW.map(([a, b], i) => (
              <Reveal as="li" key={a} delay={i * 90}>
                <div className="card-hover relative h-full rounded-2xl border border-white/10 bg-white/[0.07] p-5 text-center backdrop-blur">
                  <p className="font-franklin text-[15px] font-bold !text-white">{a}</p>
                  <ArrowRight className="mx-auto my-2 h-4 w-4 rotate-90 text-sky-300" aria-hidden="true" />
                  <p className="text-[13.5px] text-slate-300">{b}</p>
                </div>
              </Reveal>
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
