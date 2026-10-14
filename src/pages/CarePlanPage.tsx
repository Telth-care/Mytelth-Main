import { useMemo, useState } from "react";
import { BadgePercent, CalendarClock, ClipboardCheck, FileBarChart, Gift, HeartPulse, Home as HomeIcon, MonitorPlay, Pill, ShoppingBasket, Stethoscope, Tag, Users, Wallet, Building, Check, X } from "lucide-react";
import { Faq } from "../components/extra";
import { Select } from "../components/forms";
import { Btn, Container, Eyebrow, FeatureCard, FeatureGrid, IconBadge, Reveal, Section, SectionTitle, Split } from "../components/ui";
import { IMG } from "../assets/slots";
import { EXTERNAL, ROUTES } from "../lib/links";

const CHALLENGES = [
  ["Too many separate arrangements", "Checkups, consultations and follow-up can require different bookings.", "A defined package connects the included services in one membership."],
  ["Unclear next steps", "After a report arrives, a member may not know whom to contact next.", "The CCM connects clinic tests and reports to the physician; the CM supports eligible home services."],
  ["Benefits and costs are hard to track", "Separate purchases make it harder to see the full care journey.", "A clear inclusion list and benefit balance show what is covered, used and remaining"],
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
  ["Digital & Smart Reports", "Access digital records and structured reports, and keep your results together."],
  ["Doctor Consultation", "Meet a physician through an available service mode."],
  ["Medicines / ePharmacy", "Access the proposed ePharmacy journey after clinical review. Medicine costs and fulfilment depend on the selected plan and pharmacy availability."],
  ["Organic & Wellness Products", "Access eligible product and coupon benefits."],
] as const;

