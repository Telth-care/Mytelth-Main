import { Compass, ClipboardCheck, Link2, MonitorSmartphone, MapPin, ScanSearch, ClipboardList, HeartPulse } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { Container, Eyebrow, IconBadge, Reveal, Section, SectionTitle, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const SERVICES = [
  { icon: ClipboardCheck, title: "Health Assessment", text: "Structured assessments designed to identify individual health needs, risks and care priorities." },
  { icon: Compass, title: "Care Navigation", text: "Support in finding and accessing the right services, at the right time, in the right setting." },
  { icon: Link2, title: "Care Coordination", text: "Connecting individuals, families and care teams to support continuity across services." },
  { icon: MonitorSmartphone, title: "Digital Access", text: "Platform-enabled access to appointments, records and care team communication." },
];

const CENTRES = [
  { img: IMG.techHub, title: "Telth Eterna AI Medical Centres", text: "Technology-enabled medical centres designed to support high-quality clinical care within communities." },
  { img: IMG.techSmarter, title: "Telth AI Health Hubs", text: "Accessible community health access points designed to connect people to assessment, monitoring and care navigation services." },
  { img: IMG.techAgeing, title: "Eterna Longevity Centers", text: "Proposed facilities supporting healthy ageing, preventive care and long-term wellbeing programme’s." },
  { img: IMG.techAesthetics, title: "Eterna Medical Aesthetic Centers", text: "Integrated medical aesthetic services designed to be delivered within a responsible clinical framework." },
];

const JOURNEY = [
  { icon: MapPin, label: "Community touchpoint", sub: "Health hub, partner clinic or digital platform" },
  { icon: ScanSearch, label: "Assessment", sub: "Understand needs and risks" },
  { icon: ClipboardList, label: "Care plan", sub: "Connected to the right services" },
  { icon: HeartPulse, label: "Ongoing support", sub: "Navigation, monitoring and follow-up" },
];

export default function CareCommunityScreen() {
  return (
    <>
      <PageHero
        eyebrow="Care @ Community"
        title="Connected Care, Closer to Everyday Life"
        text="Technology-enabled healthcare designed to bring care closer to where people live, work and spend their time supporting communities rather than replacing clinical expertise."
      />

      <Section>
        <Container>
          <Split
            center={false}
            left={
              <div>
                <SectionTitle eyebrow="Our Approach" title="Care That Begins Where People Are" />
                <Reveal delay={100}>
                  <p className="mt-5 text-[15.5px] leading-[1.8]">
                    Telth Care @ Community is designed to bring healthcare services closer to the places where people live their daily lives reducing the barriers of distance, time and complexity that can prevent people from accessing the care they need.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="mt-4 text-[15.5px] leading-[1.8]">
                    Our community care model supports a range of potential services, designed to work alongside existing healthcare provision rather than in isolation from it.
                  </p>
                </Reveal>
              </div>
            }
            right={
              <div className="grid gap-4 sm:grid-cols-2">
                {SERVICES.map((s, i) => (
                  <Reveal key={s.title} delay={i * 90} dir="zoom">
                    <div className="card-hover h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                      <IconBadge icon={s.icon} />
                      <h3 className="mt-4 text-[17px] font-bold">{s.title}</h3>
                      <p className="mt-2 text-[14px] leading-[1.65] text-muted">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            }
          />
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.communityWave}>
        <Container>
          <SectionTitle center light eyebrow="Our Centres" title="Community Healthcare Infrastructure" />
          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            {CENTRES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 110}>
                <article className="card-hover group h-full overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.06] backdrop-blur">
                  <div className="img-zoom aspect-[16/9] overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[18px] font-bold !text-white">{c.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-[1.7] text-slate-300">{c.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="How It Works" title="How the Journey Works" />
          <Reveal delay={100}>
            <p className="mx-auto mt-5 max-w-3xl text-center text-[15.5px] leading-[1.8]">
              An individual accesses a Telth community touchpoint a health hub, partner clinic or the digital platform. From there, they may receive an assessment, be connected to a care plan, and supported with ongoing navigation, monitoring and follow-up across connected services.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map((j, i) => (
              <Reveal as="li" key={j.label} delay={i * 110}>
                <div className="card-hover relative h-full rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-card">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-[12px] font-bold text-white">Step {i + 1}</span>
                  <IconBadge icon={j.icon} className="mx-auto" />
                  <h3 className="mt-4 text-[16.5px] font-bold">{j.label}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-[1.6] text-muted">{j.sub}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBand
        title="Explore Community Healthcare Partnerships"
        text="Interested in bringing Telth community care services to your area or organisation?"
        bg={IMG.communityCta}
        primary={{ label: "Explore a Research Partnership", to: ROUTES.rd }}
        secondary={{ label: "Contact Us", to: ROUTES.enquiry }}
      />
    </>
  );
}
