import { BarChart3, Bot, Globe2, Leaf, Link2, LockKeyhole } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { Container, Eyebrow, FeatureCard, FeatureGrid, Reveal, Section, SectionTitle, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";
import collaborationBackground from "../assets/image 57.png";

const PATH = [
  "Identify research question with clinical relevance",
  "Ethics review and governance approval",
  "Study design with independent methodology review",
  "Data collection with full consent frameworks",
  "Analysis and peer review",
  "Publication and transparent reporting",
  "Clinical translation where evidence supports it",
];

const THEMES = [
  { icon: Link2, title: "Connected Care Systems", text: "Research into the design and effectiveness of integrated, multi-provider care systems for diverse populations." },
  { icon: Bot, title: "Responsible AI in Healthcare", text: "Investigation of appropriate, safe and accountable applications of AI in clinical and care management contexts." },
  { icon: Globe2, title: "Global Health Equity", text: "Research addressing how connected healthcare technology may reduce — rather than amplify — inequalities in access to care." },
  { icon: BarChart3, title: "Outcomes Measurement", text: "Developing rigorous methodologies for measuring the real-world impact of digital health interventions on patient outcomes." },
  { icon: LockKeyhole, title: "Data Governance", text: "Research into consent models, data rights and governance frameworks appropriate for multi-stakeholder health ecosystems." },
  { icon: Leaf, title: "Prevention & Healthy Ageing", text: "Investigation of technology-enabled preventive care approaches for population-level health improvement." },
];

export default function OurRD() {
  return (
    <>
      <PageHero
        eyebrow="Research & Innovation"
        title="Evidence First. Responsible Progress. Real-world Relevance"
        text="Telth's research and innovation programme is designed to ground our platform in evidence, advance responsible healthcare technology, and contribute to the global body of knowledge on connected, human-centered care."
      />

      <Section>
        <Container>
          <Split
            center={false}
            left={
              <div className="space-y-5">
                <Eyebrow>Our Approach</Eyebrow>
                <Reveal delay={100}>
                  <p className="text-[15.5px] leading-[1.8]">
                    Telth's research is honest, ethical, and focused on real-world results. We don't do research to prove what we already believe. Instead, we want to find out what works, who it helps, and when it works best.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="text-[15.5px] leading-[1.8]">
                    Research findings, including findings that challenge our assumptions, are published and made available for independent peer review.
                  </p>
                </Reveal>
              </div>
            }
            right={
              <div>
                <Eyebrow>Development Pathway</Eyebrow>
                <ol className="mt-4 space-y-2.5">
                  {PATH.map((item, i) => <Reveal as="li" key={item} delay={i * 65} dir="right"><div className="flex min-h-[50px] items-center gap-3 rounded-xl border border-slate-100 bg-[#f7f9fc] px-4 py-2.5 sm:px-4"><span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#2878df] to-[#13b99a] text-[12px] font-bold text-white">{i + 1}</span><span className="font-open text-[13px] leading-[1.5] text-slate-600 sm:text-[13.5px]">{item}</span></div></Reveal>)}
                </ol>
              </div>
            }
          />
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.waveTealWide}>
        <Container>
          <SectionTitle center light eyebrow="Research Themes" title="Areas of Research Focus" />
          <FeatureGrid cols={3}>
            {THEMES.map((t, i) => (
              <FeatureCard key={t.title} {...t} delay={(i % 3) * 100} />
            ))}
          </FeatureGrid>
        </Container>
      </Section>

      <Section tone="soft" className="relative isolate overflow-hidden">
        <img src={collaborationBackground} alt="" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-80" />
        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-open text-[12.5px] font-bold uppercase tracking-[0.12em] text-brand">Participation &amp; Transparency</p>
              <h2 className="mt-2.5 text-[28px] font-semibold sm:text-[34px]">Open to Collaborate</h2>
              <p className="mt-5 text-[15.5px] leading-[1.85]">
                We welcome research partnerships with academic institutions, clinical organisations and independent researchers who share our commitment to evidence-grounded, ethical healthcare innovation. Research participation is always voluntary, consent-based and subject to independent ethics oversight.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Propose a Research Collaboration"
        text="Interested in contributing to responsible healthcare innovation with Telth?"
        bg={IMG.rdCta}
        primary={{ label: "Propose a Research Collaboration", to: ROUTES.enquiry }}
        secondary={{ label: "Explore THOS", to: ROUTES.thos }}
      />
    </>
  );
}
