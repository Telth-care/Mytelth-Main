import { useMemo, useState } from "react";
import { Btn, Container, Eyebrow, Reveal, Section, SectionTitle } from "../components/ui";
import TechnologyEnquiryForm from "../components/TechnologyEnquiryForm";
import { IMG } from "../assets/slots";
import { ROUTES } from "../lib/links";
import hesV1 from "../assets/Group 585.png";
import hesPro from "../assets/Group 586.png";
import mhes from "../assets/Group 587.png";
import kiosk from "../assets/Group 588.png";
import hub from "../assets/Group 589.png";
import clinic from "../assets/Group 590.png";
import medicalCenter from "../assets/Group 591.png";
import medChopper from "../assets/Group 592.png";
import devicesHero from "../assets/smarterway.png";

const FILTERS = ["All Solutions", "Portable diagnostics", "Kiosks & hubs", "Clinics & centers"] as const;
type Filter = (typeof FILTERS)[number];
const SOLUTIONS = [
  { no: "01", name: "TELTH HES V01", type: "Portable diagnostics", badge: "22 parameters", subtitle: "Portable Health Examination System", intro: "Essential health assessment at the point of care.", features: "Compact mobile diagnostic kit; structured patient capture; digital examination workflow; optional clinical connectivity.", uses: "Care@Home visits, rural screening, community outreach, assisted elderly care.", spec: "Portable carrying kit; 22-parameter claimed configuration; connect record workflow; precise sensor list, battery and connectivity pending datasheet.", image: hesV1 },
  { no: "02", name: "TELTH HES PRO", type: "Portable diagnostics", badge: "45 parameters", subtitle: "Advanced Portable Examination System", intro: "Expanded field diagnostics in a professional portable format.", features: "Modular sensor kit; structured assessment; clinician review; remote follow-up workflows; digital records.", uses: "Physician outreach, advanced Care Manager teams, employer screening, home visits.", spec: "Portable multi-device kit; 45-parameter claimed configuration; sensor-by-sensor test menu and accuracy pending verification.", image: hesPro },
  { no: "03", name: "TELTH M-HES", type: "Portable diagnostics", badge: "90 parameters", subtitle: "Master Health Examination System", intro: "A connected examination station for broader preventive screening.", features: "Integrated measurement workflow; patient reports; longitudinal tracking; optional AI-assisted insights and teleconsultation.", uses: "Clinics, corporate health programs, diagnostic centers, preventive health services.", spec: "Station-based platform; 90-parameter claimed configuration; peripherals, sample types, calibration and test turnaround pending datasheet.", image: mhes },
  { no: "04", name: "TELTH AI MEDCONNECT KIOSK", type: "Kiosks & hubs", badge: "120–180 parameters", subtitle: "AI-Powered Connected Healthcare Kiosk", intro: "Bring structured screening and connected care into existing healthcare premises.", features: "Multi-modal assessment; clinician connectivity; configurable alerts; chronic monitoring enrollment; Care@Home coordination.", uses: "Hospitals, pharmacies, clinics, wellness centers, retail health networks.", spec: "Fixed-location kiosk; claimed 120–180 parameter options; up to 10 Care Managers and 2,500 enrolled patients as a planning model, not proven throughput.", image: kiosk },
  { no: "05", name: "TELTH AI MEDCONNECT HUB + DEXA", type: "Kiosks & hubs", badge: "DEXA option", subtitle: "Connected Diagnostics & Preventive Health Hub", intro: "A dedicated facility for advanced screening and imaging-led preventive services.", features: "Connected diagnostics; optional DEXA bone-density/body-composition assessments; teleconsultation; care-plan enrollment; pharmacy linkage.", uses: "Diagnostic operators, hospitals, corporate screening, bone-health and preventive care centers.", spec: "Facility-based configuration; DEXA hardware optional; installation, radiological licensing, software and qualified operators required where applicable.", image: hub },
  { no: "06", name: "TELTH MULTISPECIALTY MINUTE CLINIC", type: "Clinics & centers", badge: "Walk-in model", subtitle: "Connected Multispecialty Walk-In Clinic", intro: "Convenient consultations and screening with specialist referral pathways.", features: "General and scheduled specialty consultation; M-HES or kiosk diagnostics; e-prescription workflow; pharmacy and Care@Home links.", uses: "Pharmacy-adjacent clinics, campuses, neighborhoods, satellite hospital networks.", spec: "Staffed clinic, not a single device; equipment and specialty mix depend on site plan; no guaranteed consultation duration.", image: clinic },
  { no: "07", name: "TELTH AI MULTISPECIALTY MEDICAL CENTER", type: "Clinics & centers", badge: "DEXA · CT · MRI options", subtitle: "Integrated Treatment, Diagnostics & Pharmacy", intro: "Scalable multispecialty center connecting physicians, pharmacy and care.", features: "Specialist consultations; laboratory diagnostics; optional DEXA, CT, MRI ultrasound and X-ray; pharmacy; care coordination; ETERNA wellness options.", uses: "Regional medical centers, hospital partners, health innovation campuses, institutional networks.", spec: "Essential / Advanced / Comprehensive facility tiers; CT and MRI are optional capital-intensive installations with dedicated site and staffing requirements.", image: medicalCenter },
  { no: "08", name: "TELTH MedChopper™", type: "Clinics & centers", badge: "MEDICINE", subtitle: "The World's Healthcare, Without Geographical Boundaries", intro: "Advanced airborne healthcare mobility and AI-connected mobile surgical facilities.", features: "Specialist consultations; mobile diagnostics; optional DEXA, CT, MRI, ultrasound and X-ray; pharmacy; care coordination.", uses: "Regional medical centers, hospital partners, health innovation campuses, institutional networks.", spec: "Concept and operational capabilities depend on aviation approvals, clinical governance, aircraft configuration and local regulation.", image: medChopper },
];
const COMPARISON = [
  ["HES V01", "22", "Mobile / Home", "Essential examination", "No"], ["HES Pro", "45", "Mobile / Outreach", "Expanded portable assessment", "No"], ["M-HES", "90", "Clinic / Station", "Master examination workflow", "As separately integrated"], ["AI MedConnect Kiosk", "120–180", "Hospital / Pharmacy", "Connected self/assisted screening", "As separately integrated"], ["AI MedConnect Hub", "Site-specific", "Dedicated Hub", "Preventive screening + Consultations", "Optional DEXA"], ["Multispecialty Minute Clinic", "Site-specific", "Walk-in Clinic", "Physician + Diagnostics + Pharmacy", "Referral / Configured"], ["AI Multispecialty Medical Center", "Site-specific", "Medical facility", "Multispecialty treatment + Diagnostics", "Optional DEXA / CT / MRI"],
];

