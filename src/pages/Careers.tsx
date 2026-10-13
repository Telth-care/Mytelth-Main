import { BarChart3, Code2, Handshake, Palette, Scale, Stethoscope } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { Container, FeatureCard, FeatureGrid, Reveal, Section, SectionTitle, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const VALUES = [
  { t: "We build technology that serves people not the other way around.", p: "At Telth, your work directly contributes to making healthcare more connected, more accessible and more human for individuals and families around the world." },
  { t: "We are honest about what we know and transparent about what we do not.", p: "We are a team of people who care about the quality of what we build, about the people who use it, and about doing the right thing even when it is harder." },
  { t: "We move thoughtfully with ambition and responsibility in equal measure." },
  { t: "We build diverse, inclusive teams that reflect the communities we serve." },
];

const TEAMS = [
  { icon: Code2, title: "Engineering & Technology", text: "Platform engineers, mobile developers, AI/ML researchers and DevOps professionals building THOS and the Telth applications." },
  { icon: Stethoscope, title: "Clinical & Care", text: "Clinical leads, care managers, health professionals and patient safety specialists ensuring our platform is clinically sound." },
  { icon: Handshake, title: "Growth & Partnerships", text: "Business development, partnerships, market expansion and ecosystem growth across our target geographies." },
  { icon: Palette, title: "Product & Design", text: "Product managers, UX researchers and designers creating human-centered digital experiences." },
  { icon: BarChart3, title: "Data & Research", text: "Data scientists, research analysts and evidence specialists supporting responsible platform development." },
  { icon: Scale, title: "Governance & Compliance", text: "Legal, compliance, data governance and regulatory specialists ensuring we operate responsibly." },
];

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Systems of Care That Feel More Human"
        text="Join a team designing the infrastructure for a more connected, coordinated and human-centered healthcare future — across engineering, clinical, research, partnerships and beyond."
      />

      <Section>
        <Container>
          <Split
            left={<SectionTitle eyebrow="Why Telth | What We Value" title="Work That Matters" />}
            right={
              <ol className="space-y-4">
                {VALUES.map((v, i) => (
                  <Reveal as="li" key={v.t} delay={i * 90} dir="right">
                    <div className="card-hover flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card sm:p-6">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand text-[14px] font-bold text-white">{i + 1}</span>
                      <div>
                        <h3 className="text-[16.5px] font-semibold leading-snug">{v.t}</h3>
                        {v.p && <p className="mt-2 text-[14.5px] leading-[1.7]">{v.p}</p>}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            }
            center={false}
          />
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.waveTealWide}>
        <Container>
          <SectionTitle center light eyebrow="Teams" title="Where You Might Fit" />
          <FeatureGrid cols={3}>
            {TEAMS.map((t, i) => (
              <FeatureCard key={t.title} {...t} delay={(i % 3) * 100} />
            ))}
          </FeatureGrid>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-[24px] border border-slate-100 bg-white p-7 text-center shadow-card sm:p-12">
              <p className="font-open text-[12.5px] font-bold uppercase tracking-[0.12em] text-brand">Equal Opportunity</p>
              <h2 className="mt-2.5 text-[26px] font-semibold sm:text-[32px]">Diversity, Inclusion &amp; Safe Recruitment</h2>
              <p className="mt-5 text-[15px] leading-[1.85]">
                Telth is committed to building a diverse and inclusive team. We do not discriminate on the basis of age, disability, gender, race, religion, sexual orientation or any other protected characteristic. We are also committed to safe recruitment practices — please be cautious of fraudulent job offers purporting to be from Telth. All genuine recruitment will be conducted through official Telth channels.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Interested in Joining Telth?"
        text="Send us a note about your background and how you'd like to contribute to connected healthcare."
        primary={{ label: "Enquiry Careers", to: ROUTES.enquiry }}
      />
    </>
  );
}
