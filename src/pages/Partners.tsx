import { Building2, Cpu, FlaskConical, Landmark, Network, Stethoscope, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { CheckList, Container, IconBadge, Reveal, Section, SectionTitle, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

const CATEGORIES = [
  { icon: Stethoscope, title: "Healthcare Providers", text: "Clinics, hospitals, specialist networks and primary care organizations interested in integrating Telth into their service delivery.", items: ["Platform integration support", "Clinical workflow tools", "Care coordination features", "Analytics and reporting"] },
  { icon: Cpu, title: "Diagnostics, Pharmacy & Devices", text: "Laboratories, diagnostic networks, pharmacy chains and device manufacturers interested in connecting to the Telth ecosystem.", items: ["Ecosystem integration APIs", "Order and result workflows", "Patient consent frameworks", "Partner dashboard access"] },
  { icon: FlaskConical, title: "Research & Education", text: "Academic institutions, clinical research organizations and education providers aligned with Telth's evidence-first approach.", items: ["Research collaboration frameworks", "Data access (consent-based)", "Co-publication opportunities", "Educational content partnerships"] },
  { icon: Landmark, title: "Governments & Communities", text: "National and regional health authorities, large employers and community organizations exploring connected healthcare solutions.", items: ["Government partnership structures", "Population health programm’s", "Community care integration", "Employer wellness solutions"] },
  { icon: Network, title: "Technology & Interoperability", text: "Software companies, EHR vendors, AI developers and interoperability specialists interested in building with or alongside THOS.", items: ["THOS developer documentation", "API and integration frameworks", "Co-development opportunities", "Technical partnership programm’s"] },
  { icon: Building2, title: "Network & Franchise Partners", text: "Organizations interested in deploying and operating Telth community care infrastructure at scale within specific geographies.", items: ["Master partner frameworks", "Operational support", "Training and certification", "Technology and brand licensing"] },
];

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Build Connected Care Together"
        text="Telth grows through trusted collaboration with healthcare providers, technology companies, researchers, governments, employers and mission-aligned organizations."
      />

      <Section>
        <Container>
          <SectionTitle center eyebrow="Partnership Categories" title="How We Partner" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 100}>
                <article className="card-hover flex h-full flex-col rounded-[20px] border border-slate-100 bg-white p-6 shadow-card sm:p-7">
                  <IconBadge icon={c.icon} />
                  <h3 className="mt-5 text-[19px] font-bold leading-snug">{c.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.7] text-muted">{c.text}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[14px] text-body">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" strokeWidth={3} aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="dark" bg={IMG.partnersWave}>
        <Container>
          <Split
            center={false}
            left={
              <SectionTitle
                light eyebrow="How We Evaluate Partners" title="Who We Partner With"
                text="Telth grows through trusted collaboration with healthcare providers, technology companies, researchers, governments, employers and mission-aligned organizations."
              />
            }
            right={
              <Reveal dir="right">
                <div className="rounded-[22px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur sm:p-8">
                  <CheckList
                    light
                    items={[
                      "Alignment with Telth's values of human-centered, evidence-aware healthcare",
                      "Demonstrated commitment to patient safety and data governance",
                      "Relevant expertise, capability or reach within the target market",
                      "Willingness to engage in transparent, collaborative partnership structures",
                    ]}
                  />
                </div>
              </Reveal>
            }
          />
        </Container>
      </Section>

      <CtaBand
        title="Submit a Partnership Enquiry"
        text="Tell us about your organization and how you'd like to contribute to connected healthcare."
        bg={IMG.partnersCta}
        primary={{ label: "Submit a Partnership Enquiry", to: ROUTES.enquiry }}
      />
    </>
  );
}
