import { Brain, Globe2, SlidersHorizontal, Users } from "lucide-react";
import ThosVersion from "../components/ThosVersion";
import { ROUTES } from "../lib/links";

export default function ThosV4Page() {
  return (
    <ThosVersion
      eyebrow="THOS V4 — Research Stage"
      title="A Research Horizon for More Adaptive Care"
      text="THOS V4 represents a long-term research horizon not a commercially proposed product. All concepts described are at an early research stage and are subject to rigorous ethics review, evidence development and responsible governance before any commercial consideration."
      notice={{ tone: "amber", label: "Research Stage Not Commercially Proposed:", text: "All THOS V4 concepts are at an early research and exploration stage. Nothing described here is currently available, commercially proposed or near-term planned. Telth is committed to responsible, evidence-grounded development of all advanced capabilities." }}
      overview={{
        eyebrow: "Research Horizon",
        title: "Thinking Beyond Current Limits",
        paragraphs: [
          "THOS V4 explores questions at the boundary of current healthcare technology not to rush toward them, but to understand the ethical, clinical and societal considerations that must be worked through responsibly before any advanced capability is considered for deployment.",
        ],
        aside: {
          kind: "check",
          title: "Ethical Commitments",
          items: [
            "No V4 capability will be deployed without independent ethics review",
            "All research will be conducted with full informed consent",
            "Research findings will be published and made available for peer review",
            "Human dignity and autonomy are non-negotiable in all research contexts",
            "We will not pursue capabilities that cannot be governed responsibly",
          ],
        },
      }}
      grid={{
        eyebrow: "Exploration Areas",
        title: "THOS V4 Research Themes",
        cols: 2,
        items: [
          { icon: Brain, title: "NeuroEquivalence Research", text: "Research exploring if computational systems can model human cognitive processes related to care. At a research stage only." },
          { icon: SlidersHorizontal, title: "Adaptive Care Personalisation", text: "Research systems that adapt care based on individual response, with ethics and clinical validation." },
          { icon: Globe2, title: "Cross-cultural Health Intelligence", text: "Research themes addressing how health data and insights may be applied responsibly across diverse populations and contexts." },
          { icon: Users, title: "Human-AI Collaboration Models", text: "Research how healthcare professionals and intelligent systems collaborate effectively, keeping human agency central." },
        ],
      }}
      closing="These are not products. They are research questions pursued with intellectual honesty, ethical rigour and a deep respect for the people at the centre of care."
      cta={{
        title: "Discuss Research Collaboration",
        text: "Interested in contributing to the responsible long-term research agenda for THOS V4?",
        primary: { label: "Enquiry THOS V4", to: ROUTES.enquiry },
        secondary: { label: "Back to THOS", to: ROUTES.thos },
      }}
    />
  );
}