const PLANS = [
  { family: "TELTH SPECIALITY", name: "Diabetes 360", text: "One coordinated journey from checkup to follow-up", price: 8999, was: "₹11,248.75" },
  { family: "TELTH UMBRELLA", name: "Family Preventive", text: "Bring preventive care into your family routine", price: 14999, was: "₹18,748.75" },
  { family: "TELTH SEVVI", name: "Skin & Wellness", text: "A structured skin and wellness care journey", price: 5999, was: "₹7,248.75" },
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

export default function CarePlanPage() {
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");
  const shown = useMemo(() => PLANS.filter((p) => (!service || p.family === service) && inPrice(p.price, price)), [service, price]);
  const goPlans = () => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#EFF6FF_0%,#fff_65%)]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] animate-float rounded-full bg-violet-200/40 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <Reveal><Eyebrow>Care plan</Eyebrow></Reveal>
            <Reveal delay={90}><h1 className="mt-3 font-franklin text-[36px] font-semibold leading-[1.12] sm:text-[48px] lg:text-[54px]">Healthcare services. <span className="text-brand-bright">Connected around our members.</span></h1></Reveal>
            <Reveal delay={180}><p className="mt-6 max-w-[540px] text-[16px] leading-[1.75] sm:text-[17.5px]">Telth Healthcare Private Limited is a healthcare company bringing health checks, doctor consultations, care coordination and wellness support into one membership experience.</p></Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Btn onClick={goPlans} arrow>Explore Care Plans</Btn>
                <Btn to={EXTERNAL.playstore} variant="ghost">Get the Member App</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal dir="zoom" delay={150}>
            <div className="img-zoom mx-auto max-w-[460px] overflow-hidden rounded-[28px] shadow-lift"><img src={IMG.carePlanHero} alt="Connected care with Telth" className="w-full" /></div>
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <Reveal><div className="mx-auto max-w-3xl rounded-[24px] border border-brand/20 bg-brand/[0.05] p-7 text-center sm:p-10">
            <h2 className="text-[26px] font-semibold sm:text-[32px]">What is a care plan?</h2>
            <p className="mt-4 text-[15.5px] leading-[1.8]">A care plan is a membership package with a defined set of health services and benefits for a fixed period. You can see what is included, book the available services and track your remaining benefits.</p>
          </div></Reveal>
        </Container>
      </Section>

      {/* UPDATED: Challenges Section - Image Based Colour Design */}
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="The problem. The Telth solution." title="Separate services can feel complicated. One membership brings the steps together." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {CHALLENGES.map(([t, c, s], i) => (
              <Reveal key={t} delay={i * 100}><div className="card-hover h-full overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-card">
                <div className="p-6">
                  <p className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-blue-600">The challenge </p>
                  <h3 className="mt-2 text-[18px] font-bold">{t}</h3><p className="mt-2 text-[14.5px] leading-[1.65] text-muted">{c}</p>
                </div>
                <div className="bg-emerald-50 p-6">
                  <p className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-emerald-700">How Telth helps</p>
                  <p className="mt-2 text-[14.5px] leading-[1.65] text-body">{s}</p>
                </div>
              </div></Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Split center={false}
            left={<div>
              <SectionTitle eyebrow="01 / Services for our members" title="The services in your care journey." />
              <Reveal delay={100} dir="zoom"><div className="img-zoom mt-8 overflow-hidden rounded-[22px] shadow-card"><img src={IMG.carePlanServices} alt="Telth care team with a member" loading="lazy" className="w-full" /></div></Reveal>
            </div>}
            right={<div className="space-y-4">{SERVICES.map((s, i) => (
              <Reveal key={s.title} dir="right" delay={i * 80}><div className="card-hover flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card"><IconBadge icon={s.icon} /><div><h3 className="text-[17px] font-bold">{s.title}</h3><p className="mt-1 text-[14.5px] text-muted">{s.text}</p></div></div></Reveal>
            ))}</div>}
          />
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <Split center={false} reverse
            left={<div>
              <SectionTitle eyebrow="02 / Benefits of membership" title="Know what you get. Know what comes next." />
              <Reveal delay={100} dir="zoom"><div className="img-zoom mt-8 overflow-hidden rounded-[22px] shadow-card"><img src={IMG.carePlanBenefits} alt="A couple using the Telth member app" loading="lazy" className="w-full" /></div></Reveal>
            </div>}
            right={<div className="space-y-4">{BENEFITS.map((s, i) => (
              <Reveal key={s.title} dir="left" delay={i * 80}><div className="card-hover flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card"><IconBadge icon={s.icon} /><div><h3 className="text-[17px] font-bold">{s.title}</h3><p className="mt-1 text-[14.5px] text-muted">{s.text}</p></div></div></Reveal>
            ))}</div>}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle center eyebrow="Meet your care team" title="Who helps you through the journey?" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            <FeatureCard icon={HeartPulse} title="CM · Care Manager" text="Provides Care@Home support and helps deliver eligible medicines and organic or wellness products to members at home. Home services follow the selected membership and the CM’s training and authorisation." />
            <FeatureCard icon={Stethoscope} title="CCM · Collaborative Care Manager" text="Works at the clinic, carries out authorised tests, generates digital and smart reports and connects the member to the doctor. The CCM also coordinates care information, reviews and follow-up between the care team and physician." delay={100} />
          </div>
          <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
            {MODES.map((m, i) => (
              <Reveal key={m.code} delay={i * 90}><div className="card-hover h-full rounded-2xl border border-slate-100 bg-soft p-5 text-center">
                <IconBadge icon={m.icon} className="mx-auto" />
                <p className="mt-3 font-franklin text-[13px] font-bold text-brand">{m.code}</p><h3 className="text-[16.5px] font-bold">{m.title}</h3><p className="mt-1 text-[13.5px] text-muted">{m.text}</p>
              </div></Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* UPDATED: Journey Section - Image Based Colour Design */}
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="Your membership journey" title="One step connects to the next." />
          <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {JOURNEY.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={(i % 3) * 90} className="relative">
                {/* Horizontal connecting line (desktop) */}
                <div className="absolute left-1/2 top-5 hidden h-px w-full -translate-x-1/2 bg-blue-200 lg:block" />
                {/* Vertical connecting line (mobile/tablet fallback) */}
                <div className="absolute left-1/2 top-5 h-full w-px -translate-x-1/2 bg-blue-200 lg:hidden" />
                
                <div className="relative flex flex-col items-center">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#1B5FA8] font-franklin text-[13px] font-bold text-white shadow-md ring-4 ring-white">
                    0{i + 1}
                  </span>
                  <div className="mt-5 w-full rounded-[20px] border border-blue-300 bg-[#F4F8FC] p-6 text-center shadow-sm">
                    <h3 className="text-[17px] font-bold text-slate-800">{t}</h3>
                    <p className="mt-2 text-[14px] leading-[1.65] text-slate-500">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* UPDATED: Plans Section - Image Based Colour Design */}
      <Section>
        <span id="plans" className="absolute -top-24" />
        <Container>
          <SectionTitle center eyebrow="Three ecosystems. One care engine" title="Plans built around life" text="Choose your city, care setting and budget. Discover a complete journey, then tailor it with add-ons" />
          <Reveal><div className="mx-auto mt-10 grid max-w-4xl gap-4 rounded-[22px] border border-slate-200 bg-white p-5 shadow-card sm:grid-cols-3 sm:p-6">
            <Select aria-label="Choose city" options={CITIES} placeholder="Select City" />
            <Select aria-label="Choose service" options={SERVICE_OPTS} placeholder="Select Service" value={service} onChange={(e) => setService(e.target.value)} />
            <Select aria-label="Price filter" options={PRICE_OPTS} placeholder="Select filter" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div></Reveal>
          <p className="mt-4 text-center text-[13.5px] font-semibold text-muted">Care plans · 24 plans &nbsp;|&nbsp; Add-ons · 10 add-ons</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.length === 0 && <p className="col-span-full rounded-2xl bg-soft p-8 text-center text-muted">No plans match those filters in this preview — try changing them.</p>}
            {shown.map((p, i) => {
              // Define color themes for the 3 plans based on index
              const themes = [
                { bg: "bg-[#0A7B7B]", text: "text-white", accent: "text-teal-100", badge: "bg-[#FFD166] text-slate-900", btn: "bg-white text-white hover:bg-slate-100" },
                { bg: "bg-[#2E0F6B]", text: "text-white", accent: "text-violet-200", badge: "bg-[#FFD166] text-slate-900", btn: "bg-white text-white hover:bg-slate-100" },
                { bg: "bg-[#8B1C5A]", text: "text-white", accent: "text-pink-200", badge: "bg-[#FFD166] text-slate-900", btn: "bg-white text-white hover:bg-slate-100" },
              ];
              const theme = themes[i % themes.length];

              return (
                <Reveal key={p.name} delay={i * 100}>
                  <article className={`card-hover relative flex h-full flex-col overflow-hidden rounded-[22px] p-6 shadow-card ${theme.bg} ${theme.text}`}>
                    {/* Decorative background curve */}
                    <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full border-[20px] border-white/10" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className={`text-[11.5px] font-bold tracking-wider ${theme.accent}`}>{p.family}</span>
                      <span className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11.5px] font-bold ${theme.badge}`}>
                        <BadgePercent className="h-3.5 w-3.5" />20% OFF
                      </span>
                    </div>
                    
                    <h3 className="relative z-10 mt-4 text-[22px] font-bold text-white">{p.name}</h3>
                    <p className={`relative z-10 mt-1.5 text-[14.5px] ${theme.accent}`}>{p.text}</p>
                    
                    <p className="relative z-10 mt-5 font-franklin text-[30px] font-bold">
                      ₹{p.price.toLocaleString("en-IN")} <span className={`text-[15px] font-medium line-through ${theme.accent}`}>{p.was}</span>
                    </p>
                    
                    <p className={`relative z-10 mt-1 text-[12.5px] font-bold uppercase tracking-wide ${theme.accent}`}>Validity 180 days</p>
                    <p className={`relative z-10 mt-1 text-[12.5px] ${theme.accent}`}>Example expiry 26 Mar 2027 · Illustrative price · Expiry assumes activation today</p>
                    
                    <div className="relative z-10 mt-auto pt-6">
                      <Btn to={`${ROUTES.enquiry}`} className={`w-full border-none ${theme.btn}`} arrow>Explore more</Btn>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10 text-center"><Btn to={ROUTES.enquiry} variant="ghost">View more</Btn></div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <Split
            left={<div>
              <SectionTitle light eyebrow="Your membership, in your pocket" title="TELTH Member App" text="A simple place to manage your care plan, book consultations and checkups, view digital and smart reports, access ePharmacy services and stay connected with your care team." />
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {["Bookings", "Digital and smart reports", "Medicines & ePharmacy", "Care-team support", "Membership benefits", "Wellness coupons", "Referral rewards"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-[14.5px] text-slate-200"><Tag className="h-4 w-4 text-sky-300" />{t}</li>
                ))}
              </ul>
              <div className="mt-8"><Btn to={EXTERNAL.playstore}>Install / Explore member App</Btn></div>
            </div>}
            right={<Reveal dir="zoom"><img src={IMG.app2} alt="Telth member app" loading="lazy" className="mx-auto max-h-[540px] w-auto drop-shadow-[0_30px_60px_rgba(104,71,245,.35)]" /></Reveal>}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle center eyebrow="Common Questions" title="Frequently Asked" />
          <Faq items={FAQS.map((q) => ({ q }))} />
        </Container>
      </Section>
    </>
  );
}