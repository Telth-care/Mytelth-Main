import { Globe, Network, ShieldCheck, UserCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { Container, FeatureCard, FeatureGrid, Pill, Reveal, Section, SectionTitle, TextLink } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const OBJECTIVES = [
  { icon: Network, title: "Connected Infrastructure", text: "A single digital layer designed to connect authorised users, care workflows, devices and data across the ecosystem." },
  { icon: ShieldCheck, title: "Trust & Governance", text: "Built-in consent management, data governance and security frameworks designed for healthcare compliance." },
  { icon: Globe, title: "Global Scalability", text: "Designed from the outset for multinational, multilingual deployment across diverse healthcare contexts." },
  { icon: UserCheck, title: "Human Accountability", text: "Every automated function is designed with human oversight and clinical accountability as a core principle." },
];

const VERSIONS = [
  { tag: "Foundation", tone: "green", v: "THOS V1", sub: "Intelligent Connected Care", text: "A commercially practical digital foundation designed to connect people, workflows and services across the Telth ecosystem.", to: ROUTES.thosV1 },
  { tag: "Planned", tone: "blue", v: "THOS V2", sub: "Precision Health Intelligence", text: "Building from connected data toward responsible clinical insights with evidence governance and cross-cultural trust in mind.", to: ROUTES.thosV2 },
  { tag: "Future", tone: "violet", v: "THOS V3", sub: "Assisted & Autonomous Operations", text: "Automation where it is safe, useful and accountable proposed for specific care workflow functions only.", to: ROUTES.thosV3 },
  { tag: "Research Stage", tone: "amber", v: "THOS V4", sub: "NeuroAdaptive Intelligence", text: "A research horizon exploring more adaptive, personalised care systems not commercially proposed at this stage.", to: ROUTES.thosV4 },
] as const;

export default function THOS() {
  return (
    <>
      <PageHero
        eyebrow="THOS — Telth Healthcare Operating System"
        title="One Operating Layer. Many Care Journeys"
        text="THOS is the proposed intelligent digital foundation connecting people, healthcare workflows, devices, services and data across the entire Telth ecosystem designed with trust, governance and human accountability at its core."
      />

      <Section>
        <Container>
          <SectionTitle center eyebrow="Design Objectives" title="Core Design Objectives" />
          <FeatureGrid cols={4}>
            {OBJECTIVES.map((o, i) => (
              <FeatureCard key={o.title} {...o} delay={i * 90} />
            ))}
          </FeatureGrid>
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.thosWave}>
        <Container>
          <SectionTitle
            center light eyebrow="Roadmap" title="Four Versions. One Vision."
            text="THOS is designed as a progressive platform each version building responsibly on the last, with clear distinctions between what is available, planned, future, and at research stage."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VERSIONS.map((v, i) => (
              <Reveal key={v.v} delay={i * 100}>
                <article className="card-hover flex h-full flex-col rounded-[20px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
                  <Pill tone={v.tone}>{v.tag}</Pill>
                  <h3 className="mt-4 text-[24px] font-bold !text-white">{v.v}</h3>
                  <p className="mt-1 text-[14px] font-semibold text-sky-300">{v.sub}</p>
                  <p className="mt-3 flex-1 text-[14.5px] leading-[1.7] text-slate-300">{v.text}</p>
                  <div className="mt-5"><TextLink to={v.to} light>Explore</TextLink></div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-open text-[12.5px] font-bold uppercase tracking-[0.12em] text-brand">Human Accountability</p>
              <h2 className="mt-2.5 text-[28px] font-semibold sm:text-[34px]">Technology That Serves People</h2>
              <p className="mt-5 text-[15.5px] leading-[1.85]">
                THOS is designed with a foundational principle: every intelligent function must have a clear line of human accountability. Technology may assist, recommend or automate but clinical responsibility always rests with qualified healthcare professionals. This is not a constraint on innovation; it is the foundation of trustworthy healthcare technology.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Ready to Explore THOS?"
        text="Speak with our team about how THOS may serve as the digital foundation for your healthcare organisation or partnership."
        bg={IMG.thosCta}
        primary={{ label: "Discuss THOS", to: ROUTES.enquiry }}
        secondary={{ label: "Explore V1", to: ROUTES.thosV1 }}
      />
    </>
  );
}
