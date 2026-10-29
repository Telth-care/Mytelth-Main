import { Award, CreditCard, Leaf, ShoppingCart, ShoppingBag, Smartphone, Stethoscope, Users, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/telth-logo.png";
import { Btn, Container, Reveal, Section, SectionTitle, TextLink } from "../components/ui";
import { IMG } from "../assets/slots";
import { EXTERNAL, ROUTES } from "../lib/links";
import suiteTPayImage from "../assets/Container-2.png";
import suiteTCarePayImage from "../assets/Container-3.png";
import suiteTMartImage from "../assets/Container-4.png";
import suiteGoldRewardsImage from "../assets/Container-1.png";
import suiteNatlifeImage from "../assets/Container-5.png";

const ORBIT = [
  { icon: ShoppingBag, title: "T-MART", sub: "E-Commerce Market", pos: "left-0 top-[18%]" },
    { icon: Smartphone, title: "T-CARE APP", sub: "Book & consult", pos: "left-[22%] top-[58%]" },
  { icon: Users, title: "CM & CCM", sub: "Coordinate care", pos: "right-[22%] top-[10%]" },
  { icon: Stethoscope, title: "Physician App", sub: "Consult & manage", pos: "right-0 top-[52%]", to: ROUTES.tdoc },
];

const PRODUCTS = [
  { n: "01", chip: "For Physicians", chipCls: "bg-emerald-600", title: "T-DOC App", text: "A dedicated digital platform designed to help physicians connect, manage and participate in the Telth healthcare ecosystem.", img: IMG.ecoPhysicians, to: ROUTES.tdoc, cta: "Explore T-DOC App" },
  { n: "02", chip: "For Patients", chipCls: "bg-rose-700", title: "T-CARE App", text: "A patient-focused digital experience connecting users with their healthcare journey through the Telth ecosystem.", img: IMG.ecoPatients, to: EXTERNAL.playstore, cta: "Explore T-CARE App" },
  { n: "03", chip: "For Care Teams", chipCls: "bg-sky-700", title: "Care Manager / Collaborative Care Manager App", text: "Digital tools supporting care coordination, collaboration and communication across the healthcare ecosystem.", img: IMG.ecoCareTeams, to: ROUTES.cmccm, cta: "Explore CM / CCM" },
  { n: "04", chip: "Marketplace", chipCls: "bg-amber-600", title: "T-Mart", text: "A marketplace bringing healthcare and medical-related products into the Telth ecosystem for patients and providers.", img: IMG.ecoMarketplace, to: EXTERNAL.tmart, cta: "Explore T-Mart" },
];

const SUITE = [
  { icon: CreditCard, name: "T Pay", img: suiteTPayImage, sub: "Payments through participating payment partners", tile: "from-sky-100 to-blue-200", dot: "bg-sky-700" },
  { icon: Wallet, name: "T Care Pay", img: suiteTCarePayImage, sub: "Care Plan-linked services and payment journeys", tile: "from-violet-100 to-purple-200", dot: "bg-violet-600" },
  { icon: ShoppingCart, name: "T Mart", img: suiteTMartImage, sub: "Health, wellness and lifestyle marketplace", tile: "from-cyan-100 to-teal-200", dot: "bg-cyan-600" },
  { icon: Award, name: "T Gold Rewards", img: suiteGoldRewardsImage, sub: "Rewards across eligible participating services", tile: "from-amber-100 to-yellow-200", dot: "bg-amber-600" },
  { icon: Leaf, name: "Natlife", img: suiteNatlifeImage, sub: "Natural products and product traceability", tile: "from-green-100 to-emerald-200", dot: "bg-green-600" },
];

export default function TelthEcosystem() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-24 h-56 w-[65%] -rotate-3 rounded-[50%] bg-gradient-to-r from-blue-100/90 via-indigo-50/70 to-transparent blur-sm" />
        <Container className="relative grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] lg:gap-6 lg:py-24">
          <div className="relative z-10">
            <Reveal><p className="font-open text-[15px] font-bold uppercase tracking-[0.14em] text-brand sm:text-[18px]">TELTH Ecosystem</p></Reveal>
            <Reveal delay={90}>
            <h1 className="mt-6 max-w-[720px] font-franklin text-[42px] font-semibold leading-[1.13] text-slate-900 sm:text-[56px] lg:text-[54px]">
                One Intelligent Ecosystem.<br />Connected Care.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 max-w-[620px] text-[17px] leading-[1.75] text-slate-600 sm:text-[20px]">
                TELTH brings together people, healthcare professionals, connected technologies, care services and health-focused commerce in one coordinated ecosystem—designed to support a more connected healthcare journey.
              </p>
            </Reveal>
          </div>

          <Reveal dir="zoom" delay={150}>
            <div className="relative mx-auto aspect-[1.35/1] w-full max-w-[680px]">
              <div className="absolute inset-[10%] rounded-full bg-violet-300/40 blur-[70px]" />
              <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-32 sm:w-32">
                <img src={logo} alt="Telth" className="h-20 w-20 object-contain sm:h-28 sm:w-28" />
              </div>
              {ORBIT.map((o, i) => {
                const bubble = (
                  <div className="rounded-full border border-white/90 bg-violet-200/55 px-2 py-3 text-center shadow-[0_0_35px_12px_rgba(168,85,247,.24)] backdrop-blur-sm transition hover:bg-violet-200/75 sm:px-3 sm:py-4">
                    <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-brand sm:h-10 sm:w-10">
                      <o.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <p className="mt-1.5 font-franklin text-[12px] font-bold text-slate-700 sm:text-[13px]">{o.title}</p>
                    <p className="text-[10px] leading-tight text-slate-600 sm:text-[11px]">{o.sub}</p>
                  </div>
                );
                const position = `absolute z-20 ${o.pos} w-[112px] sm:w-[138px]`;
                const animation = { animation: `${i % 2 ? "floatAlt" : "float"} ${8 + i}s ease-in-out infinite` };
                return o.to ? (
                  <Link key={o.title} to={o.to} aria-label="Open the T-Doc physician app page" className={`${position} rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand`} style={animation}>
                    {bubble}
                  </Link>
                ) : (
                  <div key={o.title} className={position} style={animation}>{bubble}</div>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>
      {/* ---------- core solutions ---------- */}
      <Section tone="dark" bg={IMG.ecoHub}>
        <Container>
          <SectionTitle center light eyebrow="Core Solutions" title="Built for Every Side of Care" text="Four interconnected products designed to serve every role in the healthcare journey." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((p, i) => {
              const card = (
                <article className="card-hover group flex h-full flex-col overflow-hidden rounded-[22px] border border-slate-100 bg-white shadow-card">
                  <div className="img-zoom relative isolate aspect-[2144/832] overflow-hidden bg-[#0b1a33]">
                    <img src={p.img} alt={`${p.title} preview`} loading="lazy" className="h-full w-full object-cover object-top" />
                    <div className="pointer-events-none absolute inset-x-4 top-3 z-10 flex items-start justify-between gap-3">
                      <span className="shrink-0 font-franklin text-[12px] font-semibold leading-6 text-white/80 [text-shadow:0_1px_4px_rgba(0,0,0,.45)]">{p.n}</span>
                      <span className={`max-w-[70%] rounded-full px-3 py-1 text-right text-[11.5px] font-bold leading-4 text-white shadow-sm ${p.chipCls}`}>{p.chip}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-[20px] font-bold leading-snug">{p.title}</h3>
                    <p className="mt-2.5 flex-1 text-[14.5px] leading-[1.7] text-muted">{p.text}</p>
                    <div className="mt-5">
                      {p.title === "T-DOC App" ? (
                        <span className="inline-flex items-center gap-1.5 font-open text-[15px] font-bold text-brand group-hover:underline group-hover:underline-offset-4">
                          {p.cta}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      ) : <TextLink to={p.to}>{p.cta}</TextLink>}
                    </div>
                  </div>
                </article>
              );
              return (
                <Reveal key={p.title} delay={(i % 2) * 120}>
                  {p.title === "T-DOC App" ? (
                    <Link to={p.to} aria-label="Open the T-Doc physician app page" className="block h-full rounded-[22px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
                      {card}
                    </Link>
                  ) : card}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ---------- suite ---------- */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Telth Ecosystem" title="Everything Healthcare, All in One Place" text="A unified suite of products designed for modern healthcare payments, marketplace, rewards, and wellness traceability." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {SUITE.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <div className="card-hover group h-full overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-card">
                  <div className={`img-zoom aspect-[904/620] overflow-hidden bg-gradient-to-br ${s.tile}`}>
                    <img src={s.img} alt={`${s.name} illustration`} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2.5">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${s.dot}`}><s.icon className="h-4 w-4" aria-hidden="true" /></span>
                      <h3 className="text-[15.5px] font-bold">{s.name}</h3>
                    </div>
                    <p className="mt-2.5 text-[13.5px] leading-[1.6] text-muted">{s.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- get started ---------- */}
      <div className="mx-auto grid w-full max-w-[1280px] gap-5 px-3 pb-16 sm:px-6 sm:pb-24 md:grid-cols-2 md:gap-6">
        {[
          { title: "Explore T Mart", text: "Discover health, wellness and lifestyle products.", cta: "Explore T-Mart", to: EXTERNAL.tmart, bg: IMG.ecoTmart },
          { title: "Discover NatLife", text: "Explore natural products and available origin information.", cta: "Explore Natlife", to: EXTERNAL.natlife, bg: IMG.ecoNatlife },
        ].map((c, i) => (
          <Reveal key={c.title} dir="zoom" delay={i * 120}>
            <div className="img-zoom relative flex h-full min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-[24px] bg-[#0F172A] px-6 py-14 text-center sm:rounded-[32px]">
              <img src={c.bg} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
              <div className="relative">
                <p className="font-open text-[13px] font-bold uppercase tracking-[0.12em] text-sky-300">Get Started</p>
                <h2 className="mx-auto mt-3 max-w-md text-balance font-franklin text-[28px] font-semibold leading-tight !text-white sm:text-[38px]">{c.title}</h2>
                <p className="mx-auto mt-4 max-w-md text-[13px] leading-6 text-slate-200">{c.text}</p>
                <div className="mt-8"><Btn to={c.to}>{c.cta}</Btn></div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}


