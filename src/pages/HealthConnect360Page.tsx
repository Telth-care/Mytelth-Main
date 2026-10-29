import { useState } from "react";
import { Activity, ArrowRight, BrainCircuit, FileText, HeartPulse, House, Link2, MonitorSmartphone, Plus } from "lucide-react";
import { Btn, Container, Eyebrow, Reveal, Section, SectionTitle } from "../components/ui";
import TechnologyEnquiryForm from "../components/TechnologyEnquiryForm";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";
import cardioDevice from "../assets/Group 596.png";
import diaDevice from "../assets/Group 597.png";
import vitalDevice from "../assets/Group 598.png";
import respiraDevice from "../assets/Group 600.png";
import healthConnectDashboard from "../assets/connect360.png";
import humanMonitoringImage from "../assets/human.png";

const LAYERS = [
  { icon: Link2, name: "Connect", text: "Bring compatible ECG, glucose, blood-pressure, vital-sign and respiratory measurements into a unified patient record through validated device integrations." },
  { icon: Activity, name: "Monitor", text: "Review longitudinal trends, configurable thresholds, device connectivity and patient-reported information in patient and clinician interfaces." },
  { icon: BrainCircuit, name: "Assist with AI", text: "Support prioritization, summaries and review workflows where models are validated for their intended use. Clinical decisions remain with qualified professionals." },
  { icon: HeartPulse, name: "Coordinate", text: "Route relevant findings to the assigned care manager, physician or care team using defined escalation and acknowledgment workflows." },
  { icon: House, name: "Extend Care@Home", text: "Support chronic-care follow-up, remote monitoring programs and continuity between home, clinic, kiosk and hub." },
  { icon: FileText, name: "Document", text: "Associate monitoring reports with G Med ID and governed records on RootCloud, subject to patient consent and role-based access." },
];

const ARCH = [
  ["01", "CAPTURE", "HealthGuard AI devices, ECG, CGM, BP, vital and respiratory device inputs."],
  ["02", "CONNECT", "THOS Health Connect OS device adapters, data normalization and secure transmission."],
  ["03", "ORGANIZE", "RootCloud + G Med ID identity linkage, permissions, longitudinal records and audit logs."],
  ["04", "REVIEW", "HealthConnect 360 patient, care manager and clinician dashboards with configured alerts."],
  ["05", "RESPOND", "Care@Home follow-up, clinical review, escalation and care documentation."],
];

const DEVICE_FAMILY = [
  { name: "CardioGuard AI™", type: "Cardiac monitoring", text: "Proposed chest-worn cardiac monitoring for ECG and rhythm review, subject to device specifications.", image: cardioDevice },
  { name: "DiaGuard AI™", type: "Glucose monitoring", text: "Proposed CGM integration for glucose trends, reporting and diabetes care-team follow-up.", image: diaDevice },
  { name: "BPGuard AI™", type: "Blood pressure", text: "Connected blood-pressure readings for review in a longitudinal monitoring view.", image: vitalDevice },
  { name: "VitalGuard AI™", type: "Multiparameter", text: "Multiple vital-sign inputs assembled into a unified longitudinal monitoring view.", image: vitalDevice },
  { name: "RespiraGuard AI™", type: "Respiratory", text: "Respiratory monitoring integrations where supported by the selected device and care pathway.", image: respiraDevice },
];

const REQUIREMENT_GROUPS = {
  Platform: [
    ["Device ingestion", "API/SDK/Bluetooth gateway integrations", "Confirm for each device model"],
    ["Patient identity", "G Med ID linkage", "Requires implementation and consent workflow"],
    ["Clinical records", "RootCloud record synchronization", "Verify API, retention and audit requirements"],
    ["Care management", "Role-based worklists and follow-up tasks", "Workflow design to be tested"],
    ["AI assistance", "Summaries and configurable review flags", "Model-specific validation required"],
    ["Interoperability", "FHIR/HL7 where applicable", "Interface conformance to be verified"],
  ],
  "Cardiac Patch": [
    ["ECG capture", "Waveform capture using the confirmed lead configuration", "Hardware and lead configuration to be confirmed"],
    ["Heart-rate trends", "Longitudinal heart-rate and rhythm trend review", "Confirm measurement and reporting specifications"],
    ["Device ingestion", "Transfer through a validated device integration", "Confirm API, SDK or gateway for each model"],
    ["Wearability", "Chest-worn patch concept", "Final size, wear duration and adhesive safety to be verified"],
    ["Clinical review", "Reports routed to authorized clinicians and care teams", "Clinical workflow and responsibilities to be defined"],
    ["Alerts and escalation", "Configured findings routed for review", "Thresholds and response times require clinical governance"],
  ],
  "Security & Clinical": [
    ["Patient consent", "Consent-aware data collection and sharing", "Consent workflow and withdrawal process to be implemented"],
    ["Access control", "Role-based access for patients and care teams", "Roles and permissions to be configured and reviewed"],
    ["Data protection", "Secure transmission and governed records", "Security controls and retention requirements to be verified"],
    ["Clinical oversight", "AI-assisted review with clinician oversight", "Model-specific validation and intended use required"],
    ["Interoperability", "FHIR/HL7 interfaces where applicable", "Interface conformance to be verified"],
    ["Regulatory status", "Device and software claims assessed individually", "Manufacturer documentation and local requirements required"],
  ],
} as const;