export default function TechnologyDevicesExplorePage() {
  const [filter, setFilter] = useState<Filter>("All Solutions");
  const visible = useMemo(() => filter === "All Solutions" ? SOLUTIONS : SOLUTIONS.filter((s) => s.type === filter), [filter]);
  return <>
    <Section className="bg-white py-10 sm:py-16">
      <Container><div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <Eyebrow>TELTH Devices, Gadgets &amp; AI Healthcare Infrastructure</Eyebrow>
          <h1 className="mt-4 font-franklin text-4xl font-medium leading-tight text-slate-900 sm:text-5xl">Smart Diagnostics.<br />Connected Care.<br />One TELTH Ecosystem.</h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">From 22-parameter portable examinations to AI-connected kiosks, DEXA-enabled hubs and configurable multispecialty medical centers—technology designed to bring care closer to people.</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-700">{["P3DSC Smart Care", "Care@Home", "Telemedicine", "Connected Diagnostics"].map((label) => <span key={label} className="rounded-full border border-slate-200 px-4 py-2">{label}</span>)}</div>
          <div className="mt-6"><Btn to={ROUTES.enquiry} className="!min-h-[42px] !rounded-lg !px-5 !py-2 !text-[13px]">Request Demo</Btn></div>
        </Reveal>
        <Reveal dir="right"><img src={devicesHero} alt="TELTH AI Health Hub with connected diagnostic and care services" className="h-[280px] w-full rounded-2xl object-cover shadow-card sm:h-[360px]" /></Reveal>
      </div></Container>
    </Section>
    <Section id="product-portfolio" className="bg-white pt-4 sm:pt-8">
      <Container>
        <SectionTitle center eyebrow="Product & Infrastructure Portfolio" title="Eight solutions. Three deployment categories." text="Explore the intended applications, proposed configurations and connected-care workflows. Parameter figures below are TELTH-provided configuration targets; an approved test-by-test specification is still required." />
        <div className="mt-7 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter solutions">
          {FILTERS.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`rounded-full border px-4 py-2 text-[12px] font-semibold transition-colors ${filter === item ? "border-blue-600 bg-blue-600 text-white" : "border-blue-200 bg-white text-blue-700 hover:bg-blue-50"}`}>{item}</button>)}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {visible.map((s) => <Reveal key={s.no} className="h-full"><article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex h-52 items-center justify-center border-b border-slate-100 p-3 sm:h-60"><img src={s.image} alt={s.name} loading="lazy" className="h-full w-full rounded-lg object-contain" /></div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold text-violet-700"><span>Solution {s.no}</span><span className="rounded bg-violet-100 px-2 py-1">{s.badge}</span></div>
              <h2 className="mt-2 font-franklin text-[18px] font-bold text-slate-900">{s.name}</h2><p className="mt-1 text-[13px] font-medium text-slate-700">{s.subtitle}</p><p className="mt-2 text-[12px] leading-5 text-slate-600">{s.intro}</p>
              <div className="mt-4 grid gap-3 text-[11px] leading-[1.55] text-slate-600 sm:grid-cols-2"><p><strong className="mb-1 block text-slate-700">Features</strong>{s.features}</p><p><strong className="mb-1 block text-slate-700">Use Cases</strong>{s.uses}</p></div>
              <div className="mt-4 border-t border-slate-100 pt-3 text-[11px] leading-[1.55] text-slate-600"><strong className="mb-1 block text-slate-700">Specification Snapshot</strong>{s.spec}</div>
              <div className="mt-4"><Btn to={`${ROUTES.enquiry}?type=${encodeURIComponent(`Enquiry about ${s.name}`)}`} className="!min-h-[40px] !rounded-lg !px-4 !py-2 !text-[12px]">Enquiry about this solution</Btn></div>
            </div>
          </article></Reveal>)}
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-center text-[11px] leading-5 text-orange-600">Product imagery includes supplied photographs and conceptual renders. Visuals are illustrative and may not reflect final installed equipment, device configuration or current availability.</p>
      </Container>
    </Section>
    <Section className="bg-slate-50"><Container>
      <SectionTitle center eyebrow="Choose the Right Deployment" title="Compare TELTH solutions" text="Parameter totals are not equivalent to independent laboratory tests or unique biomarkers. A signed parameter register should distinguish directly measured, calculated and clinically reviewed outputs." />
      <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm"><table className="w-full min-w-[760px] border-collapse text-left text-[12px]"><thead className="bg-[#172744] text-white"><tr>{["Solution", "Claimed parameters", "Deployment", "Core Service", "Imaging"].map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead><tbody>{COMPARISON.map((row) => <tr key={row[0]} className="border-t border-slate-200">{row.map((cell) => <td key={cell} className="px-4 py-3 text-slate-600">{cell}</td>)}</tr>)}</tbody></table></div>
    </Container></Section>
    <Section><Container>
      <SectionTitle center eyebrow="TELTH 360° Connected Healthcare" title="One connected patient journey" text="A modular operating model linking frontline measurements with clinical oversight, longitudinal records, medicine access and follow-up services." />
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["P³DSC", "Predictive, Precise, Point-of-Care, Data-Driven Smart Care framework."], ["G Med ID", "Unified medical identity and longitudinal patient record concept."], ["RootCloud + THOS", "Data exchange and healthcare operations infrastructure."], ["TELTH AI", "Clinical-supervised analytics and reporting workflows."], ["Care@Home", "Care Manager outreach and chronic-condition follow-up."], ["T Pharmacy", "Prescription and licensed pharmacy fulfillment connectivity."], ["T Pay", "Care plans, membership and payment workflows."], ["T Mart + Natlife", "Wellness devices, products and organics marketplace integration."]].map(([name, desc]) => <div key={name} className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="text-[13px] font-bold text-violet-700">{name}</h3><p className="mt-2 text-[11px] leading-5 text-slate-600">{desc}</p></div>)}</div>
    </Container></Section>
    <section className="mx-auto max-w-[1280px] px-5 pb-16 sm:px-8"><div className="grid gap-8 rounded-[26px] bg-[#101a32] bg-cover bg-center p-6 text-white sm:p-10 lg:grid-cols-2 lg:p-12" style={{ backgroundImage: `linear-gradient(90deg,rgba(11,20,40,.94),rgba(22,25,62,.84)),url(${IMG.techFuture})` }}>
      <div><Eyebrow light>Build with TELTH</Eyebrow><h2 className="mt-3 font-franklin text-3xl font-semibold text-white">Prepare your healthcare business for the next era of connected care.</h2><p className="mt-4 text-sm leading-6 text-slate-200">Explore device demonstrations, deployment models, hospital and pharmacy partnerships, Care Manager networks and medical-center planning.</p><p className="mt-4 text-sm text-slate-200">Phone: +91 7904877505<br />Email: info@mytelth.com<br />Website: mytelth.com</p></div>
      <TechnologyEnquiryForm title="Request a demonstration" buttonLabel="Send" enquiryType="Technology / MedPreneur" solutionOptions={SOLUTIONS.map((solution) => solution.name)} />
    </div></section>
  </>;
}
