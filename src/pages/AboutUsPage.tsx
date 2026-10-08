import { Compass, FlaskConical, Globe, Heart, HeartHandshake, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { Container, Eyebrow, FeatureCard, FeatureGrid, Reveal, Section, SectionTitle } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const PRINCIPLES = [
  { icon: Heart, title: "Human-Centered", text: "Every design decision starts with the person receiving care — their needs, dignity and lived experience." },
  { icon: FlaskConical, title: "Evidence-Aware", text: "Our platform is based on evidence, using responsible language and honestly distinguishing proposed from proven." },
  { icon: HeartHandshake, title: "Collaborative", text: "Telth grows through genuine partnerships with healthcare professionals, organisations and communities." },
  { icon: Globe, title: "Globally Ambitious", text: "Designed from the outset for multinational, multilingual deployment across diverse healthcare contexts." },
  { icon: ShieldCheck, title: "Trustworthy", text: "Data governance, consent, and patient safety are foundational to how we design and operate." },
  { icon: Compass, title: "Responsible Progress", text: "We advance technology thoughtfully — where it is safe, useful and accountable." },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Telth"
        title="Building an intelligent care ecosystem around people — not institutions"
        text="Telth is building a connected, intelligent and human-centered healthcare ecosystem — designed to make care more accessible, coordinated and continuous for individuals, families and communities."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>Our Story</Eyebrow>
                <h2 className="mt-2.5 font-franklin text-[28px] font-semibold leading-[1.25] sm:text-[34px]">
                  Healthcare has always been about people
                  <span className="block">Our technology should be too</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 text-[15.5px] leading-[1.8]">
                  Telth was founded on a simple observation: despite decades of medical progress, the experience of navigating healthcare remains fragmented, disconnected and often overwhelming for individuals and families.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-5 text-[15.5px] leading-[1.8]">
                  We are building the infrastructure to change that — not by replacing the professionals who deliver care, but by connecting the people, information and services that make care work.
                </p>
              </Reveal>
            </div>

            <div className="space-y-6">
              {[
                ["Our Vision", "A world where every person — regardless of geography, language or circumstance — can access connected, coordinated healthcare that supports them across their entire life journey."],
                ["Our Mission", "To build one intelligent ecosystem that connects community-based care, care at home, personal health, digital infrastructure and healthcare services — making care more connected, coordinated and human."],
              ].map(([t, p], i) => (
                <Reveal key={t} dir="right" delay={i * 120}>
                  <div className="card-hover rounded-[20px] border border-slate-100 bg-soft p-6 sm:p-8">
                    <h2 className="font-franklin text-[24px] font-semibold sm:text-[28px]">{t}</h2>
                    <p className="mt-3 text-[15px] leading-[1.8]">{p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.waveTeal}>
        <Container>
          <SectionTitle center light eyebrow="What Makes Telth Different" title="Our Principles" />
          <FeatureGrid cols={3}>
            {PRINCIPLES.map((p, i) => (
              <FeatureCard key={p.title} {...p} delay={(i % 3) * 100} />
            ))}
          </FeatureGrid>
        </Container>
      </Section>

      <CtaBand
        title="Ready to Start a Conversation?"
        text="Whether you are a healthcare organization, partner or individual — we'd love to hear from you."
        primary={{ label: "Start a Conversation", to: ROUTES.enquiry }}
        secondary={{ label: "Explore Our Solutions", to: ROUTES.ecosystem }}
      />
    </>
  );
}
