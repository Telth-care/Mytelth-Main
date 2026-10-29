import { useMemo, useState } from "react";
import { BadgePercent, CalendarClock, Check, ClipboardCheck, FileBarChart, Gift, Heart, HeartPulse, Home as HomeIcon, MonitorPlay, Pill, ShoppingBasket, Stethoscope, Tag, Users, Wallet, Building, ArrowRight, Sparkles } from "lucide-react";
import { Faq } from "../components/extra";
import { Select } from "../components/forms";
import { Btn, Container, Eyebrow, FeatureCard, IconBadge, Reveal, Section, SectionTitle, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import carePlanAppImage from "../assets/Care plan.png";
import { EXTERNAL, ROUTES } from "../lib/links";

const CHALLENGES = [
  ["Too many separate arrangements", "Checkups, consultations and follow-up can require different bookings.", "A defined package connects the included services in one membership."],
  ["Unclear next steps", "After a report arrives, a member may not know whom to contact next.", "The CCM connects clinic tests and reports to the physician; the CM supports eligible home services."],
  ["Benefits and costs are hard to track", "Separate purchases make it harder to see the full care journey.", "A clear inclusion list and benefit balance show what is covered, used and remaining."],
] as const;

const SERVICES = [
  { icon: ClipboardCheck, title: "Health checkups", text: "Access the checks included in your chosen plan." },
  { icon: FileBarChart, title: "Digital and smart reports", text: "Keep results together and discuss the next steps." },
  { icon: Stethoscope, title: "Doctor consultations", text: "Meet a physician through an available service mode." },
  { icon: Pill, title: "Medicines and ePharmacy", text: "Explore medicine support following clinical review." },
  { icon: ShoppingBasket, title: "Organic and wellness products", text: "Access eligible product and coupon benefits." },
];
const BENEFITS = [
  { icon: ClipboardCheck, title: "A coordinated package", text: "Review your included services and validity before buying." },
  { icon: Users, title: "Support from your care team", text: "Get help with appointments and follow-up tasks." },
  { icon: Wallet, title: "A visible benefit balance", text: "See which services are used, reserved or remaining." },
  { icon: CalendarClock, title: "Flexible ways to access care", text: "Choose an available clinic, digital or home-care option." },
  { icon: Gift, title: "Wellness benefits and referral rewards", text: "Use eligible benefits under the membership’s final terms." },
];
const MODES = [
  { icon: Building, code: "C@C", title: "Care at a clinic", text: "Attend an appointment at an available clinic." },
  { icon: MonitorPlay, code: "C@D", title: "Digital consultation", text: "Speak with a physician through online consultation." },
  { icon: HomeIcon, code: "C@H", title: "Care at home", text: "Receive an eligible service at your home." },
];
const JOURNEY = [
  ["Buy a plan", "Compare included services, price and validity, then choose a membership that fits your needs."],
  ["Health Checkup", "Book the health checks included in your selected membership. Extra tests depend on clinical advice and plan terms."],
  ["Digital & Smart Reports", "Access digital records and structured reports that help you and your care team understand the next steps."],
  ["Doctor Consultation", "Meet a physician in the available service mode to discuss your health and appropriate care."],
  ["Medicines / ePharmacy", "Access the proposed ePharmacy journey after clinical review. Medicine costs and fulfilment depend on the selected plan and pharmacy availability."],
  ["Organic & Wellness Products", "Explore eligible wellness products, offers and member benefits."],
  ["Care Coordination & Follow-up", "Stay connected with your care team and keep track of follow-up and remaining benefits."],
] as const;
const PLANS = [
  { family: "TELTH SPECIALITY", name: "Diabetes 360", text: "One coordinated journey from checkup to follow-up", price: 8999, was: "₹11,248.75", gradient: "linear-gradient(120deg,#124d55,#087d72)" },
  { family: "TELTH UMBRELLA", name: "Family Preventive", text: "Bring preventive care into your family routine", price: 14999, was: "₹18,748.75", gradient: "linear-gradient(120deg,#30205f,#6241ad)" },
  { family: "TELTH SEVVI", name: "Skin & Wellness", text: "A structured skin and wellness care journey", price: 5999, was: "₹7,248.75", gradient: "linear-gradient(120deg,#762354,#b23878)" },
] as const;
const ADD_ONS = [
  { family: "OPTIONAL SERVICE", name: "Extra Health Check", text: "Add eligible tests based on clinical advice.", price: 1499, was: "Plan dependent", gradient: "linear-gradient(120deg,#124d55,#087d72)" },
  { family: "DIGITAL CARE", name: "Digital Consultation", text: "Connect with a physician through an available online slot.", price: 799, was: "Plan dependent", gradient: "linear-gradient(120deg,#30205f,#6241ad)" },
  { family: "WELLNESS", name: "Wellness Support", text: "Explore eligible wellness products and member offers.", price: 999, was: "Plan dependent", gradient: "linear-gradient(120deg,#762354,#b23878)" },
] as const;
const CITIES = ["Salem", "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"] as const;
const SERVICE_OPTS = ["TELTH SPECIALITY", "TELTH UMBRELLA", "TELTH SEVVI"] as const;
const PRICE_OPTS = ["Under ₹6,000", "₹6,000 – ₹10,000", "Above ₹10,000"] as const;
const inPrice = (p: number, f: string) => !f || (f === PRICE_OPTS[0] ? p < 6000 : f === PRICE_OPTS[1] ? p >= 6000 && p <= 10000 : p > 10000);
const FAQS = [
  "How do I choose a membership that suits my health needs?", "What is included in the membership price, and what could cost extra?", "What happens after I buy a care plan?",
  "Who helps me at home, and who helps me at the clinic?", "Can I choose between a home visit, a clinic visit and an online consultation?", "Are medicines included, and how does home delivery work?",
  "Can I buy a plan for my parents or other family members?", "How do I use wellness coupons and earn referral rewards?", "What if I need to cancel or reschedule an appointment?", "What happens to unused benefits when my membership ends?",
];

function CarePlanImage({ src, alt, className = "", label }: { src: string; alt: string; className?: string; label: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={alt} className={`flex min-h-64 items-center justify-center bg-[radial-gradient(ellipse_at_75%_20%,rgba(167,139,250,.3),transparent_34%),radial-gradient(ellipse_at_20%_80%,rgba(45,212,191,.22),transparent_38%),linear-gradient(135deg,#f2f7ff,#e7f5f3)] ${className}`}><span className="rounded-full border border-white/80 bg-white/75 px-5 py-2 text-sm font-semibold text-slate-600 shadow-sm"><Sparkles className="mr-2 inline h-4 w-4 text-teal-600" />{label}</span></div>;
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`block w-full object-cover ${className}`} />;
}

export default function CarePlanPage() {
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const [catalog, setCatalog] = useState<"plans" | "addons">("plans");
  const products = catalog === "plans" ? PLANS : ADD_ONS;
  const shown = useMemo(() => products.filter((p) => (!service || catalog === "addons" || p.family === service) && inPrice(p.price, price)), [products, service, price, catalog]);
  const goPlans = () => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });

  return <>
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-4 h-[400px] w-[400px] animate-float rounded-full bg-violet-100/60 blur-3xl" />
      <Container className="relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[.95fr_1.05fr] lg:gap-20 lg:py-24">
        <div>
          <Reveal><Eyebrow>Care plan</Eyebrow></Reveal>
          <Reveal delay={70}><h1 className="mt-4 max-w-[580px] font-franklin text-[36px] font-medium leading-[1.16] tracking-[-.025em] text-ink sm:text-[44px] lg:text-[46px]">Healthcare services. Connected around our members.</h1></Reveal>
          <Reveal delay={140}><p className="mt-6 max-w-[570px] text-[15.5px] leading-[1.75] text-body sm:text-[16px]">Telth Healthcare Private Limited is a healthcare company bringing health checks, doctor consultations, care coordination and wellness support into one membership experience.</p></Reveal>
          <Reveal delay={210}><div className="mt-7 max-w-[570px] rounded-[20px] border-l-2 border-teal-600 bg-[#edf7f6] px-5 py-4 sm:px-6"><h2 className="font-franklin text-[17px] font-semibold text-ink">What is a care plan?</h2><p className="mt-1.5 text-[13.5px] leading-[1.6] text-body">A care plan is a membership package with a defined set of health services and benefits for a fixed period. You can see what is included, book the available services and track your remaining benefits.</p></div></Reveal>
          <Reveal delay={270}><button onClick={goPlans} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3">Explore care plans <ArrowRight size={17}/></button></Reveal>
        </div>
        <Reveal dir="zoom" delay={130}>
          <div className="careplan-hero-art img-zoom relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[28px] shadow-[0_18px_45px_rgba(28,68,100,.13)]">
            <CarePlanImage src={IMG.carePlanHero} alt="A care professional speaking with a member" label="Connected care" className="aspect-[1.04/1]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-white/15" />
            <span className="absolute left-5 top-4 rounded-full bg-white/85 px-4 py-1.5 font-franklin text-[16px] font-semibold text-[#17606a] shadow-sm backdrop-blur">Connected care</span>
            <span className="absolute bottom-5 right-5 rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-[#17606a] shadow-sm backdrop-blur">One membership</span>
            <span aria-hidden="true" className="pointer-events-none absolute -left-12 top-1/4 h-48 w-48 rounded-full border-[18px] border-teal-100/45" />
          </div>
        </Reveal>
      </Container>
    </section>

    <Section className="!py-14 sm:!py-16">
      <Container>
        <SectionTitle center eyebrow="The problem. The Telth solution." title="Separate services can feel complicated. One membership brings the steps together." />
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {CHALLENGES.map(([title, challenge, solution], i) => <Reveal key={title} delay={i * 90} className="h-full"><article className="card-hover h-full rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,.08)] sm:p-6"><Eyebrow> The challenge</Eyebrow><h3 className="mt-2 font-franklin text-[17px] font-medium text-ink">{title}</h3><p className="mt-2 text-[13.5px] leading-[1.65] text-body">{challenge}</p><div className="mt-5 rounded-xl bg-[#eaf7f1] px-4 py-3"><h4 className="text-[13px] font-medium text-ink">How Telth helps</h4><p className="mt-2 text-[12.5px] leading-[1.7] text-body">{solution}</p></div></article></Reveal>)}
        </div>
      </Container>
    </Section>

    <Section className="!py-14 sm:!py-20">
      <Container><Split center={false}
        left={<div><SectionTitle eyebrow="01 / Services for our members" title="The services in your care journey."/><div className="mt-6 space-y-0">{SERVICES.map((s, i) => <Reveal key={s.title} delay={i * 65}><div className="flex gap-3 border-b border-slate-200 py-3.5"><Check className="mt-0.5 h-[17px] w-[17px] flex-none text-emerald-500"/><div><h3 className="text-[14.5px] font-medium text-slate-900">{s.title}</h3><p className="mt-1 text-[12.5px] leading-5 text-muted">{s.text}</p></div></div></Reveal>)}</div></div>}
        right={<Reveal dir="right" delay={100}><div className="img-zoom overflow-hidden rounded-[24px]"><CarePlanImage src={IMG.carePlanServices} alt="Care professional helping a member understand her healthcare" label="Care through every step" className="aspect-[1.18/1]"/></div></Reveal>}
      /></Container>
    </Section>

    <Section tone="soft" className="!py-14 sm:!py-20"><Container><Split center={false}
      left={<Reveal dir="left"><div className="img-zoom overflow-hidden rounded-[24px]"><CarePlanImage src={IMG.carePlanBenefits} alt="A couple reviewing their care membership together" label="Care that fits your life" className="aspect-[1.18/1]"/></div></Reveal>}
      right={<div><SectionTitle eyebrow="02 / Benefits of membership" title="Know what you get. Know what comes next."/><div className="mt-5 space-y-0">{BENEFITS.map((s, i) => <Reveal key={s.title} delay={i * 65}><div className="flex gap-3 border-b border-slate-200/80 py-3"><Check className="mt-0.5 h-[17px] w-[17px] flex-none text-emerald-500"/><div><h3 className="text-[14.5px] font-medium text-slate-900">{s.title}</h3><p className="mt-1 text-[12.5px] leading-5 text-muted">{s.text}</p></div></div></Reveal>)}</div></div>}
    /></Container></Section>

    <Section className="!py-14 sm:!py-20"><Container>
      <SectionTitle center eyebrow="Meet your care team" title="Who helps you through the journey?"/>
      <div className="mx-auto mt-9 grid max-w-[920px] gap-5 md:grid-cols-2">
        <FeatureCard icon={HeartPulse} title="Care Manager" text="Provides Care@Home support and helps deliver eligible medicines and organic or wellness products to members at home. Home services follow the selected membership and the CM’s training and authorisation." />
        <FeatureCard icon={Stethoscope} title="Collaborative Care Manager" text="Works at the clinic, carries out authorised tests, generates digital and smart reports and connects the member to the doctor. The CCM also coordinates care information, reviews and follow-up between the care team and physician." delay={90}/>
      </div>
      <h3 className="mx-auto mt-10 max-w-[920px] font-franklin text-[19px] font-semibold text-ink">Care settings</h3>
      <div className="mx-auto mt-4 grid max-w-[920px] gap-4 sm:grid-cols-3">{MODES.map((m, i) => <Reveal key={m.code} delay={i * 70}><article className="card-hover h-full rounded-[17px] border border-slate-200 bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,.07)]"><IconBadge icon={m.icon} className="!h-10 !w-10"/><p className="mt-3 font-franklin text-[12px] font-semibold text-brand">{m.code}</p><h4 className="mt-1 font-franklin text-[16px] font-medium text-ink">{m.title}</h4><p className="mt-1 text-[12.5px] leading-5 text-muted">{m.text}</p></article></Reveal>)}</div>
    </Container></Section>

    <Section tone="soft" className="!py-14 sm:!py-20"><Container>
      <SectionTitle center eyebrow="Your membership journey" title="One step connects to the next."/>
      <ol className="careplan-journey mx-auto mt-12 grid max-w-[1040px] gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
        {JOURNEY.map(([title, text], i) => <Reveal as="li" key={title} delay={(i % 4) * 60} className={`relative lg:col-span-3 ${i === 4 ? "lg:col-start-2" : i === 5 ? "lg:col-start-5" : i === 6 ? "lg:col-start-8" : ""}`}>
          <div className="relative flex h-full flex-col items-center">{i !== 3 && i !== 6 && <span aria-hidden="true" className="absolute left-1/2 top-4 hidden h-px w-[calc(100%+0.625rem)] bg-slate-300 lg:block"/>}<span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#2873b8] font-franklin text-[12px] font-bold text-white shadow-md">0{i + 1}</span><article className="mt-3 flex min-h-[116px] w-full flex-1 flex-col items-center rounded-[7px] border border-blue-100 bg-[#f5f8fc] px-4 py-4 text-center shadow-[0_1px_4px_rgba(15,23,42,.04)]"><h3 className="font-franklin text-[13px] font-semibold leading-snug text-slate-800">{title}</h3><p className="mt-2 text-[11.5px] leading-[1.55] text-slate-500">{text}</p></article></div>
        </Reveal>)}
      </ol>
    </Container></Section>

    <Section tone="soft" className="!py-14 sm:!py-20"><span id="plans" className="absolute top-0"/><Container>
      <SectionTitle center eyebrow="Three ecosystems. One care engine" title="Plans built around life" text="Choose your city, care setting and budget. Discover a complete journey, then tailor it with add-ons."/>
      <Reveal><div className="mx-auto mt-8 grid max-w-[1040px] gap-4 rounded-[18px] border border-stone-300 bg-white p-5 sm:grid-cols-3 sm:p-6">
        <label className="block"><span className="mb-2 block text-[12px] font-medium text-slate-700">Choose City</span><Select aria-label="Choose city" options={CITIES} placeholder="Select City" value={city} onChange={(e) => setCity(e.target.value)}/></label>
        <label className="block"><span className="mb-2 block text-[12px] font-medium text-slate-700">Choose service</span><Select aria-label="Choose service" options={SERVICE_OPTS} placeholder="Select Service" value={service} onChange={(e) => setService(e.target.value)}/></label>
        <label className="block"><span className="mb-2 block text-[12px] font-medium text-slate-700">Price filter</span><Select aria-label="Price filter" options={PRICE_OPTS} placeholder="Select filter" value={price} onChange={(e) => setPrice(e.target.value)}/></label>
      </div></Reveal>
      <div className="mx-auto mt-5 flex max-w-[1040px] flex-wrap gap-3"><button onClick={() => setCatalog("plans")} className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 text-[14px] font-semibold transition ${catalog === "plans" ? "bg-[#1b2147] text-white shadow-sm" : "border border-stone-300 bg-white text-ink hover:border-brand"}`}>Care plans <span className={`rounded-full px-3 py-0.5 text-[11px] ${catalog === "plans" ? "bg-violet-100 text-violet-700" : "bg-slate-100 text-slate-600"}`}>24 plans</span></button><button onClick={() => setCatalog("addons")} className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 text-[14px] font-semibold transition ${catalog === "addons" ? "bg-[#1b2147] text-white shadow-sm" : "border border-stone-300 bg-white text-ink hover:border-brand"}`}>Add-ons <span className={`rounded-full px-3 py-0.5 text-[11px] ${catalog === "addons" ? "bg-violet-100 text-violet-700" : "bg-slate-100 text-slate-600"}`}>10 add-ons</span></button></div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.length === 0 && <p className="col-span-full rounded-xl bg-white p-8 text-center text-muted">No options match those filters. Try another selection.</p>}
        {shown.map((p, i) => <Reveal key={p.name} delay={i * 70} className="h-full"><article className="plan-card card-hover relative flex h-full min-h-[265px] flex-col overflow-hidden rounded-[18px] p-5 text-white shadow-[0_14px_28px_rgba(21,33,62,.12)] sm:p-6" style={{ background: p.gradient }}><div aria-hidden="true" className="pointer-events-none absolute -right-10 top-8 h-36 w-36 rounded-full border border-white/25"/><div className="relative flex items-center justify-between gap-3"><span className="flex items-center gap-2 text-[11.5px] font-semibold tracking-wide"><span className="h-8 w-8 rounded-lg border border-white/40 bg-white/15"/>{p.family}</span><span className="rounded-lg bg-[#ffdf80] px-3 py-1.5 text-[11px] font-semibold text-slate-900">20% OFF</span></div><h3 className="relative mt-4 font-franklin text-[20px] font-semibold">{p.name}</h3><p className="relative mt-1 text-[12.5px] text-white/80">{p.text}</p><p className="relative mt-3 font-franklin text-[26px] font-semibold">₹{p.price.toLocaleString("en-IN")} <span className="ml-1 text-[12px] font-normal text-white/80 line-through">{p.was}</span></p><p className="relative mt-1 text-[10.5px] font-medium uppercase tracking-wide text-white/75">Validity 180 days</p><div className="relative mt-auto flex items-end justify-between gap-2 pt-4"><p className="max-w-[190px] text-[10px] leading-4 text-white/70">Illustrative price<br/>Expiry assumes activation today</p><Btn to={`${ROUTES.enquiry}?type=${encodeURIComponent(p.name)}`} variant="white" className="min-h-9 rounded-lg px-4 py-2 text-[11px] leading-4">Explore more</Btn></div></article></Reveal>)}
      </div>
      <p className="mx-auto mt-4 max-w-[1040px] text-[10.5px] leading-5 text-slate-500">Displayed plans and prices are illustrative. Availability, inclusions, validity and final pricing depend on city and selected membership terms.</p>
      <div className="mt-6 text-center"><Btn to={ROUTES.enquiry} variant="ghost">View more</Btn></div>
    </Container></Section>

    <Section className="!py-14 sm:!py-20"><Container><Split center
      left={<Reveal dir="left"><div className="mx-auto w-full max-w-[330px]"><CarePlanImage src={carePlanAppImage} alt="TELTH member care plan app preview" label="TELTH Care Plan" className="max-h-[540px] object-contain drop-shadow-[0_24px_38px_rgba(75,67,150,.18)]"/></div></Reveal>}
      right={<div><SectionTitle eyebrow="Your membership, in your pocket" title="TELTH T-CARE PAY App" text="A simple place to manage your care plan, book consultations and checkups, view digital and smart reports, access ePharmacy services and stay connected with your care team."/><ul className="mt-5 space-y-3">{["Bookings", "Digital and smart reports", "Medicines & ePharmacy", "Care-team support", "Membership benefits", "Wellness coupons", "Referral rewards"].map((t) => <li key={t} className="flex items-center gap-3 text-[14px] text-body"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-100 text-violet-600"><Check size={14}/></span>{t}</li>)}</ul><div className="mt-7"><Btn to={EXTERNAL.playstore}>Install / Explore T-Care Pay App</Btn></div></div>}
    /></Container></Section>

    <Section><Container><SectionTitle center eyebrow="Common questions" title="Frequently asked"/><Faq items={FAQS.map((q) => ({ q }))}/></Container></Section>
  </>;
}