export default function HealthConnect360Page() {
  const [activeRequirementGroup, setActiveRequirementGroup] = useState<keyof typeof REQUIREMENT_GROUPS>("Platform");
  const requirements = REQUIREMENT_GROUPS[activeRequirementGroup];
  return <>
    <Section className="bg-white py-12 sm:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr] lg:gap-16">
          <Reveal><Eyebrow>TELTH HealthGuard AI · Powered by THOS</Eyebrow><h1 className="mt-4 font-franklin text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">HealthConnect 360</h1><p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">One connected-care experience for wearable health devices, patients, care managers, physicians, and healthcare organizations—designed to bring monitoring insights into coordinated care.</p><p className="mt-4 max-w-xl text-[11px] leading-5 text-blue-600">Platform and device features shown are proposed capabilities, subject to hardware integration, clinical validation and local regulatory requirements.</p><div className="mt-5"><Btn to={`${ROUTES.enquiry}?type=HealthConnect%20360`}>Request a partnership discussion</Btn></div></Reveal>
          <Reveal dir="right"><img src={healthConnectDashboard} alt="HealthConnect 360 care-team monitoring dashboard" loading="eager" className="w-full object-contain" /></Reveal>
        </div>
        <div className="mt-12 grid gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-center text-[11px] text-slate-600 sm:grid-cols-4">{["Wearables & Devices", "Thos Health Connect OS", "Rootcloud · G MED ID", "Care@Home · Physician"].map((label) => <span key={label}>{label}</span>)}</div>
      </Container>
    </Section>

    <Section className="bg-white">
      <Container><SectionTitle center eyebrow="The Connected-Care Layer" title="From health signals to a coordinated response." text="HealthConnect 360 is the proposed remote monitoring and care coordination experience. TELTH HealthGuard AI identifies the wearable-device family; THOS Health Connect OS provides the software and integration layer." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{LAYERS.map(({ icon: Icon, name, text }) => <Reveal key={name} className="h-full"><article className="h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600"><Icon size={20}/></span><h3 className="mt-3 font-franklin text-[16px] font-semibold text-slate-800">{name}</h3><p className="mt-2 text-[12px] leading-[1.7] text-slate-600">{text}</p></article></Reveal>)}</div>
      </Container>
    </Section>

    <Section className="bg-slate-50">
      <Container><SectionTitle center eyebrow="THOS Operating Architecture" title="One operating system. Multiple points of care." text="A modular architecture designed to link patient devices with TELTH’s clinical and service ecosystem." />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{ARCH.map(([n, title, text]) => <Reveal key={n}><li className="relative h-full rounded-xl border border-blue-100 bg-white px-4 pb-4 pt-6 text-center"><span className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow">{n}</span><h3 className="font-franklin text-[12px] font-bold text-slate-800">{title}</h3><p className="mt-2 text-[10px] leading-[1.55] text-slate-500">{text}</p></li></Reveal>)}</ol>
      </Container>
    </Section>

    <Section>
      <Container><SectionTitle center eyebrow="TELTH HealthGuard AI Family" title="Purpose-built monitoring. One connected experience." text="Distinct device categories serve different clinical use cases. Product capabilities and approvals must be confirmed individually." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">{DEVICE_FAMILY.map((device) => <Reveal key={device.name}><article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_8px_rgba(15,23,42,.04)]"><div className="flex aspect-[2.05/1] items-center justify-center overflow-hidden border-b border-slate-100 bg-white p-4 sm:p-5"><img src={device.image} alt={device.name} loading="lazy" className="h-full w-full scale-[1.12] object-contain"/></div><div className="min-h-32 p-5 sm:p-6"><div className="flex flex-wrap items-center gap-2.5"><h3 className="text-[15px] font-semibold text-blue-700 sm:text-base">{device.name}</h3><span className="rounded-full border border-blue-300 px-3 py-1 text-[9px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[10px]">{device.type}</span></div><p className="mt-3 text-[13px] leading-[1.7] text-slate-600 sm:text-[14px]">{device.text}</p></div></article></Reveal>)}</div>
        <p className="mx-auto mt-5 max-w-4xl text-center text-[10px] leading-5 text-slate-500">Naming policy: HealthGuard AI is the wearable family; HealthConnect 360 is the patient and clinical monitoring experience; THOS is the operating platform. These capabilities remain subject to device selection, validation and approvals.</p>
      </Container>
    </Section>

    <Section className="bg-white">
      <Container><SectionTitle center eyebrow="Featured Device · CardioGuard AI" title="Every Beat Matters." text="A proposed compact, chest-worn monitoring device designed for placement in the clinically appropriate chest position—not an arm-worn glucose sensor." />
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12"><Reveal><div className="space-y-5">{[["ECG-based monitoring concept", "ECG waveform capture and heart-rate/rhythm trend review, dependent on confirmed hardware and lead configuration."], ["AI-assisted interpretation workflow", "Potential flagging and prioritization of clinically validated findings, with clinician oversight."], ["Connected clinical review", "Transfer reports to authorized clinicians and Care@Home teams using THOS."], ["Wearability by design", "Miniature chest-patch concept with final size, wear duration and adhesive safety to be verified."]].map(([title, text]) => <div key={title}><h3 className="font-franklin text-[17px] font-semibold text-slate-800 sm:text-[18px]">{title}</h3><p className="mt-1 text-[14px] leading-7 text-slate-500 sm:text-[15px]">{text}</p></div>)}<Btn to={`${ROUTES.enquiry}?type=CardioGuard%20AI`}>Discuss CardioGuard Integration</Btn></div></Reveal><Reveal dir="right"><img src={humanMonitoringImage} alt="Illustration of a person wearing a connected cardiac patch with health readings on a phone" loading="lazy" className="mx-auto h-auto w-full max-w-3xl object-contain"/></Reveal></div>
      </Container>
    </Section>

    <Section tone="dark" bg={IMG.waveTealWide}>
      <Container><div className="grid items-start gap-8 lg:grid-cols-[1fr_.9fr]"><div><Eyebrow light>Care@Home Continuity</Eyebrow><h2 className="mt-3 font-franklin text-3xl font-semibold !text-white">Connected monitoring is only the beginning.</h2><p className="mt-3 text-[13px] leading-6 text-slate-300">TELTH’s differentiated opportunity is not another sensor. It is the workflow that connects a patient reading to an accountable care team and documents what happened next.</p><div className="mt-5 space-y-4">{[["Patient & family experience", "See permitted trends, adherence prompts and care instructions."], ["Care manager work queue", "Track assigned patients, exceptions, acknowledgments and follow-up tasks."], ["Physician oversight", "Review clinical context and decide whether escalation or treatment changes are appropriate."], ["Clinic, kiosk and hub continuity", "Link remote readings with visits and diagnostic reports where interoperable."]].map(([title, text]) => <div key={title}><h3 className="font-franklin text-[14px] font-semibold !text-white">{title}</h3><p className="mt-1 text-[11px] leading-5 text-slate-300">{text}</p></div>)}</div></div>
        <Reveal dir="right"><div className="rounded-2xl border border-violet-400/20 bg-violet-950/80 p-5 text-white shadow-xl"><h3 className="font-franklin text-[16px] font-semibold !text-white">Illustrative care-team worklist</h3><p className="mt-1 text-[10px] text-slate-300">Demonstration interface with fictional patients and statuses.</p><div className="mt-4 space-y-2">{[["Patient A · Cardiac trend review", "Review", "text-amber-300"], ["Patient B · CGM follow-up", "Scheduled", "text-emerald-300"], ["Patient C · BP log check", "Reviewed", "text-emerald-300"], ["Patient D · Device disconnected", "Contact", "text-orange-300"]].map(([label, status, tone]) => <div key={label} className="flex justify-between gap-3 rounded-lg bg-white/10 px-3 py-2 text-[11px]"><span>{label}</span><span className={`font-semibold ${tone}`}>{status}</span></div>)}</div><p className="mt-4 text-[10px] leading-5 text-slate-300">An alert workflow is not an emergency response service. Monitoring coverage, response times and escalation responsibility must be contractually defined.</p></div></Reveal>
      </div></Container>
    </Section>

    <Section>
      <Container><SectionTitle center eyebrow="Technical Due Diligence" title="Specifications & integration requirements." text="These tables intentionally distinguish proposed platform functionality from device specifications that still require manufacturer documentation and validation." />
        <div className="mt-8 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Specification categories">{(Object.keys(REQUIREMENT_GROUPS) as Array<keyof typeof REQUIREMENT_GROUPS>).map((group) => <button key={group} type="button" role="tab" aria-selected={activeRequirementGroup === group} onClick={() => setActiveRequirementGroup(group)} className={`min-w-40 rounded-full border px-6 py-2.5 text-[13px] font-semibold transition-colors sm:text-[14px] ${activeRequirementGroup === group ? "border-blue-600 bg-blue-600 text-white" : "border-blue-500 bg-white text-blue-600 hover:bg-blue-50"}`}>{group}</button>)}</div>
        <div className="mt-8 overflow-x-auto rounded-[22px] border border-slate-200 bg-white"><table className="w-full min-w-[720px] border-collapse text-left text-[14px] lg:text-[15px]"><thead className="bg-[#172744] text-white"><tr>{["Capability", "Proposed design", "Status / validation"].map((head) => <th key={head} className="px-6 py-5 font-semibold">{head}</th>)}</tr></thead><tbody>{requirements.map((row) => <tr key={row[0]} className="border-t border-slate-200">{row.map((cell) => <td key={cell} className="px-6 py-5 leading-6 text-slate-700">{cell}</td>)}</tr>)}</tbody></table></div>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-[10px] leading-5 text-slate-700"><strong>Clinical and regulatory note:</strong> Heart-rate monitors, ECG patches, ambulatory ECG recorders and event monitors are different medical devices. Do not advertise diagnostic arrhythmia detection, continuous clinical surveillance, specific battery life, CE/FDA/CDSCO authorization, or emergency protection without product-specific evidence. “AI” refers to proposed software-assisted functions, not autonomous diagnosis.</div>
      </Container>
    </Section>

    <Section className="bg-slate-50">
      <Container><SectionTitle center eyebrow="The Connected-Care Layer" title="Care pathways for every setting." />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">{[["Home-based chronic care", "Remote follow-up programs for patients whose clinicians recommend longitudinal monitoring."], ["Hospitals & clinics", "Post-discharge follow-up, specialist review and continuity with outpatient services."], ["AI MedConnect hubs", "Connect episodic diagnostic visits with appropriately governed remote monitoring pathways."]].map(([title, text], i) => <Reveal key={title}><article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-600">{i === 0 ? <House size={18}/> : i === 1 ? <Plus size={18}/> : <MonitorSmartphone size={18}/>}</span><h3 className="mt-3 font-franklin text-[14px] font-semibold text-slate-800">{title}</h3><p className="mt-2 text-[11px] leading-5 text-slate-600">{text}</p></article></Reveal>)}</div>
      </Container>
    </Section>

    <Section>
      <Container><div className="grid gap-6 rounded-[26px] bg-[#101a32] bg-cover bg-center p-5 text-white sm:p-8 lg:grid-cols-[.8fr_1.2fr] lg:p-10" style={{ backgroundImage: `linear-gradient(100deg,rgba(11,20,40,.95),rgba(22,25,62,.82)),url(${IMG.techFuture})` }}><div><Eyebrow light>Partner with TELTH</Eyebrow><h2 className="mt-3 font-franklin text-2xl font-semibold !text-white">Build a connected-care program with HealthConnect 360.</h2><p className="mt-3 text-[12px] leading-5 text-slate-200">For hospitals, clinics, care networks, medical-device manufacturers, channel partners and distributors exploring wearable monitoring integrated with TELTH’s Care@Home ecosystem.</p><p className="mt-4 text-[12px] leading-5 text-slate-200">Phone: +91 7904877505<br/>Email: info@mytelth.com<br/>Website: mytelth.com</p></div><TechnologyEnquiryForm title="Request a discussion" buttonLabel="Send" enquiryType="Technology / MedPreneur" solutionOptions={["HealthConnect 360", "HealthGuard AI devices", "Care@Home monitoring", "Device integration"]}/></div></Container>
    </Section>
  </>;
}


