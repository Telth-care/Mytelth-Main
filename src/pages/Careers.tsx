import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { Cpu, Stethoscope, Globe2, PanelsTopLeft, FlaskConical, Scale } from "lucide-react";
import { Container, Eyebrow, Reveal, Section, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const VALUES = [
  "We build technology that serves people.",
  "We are honest about what we know and transparent about what we do not.",
  "We move thoughtfully with ambition and responsibility in equal measure.",
  "We build diverse, inclusive teams that reflect the communities we serve.",
];

const TEAMS = [
  { icon: Cpu, title: "Engineering & Technology", text: "Platform engineers, mobile developers, AI/ML researchers and DevOps professionals building THOS and the Telth applications." },
  { icon: Stethoscope, title: "Clinical & Care", text: "Clinical leads, care managers, health professionals and patient safety specialists ensuring our platform is clinically sound." },
  { icon: Globe2, title: "Growth & Partnerships", text: "Business development, partnerships, market expansion and ecosystem growth across our target geographies." },
  { icon: PanelsTopLeft, title: "Product & Design", text: "Product managers, UX researchers and designers creating human-centered digital experiences." },
  { icon: FlaskConical, title: "Data & Research", text: "Data scientists, research analysts and evidence specialists supporting responsible platform development." },
  { icon: Scale, title: "Governance & Compliance", text: "Legal, compliance, data governance and regulatory specialists ensuring we operate responsibly." },
];

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Systems of Care That Feel More Human"
        text="Join a team designing the infrastructure for a more connected, coordinated and human-centered healthcare future across engineering, clinical, research, partnerships and beyond."
        contentClassName="max-w-[1200px]"
        titleClassName="lg:text-[46px]"
      />

      <Section>
        <Container>
          <Split
            left={
              <div className="max-w-xl">
                <Eyebrow>Why Telth</Eyebrow>
                <p className="mt-8 text-[15px] leading-[1.8] text-body sm:text-[16px]">
                  At Telth, your work directly contributes to making healthcare more connected, more accessible and more human for individuals and families around the world.
                </p>
                <p className="mt-6 text-[15px] leading-[1.8] text-body sm:text-[16px]">
                  We are a team of people who care — about the quality of what we build, about the people who use it, and about doing the right thing even when it is harder.
                </p>
              </div>
            }
            right={
              <div>
                <Eyebrow>What We Value</Eyebrow>
                <ol className="mt-5 space-y-2.5">
                  {VALUES.map((value, i) => (
                    <Reveal as="li" key={value} delay={i * 90} dir="right">
                      <div className="flex min-h-[58px] items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 sm:px-5">
                        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-[13px] font-bold text-white">{i + 1}</span>
                        <p className="text-[14px] leading-[1.55] text-body sm:text-[15px]">{value}</p>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </div>
            }
            center={false}
          />
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.waveTealWide} className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow light center>Teams</Eyebrow>
            <h2 className="mt-3 font-franklin text-[28px] font-semibold leading-tight !text-white sm:text-[32px]">Where You Might Fit</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAMS.map(({ icon: Icon, title, text }) => (
              <Reveal key={title} className="h-full">
                <article className="h-full rounded-2xl border border-white/15 bg-white p-5 text-slate-900 shadow-sm sm:p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={18} /></span>
                  <h3 className="mt-4 font-franklin text-[15px] font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-[12px] leading-[1.65] text-slate-500">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[820px] py-4 text-center sm:py-8">
              <Eyebrow center>Equal Opportunity</Eyebrow>
              <h2 className="mt-3 font-franklin text-[28px] font-semibold leading-tight text-ink sm:text-[32px]">Diversity, Inclusion &amp; Safe Recruitment</h2>
              <p className="mt-4 text-[14px] leading-[1.8] text-body sm:text-[15px]">
                Telth is committed to building a diverse and inclusive team. We do not discriminate on the basis of age, disability, gender, race, religion, sexual orientation or any other protected characteristic. We are also committed to safe recruitment practices. Please be cautious of fraudulent job offers purporting to be from Telth.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Interested in Joining Telth?"
        text="Send us a note about your background and how you'd like to contribute to connected healthcare."
        bg={IMG.careersCta}
        primary={{ label: "Join with us", to: `${ROUTES.enquiry}?type=Careers` }}
      />
    </>
  );
}
