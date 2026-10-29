import { Compass, ClipboardCheck, Link2, MonitorSmartphone, Building2, HeartPulse, Activity, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { Container, IconBadge, Reveal, Section, SectionTitle, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const SERVICES = [
  { icon: ClipboardCheck, title: "Health Assessment", text: "Structured assessments designed to identify individual health needs, risks and care priorities." },
  { icon: Compass, title: "Care Navigation", text: "Support in finding and accessing the right services, at the right time, in the right setting." },
  { icon: Link2, title: "Care Coordination", text: "Connecting individuals, families and care teams to support continuity across services." },
  { icon: MonitorSmartphone, title: "Digital Access", text: "Platform-enabled access to appointments, records and care team communication." },
];

const CENTRES = [
  { icon: Building2, title: "Telth Eterna AI Medical Centres", text: "Technology-enabled medical centres designed to support high-quality clinical care within communities." },
  { icon: HeartPulse, title: "Telth AI Health Hubs", text: "Accessible community health access points designed to connect people to assessment, monitoring and care navigation services." },
  { icon: Activity, title: "Eterna Longevity Centers", text: "Proposed facilities supporting healthy ageing, preventive care and long-term wellbeing programmes." },
  { icon: Sparkles, title: "Eterna Medical Aesthetic Centers", text: "Integrated medical aesthetic services designed to be delivered within a responsible clinical framework." },
];

export default function CareCommunityScreen() {
  return (
    <>
      <PageHero
        eyebrow="Care @ Community"
        title="Connected Care, Closer to Everyday Life"
        text="Technology-enabled healthcare designed to bring care closer to where people live, work and spend their time — supporting communities rather than replacing clinical expertise."
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
                    Telth Care @ Community is designed to bring healthcare services closer to the places where people live their daily lives — reducing the barriers of distance, time and complexity that can prevent people from accessing the care they need.
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
                    <div className="card-hover h-full rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-brand">
                        <s.icon size={16} strokeWidth={1.8} />
                      </div>
                      <h3 className="mt-3 text-[15px] font-bold">{s.title}</h3>
                      <p className="mt-1.5 text-[12px] leading-[1.55] text-muted">{s.text}</p>
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
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {CENTRES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 110}>
                <article className="card-hover h-full rounded-[14px] bg-white p-5">
                  <IconBadge icon={c.icon} />
                  <div className="mt-3">
                    <h3 className="text-[15px] font-bold">{c.title}</h3>
                    <p className="mt-2 text-[12px] leading-[1.6] text-muted">{c.text}</p>
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
              An individual accesses a Telth community touchpoint — a health hub, partner clinic or the digital platform. From there, they may receive an assessment, be connected to a care plan, and supported with ongoing navigation, monitoring and follow-up across connected services.
            </p>
          </Reveal>
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
