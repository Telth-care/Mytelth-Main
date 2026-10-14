import { Activity, Ear, Fingerprint, HeartPulse, ShieldCheck, Sprout, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { CheckList, Container, FeatureCard, FeatureGrid, Reveal, Section, SectionTitle, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const PROGRAMMES = [
  { icon: ShieldCheck, title: "Preventive Health", text: "Designed to support individuals in identifying and managing health risks before they become clinical concerns." },
  { icon: Activity, title: "Connected Monitoring", text: "Personalized health tracking via connected devices and apps supports awareness and clinical follow-up." },
  { icon: HeartPulse, title: "Long-term Condition Support", text: "Program supports individuals managing conditions, promoting adherence, self-management, and care coordination." },
  { icon: Ear, title: "Hearing & Rehabilitation", text: "Specialist pathways designed to support hearing health and rehabilitation services within a connected care framework." },
  { icon: Sprout, title: "Wellbeing & Healthy Ageing", text: "Integrated wellbeing programm’s designed around physical, mental and social health supporting people across the lifespan." },
  { icon: Fingerprint, title: "Responsible Personalization", text: "All personalisation features are designed to be consent-based, evidence-aware and subject to appropriate clinical governance." },
];

export default function PersonalCare() {
  return (
    <>
      <PageHero
        eyebrow="Personal Care"
        title="Health Support Shaped Around the Individual"
        text="Personalized prevention, wellness and long-term health programme’s designed around individual assessment, monitoring and healthy ageing always with human oversight at the center."
      />

      <Section>
        <Container>
          <Split
            center={false}
            left={
              <div>
                <SectionTitle eyebrow="Our Approach | Responsible Personalisation" title="Health That Fits the Individual" />
                <Reveal delay={100}>
                  <p className="mt-5 text-[15.5px] leading-[1.8]">
                    Every individual has a unique health story shaped by their genetics, lifestyle, environment and aspirations. Telth Personal Care is designed to support that uniqueness through tools that are personalised, evidence-aware and grounded in responsible clinical practice.
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="mt-4 text-[15.5px] leading-[1.8]">
                    Our approach does not replace clinical care. It is designed to complement it helping individuals stay more informed, engaged and connected to the support they need.
                  </p>
                </Reveal>
              </div>
            }
            right={
              <Reveal dir="right">
                <div className="rounded-[22px] border border-slate-100 bg-soft p-6 sm:p-8">
                  <h3 className="mb-5 text-[18px] font-semibold">Telth is committed to responsible personalisation. This means:</h3>
                  <CheckList
                    items={[
                      "Consent is required for all personal health data use",
                      "Personalised insights are designed to inform not replace clinical judgement",
                      "Individuals may modify or withdraw from programmes at any time",
                      "All health information is handled in accordance with applicable data protection and healthcare regulations",
                    ]}
                  />
                </div>
              </Reveal>
            }
          />
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.waveTeal}>
        <Container>
          <SectionTitle center light eyebrow="What We Offer" title="Personal Health Programm Areas" />
          <FeatureGrid cols={3}>
            {PROGRAMMES.map((p, i) => (
              <FeatureCard key={p.title} {...p} delay={(i % 3) * 100} />
            ))}
          </FeatureGrid>
        </Container>
      </Section>

      <CtaBand
        title="Explore Personal Care Programm’s"
        text="Speak with our team about how Telth Personal Care may support your organisation's approach to individual health and wellbeing."
        primary={{ label: "Explore Personal Care", to: ROUTES.enquiry }}
        secondary={{ label: "Learn About THOS", to: ROUTES.thos }}
      />
    </>
  );
}
