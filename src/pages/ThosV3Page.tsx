import { BellRing, CalendarClock, ClipboardList, Radar } from "lucide-react";
import ThosVersion from "../components/ThosVersion";
import { ROUTES } from "../lib/links";

export default function ThosV3Page() {
  return (
    <ThosVersion
      eyebrow="THOS V3 — Future"
      title="Automation Where It Is Safe, Useful and Accountable"
      text="Proposed automation capabilities for specific healthcare workflows designed only for contexts where autonomy has been validated as safe, useful and subject to clear human accountability."
      notice={{ tone: "violet", label: "Future Capability:", text: "THOS V3 describes future, not current, capabilities. These are not commercially available today. Deployment will be subject to clinical validation, regulatory approval and human oversight frameworks in each relevant market." }}
      overview={{
        eyebrow: "Potential Applications",
        title: "Purposeful Automation",
        paragraphs: [
          "THOS V3 explores automation only in contexts where it has been rigorously validated, where the benefits clearly outweigh the risks, and where human accountability structures are in place and functioning.",
          "This is not a general automation platform. It is a carefully scoped set of proposed capabilities, designed to reduce the administrative burden on healthcare professionals not to substitute for their clinical judgement.",
        ],
      }}
      grid={{
        eyebrow: "Proposed Capabilities",
        title: "Where Automation May Help",
        cols: 2,
        items: [
          { icon: BellRing, title: "Intelligent Care Alerts", text: "Automated flagging of clinical data anomalies designed to assist care teams in prioritising responses, with human confirmation required." },
          { icon: ClipboardList, title: "Care Plan Automation", text: "Workflow automation designed to reduce administrative burden in care plan management always within defined clinical parameters." },
          { icon: Radar, title: "Monitoring Response", text: "Proposed automated responses to remote monitoring data within pre-approved clinical pathways and escalation protocols." },
          { icon: CalendarClock, title: "Scheduling Optimisation", text: "Intelligent scheduling assistance designed to improve care team efficiency and reduce patient waiting times." },
        ],
      }}
      principles={{
        eyebrow: "Operating Principles",
        title: "Non-Negotiable Principles for V3",
        items: [
          "Every automated function operates within explicitly approved parameters",
          "Clinical accountability remains with qualified healthcare professionals at all times",
          "Individuals have the right to understand and challenge any automated decision affecting their care",
          "All autonomous functions are subject to ongoing monitoring, audit and review",
          "Systems may be overridden or disabled by authorised clinical staff without restriction",
        ],
      }}
      cta={{
        title: "Discuss THOS V3",
        text: "Interested in exploring the responsible development of THOS V3 automation capabilities?",
        primary: { label: "Enquiry THOS V3", to: ROUTES.enquiry },
        secondary: { label: "Explore THOS V4", to: ROUTES.thosV4 },
      }}
    />
  );
}
