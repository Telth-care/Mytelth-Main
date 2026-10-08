import { Blocks, CalendarClock, ClipboardList, FileHeart, KeyRound, MessagesSquare } from "lucide-react";
import ThosVersion from "../components/ThosVersion";
import { ROUTES } from "../lib/links";

export default function ThosV1Page() {
  return (
    <ThosVersion
      eyebrow="THOS V1 — Current Foundation"
      title="Intelligent Connected Care Infrastructure"
      text="A commercially practical digital foundation designed to connect authorised users, workflows, data and services across the Telth ecosystem — the starting point for everything that follows."
      notice={{ tone: "blue", label: "Foundation Stage:", text: "THOS V1 represents the current commercial foundation — a practical, deployable digital infrastructure layer. Capabilities described are designed, not all currently deployed in all markets." }}
      overview={{
        eyebrow: "Overview",
        title: "A Commercially Practical Foundation",
        paragraphs: [
          "THOS V1 is designed to deliver the foundational digital infrastructure that healthcare organisations need to begin connecting their people, services and workflows — without requiring a complete system overhaul.",
          "It is pragmatic, deployable and designed for real-world healthcare settings — where complexity, regulation and clinical culture all matter.",
        ],
        aside: {
          kind: "not",
          title: "What V1 Is Not",
          items: [
            "A replacement for existing clinical systems or EHR infrastructure",
            "An autonomous clinical decision-making system",
            "A general consumer app platform",
            "A claim of advanced AI capabilities beyond what is described",
          ],
        },
      }}
      grid={{
        eyebrow: "Proposed Capabilities",
        title: "What THOS V1 Is Designed to Do",
        items: [
          { icon: KeyRound, title: "Identity & Access Management", text: "Secure, role-based access for patients, clinicians, care managers and administrators across the ecosystem." },
          { icon: CalendarClock, title: "Appointment & Scheduling", text: "Intelligent scheduling tools designed to connect individuals to available care services and providers." },
          { icon: ClipboardList, title: "Care Plan Management", text: "Structured care plans designed to coordinate multi-provider care across community, home and personal care settings." },
          { icon: MessagesSquare, title: "Secure Clinical Messaging", text: "HIPAA-aligned messaging designed to support care team communication within a governed digital environment." },
          { icon: FileHeart, title: "Health Records & Data", text: "A unified patient record designed to be accessible to authorized users across care settings — with consent at its core." },
          { icon: Blocks, title: "Partner & Service Integration", text: "APIs and integration frameworks designed to connect vetted third-party services into the care workflow." },
        ],
      }}
      cta={{
        title: "Discuss THOS V1 for Your Organization",
        text: "Speak with our team about how THOS may serve as the digital foundation for your healthcare organisation or partnership.",
        primary: { label: "Enquiry THOS V1", to: ROUTES.enquiry },
        secondary: { label: "Explore THOS V2", to: ROUTES.thosV2 },
      }}
    />
  );
}
