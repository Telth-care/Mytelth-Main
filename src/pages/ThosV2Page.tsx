import { Gauge, LineChart, Target } from "lucide-react";
import ThosVersion from "../components/ThosVersion";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";

export default function ThosV2Page() {
  return (
    <ThosVersion
      eyebrow="THOS V2 — Planned"
      title="From Connected Information to Responsible Insight"
      text="Building from the V1 connected foundation toward responsible clinical intelligence designed with evidence governance, clinical oversight and cross-cultural trust at its core."
      notice={{ tone: "amber", label: "Planned Capability:", text: "THOS V2 represents planned future development. Capabilities described are proposed and subject to research, regulatory review and evidence development before commercial deployment." }}
      overview={{
        eyebrow: "Precision Health Intelligence",
        title: "From Data to Responsible Insight",
        paragraphs: [
          "THOS V2 is designed to build on the connected infrastructure of V1 applying analytical and intelligence layers that may support better clinical decision-making, population health management and personalised care planning.",
          "All intelligence capabilities are designed to support not replace clinical judgement. Human oversight remains central to every insight generated.",
        ],
        aside: {
          kind: "check",
          title: "Evidence & Governance",
          lead: "THOS V2 capabilities will be developed and validated through:",
          items: [
            "Rigorous clinical evidence development",
            "Regulatory engagement in relevant markets",
            "Independent ethics review",
            "Published research and transparent documentation",
            "Cross-cultural validation across Telth's target populations",
          ],
        },
      }}
      grid={{
        eyebrow: "Research Themes",
        title: "THOS V2 Intelligence Areas",
        items: [
          { icon: LineChart, title: "Population Health Analytics", text: "Designed to support analysis of anonymised, consented population health data to identify patterns and inform care planning." },
          { icon: Gauge, title: "Clinical Risk Stratification", text: "Tools designed to help clinicians identify and prioritise individuals who may benefit from earlier intervention or closer monitoring." },
          { icon: Target, title: "Outcome Intelligence", text: "Analytics frameworks designed to support measurement and improvement of care outcomes across the ecosystem." },
        ],
      }}
      cta={{
        title: "Explore a Research Partnership",
        text: "Interested in contributing to the responsible development of THOS V2 capabilities?",
        primary: { label: "Enquiry THOS V2", to: ROUTES.enquiry },
        secondary: { label: "Explore THOS V3", to: ROUTES.thosV3 },
        bg: IMG.ctaAurora,
      }}
    />
  );
}
