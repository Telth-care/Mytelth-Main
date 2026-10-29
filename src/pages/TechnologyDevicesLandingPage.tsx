import { Btn, Container, Eyebrow, Reveal, Section, SectionTitle } from "../components/ui";
import { ROUTES } from "../lib/links";
import devicesHero from "../assets/Group 590.png";
import hesV1 from "../assets/Group 577.png";
import hesPro from "../assets/Group 578.png";
import diagnosticStation from "../assets/Group 579.png";
import healthKiosk from "../assets/Group 580.png";
import healthDashboard from "../assets/connect360.png";
import cardioGuard from "../assets/Group 596.png";
import diaGuard from "../assets/Group 597.png";
import vitalGuard from "../assets/Group 598.png";
import respiraGuard from "../assets/Group 600.png";

const DEVICE_IMAGES = [
  { name: "TELTH HES V01", image: hesV1 },
  { name: "TELTH HES PRO", image: hesPro },
  { name: "TELTH Diagnostic Station", image: diagnosticStation },
  { name: "TELTH AI Kiosk", image: healthKiosk },
];
const HEALTHGUARD_IMAGES = [
  { name: "CardioGuard AI", image: cardioGuard },
  { name: "DiaGuard AI", image: diaGuard },
  { name: "VitalGuard AI", image: vitalGuard },
  { name: "RespiraGuard AI", image: respiraGuard },
];

export default function TechnologyDevicesLandingPage() {
  return <>
    <Section className="bg-white py-10 sm:py-16">
      <Container><div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <Eyebrow>TELTH Devices, Gadgets &amp; AI Healthcare Infrastructure</Eyebrow>
          <h1 className="mt-4 font-franklin text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">Smart Diagnostics.<br />Connected Care.<br />One TELTH Ecosystem.</h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">From 22-parameter portable examinations to AI-connected kiosks, DEXA-enabled hubs and configurable multispecialty medical centers—technology designed to bring care closer to people.</p>
          <div className="mt-5"><Btn to={ROUTES.technologyDevicesExplore} arrow className="!min-h-[42px] !rounded-lg !px-5 !py-2 !text-[13px]">Explore Telth Devices</Btn></div>
        </Reveal>
        <Reveal dir="right"><img src={devicesHero} alt="TELTH AI Health Hub and connected diagnostic infrastructure" className="w-full rounded-2xl object-cover shadow-card" /></Reveal>
      </div></Container>
    </Section>

    <Section className="bg-white pt-4 sm:pt-8">
      <Container><SectionTitle center eyebrow="Devices Overview" title="TELTH Devices, Gadgets" />
        <div className="relative mt-8 grid gap-1 sm:grid-cols-2">
          <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-blue-100/70 blur-2xl" />
          {DEVICE_IMAGES.map((device) => <Reveal key={device.name} className="relative"><article className="flex h-[245px] items-center justify-center overflow-hidden bg-white p-2 sm:h-[270px] sm:p-3"><img src={device.image} alt={device.name} className="h-full w-full object-contain" loading="lazy" /></article></Reveal>)}
        </div>
      </Container>
    </Section>

    <Section className="bg-white py-12 sm:py-16"><Container>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal><img src={healthDashboard} alt="HealthConnect 360 care team monitoring dashboard" className="w-full object-contain" loading="lazy" /></Reveal>
        <Reveal delay={90}>
          <Eyebrow>TELTH HealthGuard AI · Powered by THOS</Eyebrow>
          <h2 className="mt-3 font-franklin text-3xl font-semibold text-slate-900 sm:text-4xl">HealthConnect 360</h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-600">One connected-care experience for wearable health devices, patients, care managers, physicians, and healthcare organizations—designed to bring monitoring insights into coordinated care.</p>
          <p className="mt-4 font-franklin text-[17px] font-semibold text-slate-900">Connect. Monitor. Coordinate Care.</p>
          <div className="mt-6"><Btn to={ROUTES.healthConnect} arrow>Explore Telth HealthGuard AI</Btn></div>
        </Reveal>
      </div>
    </Container></Section>

    <Section className="bg-white pt-5 sm:pt-8"><Container>
      <SectionTitle center eyebrow="HealthGuard AI Gadgets" title="HealthConnect 360" />
      <div className="mt-8 grid gap-2 sm:grid-cols-2">{HEALTHGUARD_IMAGES.map((device) => <Reveal key={device.name}><article className="flex h-[220px] items-center justify-center overflow-hidden bg-white sm:h-[260px]"><img src={device.image} alt={device.name} className="h-full w-full scale-[1.08] object-contain" loading="lazy" /></article></Reveal>)}</div>
    </Container></Section>
  </>;
}
