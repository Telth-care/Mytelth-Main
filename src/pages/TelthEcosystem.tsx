import { Award, CreditCard, Leaf, ShoppingCart, ShoppingBag, Smartphone, Stethoscope, Users, Wallet } from "lucide-react";
import logo from "../assets/telth-logo.png";
import { Btn, Container, Reveal, Section, SectionTitle, TextLink } from "../components/ui";
import { IMG } from "../assets/slots";
import { EXTERNAL, ROUTES } from "../lib/links";

const ORBIT = [
  { icon: ShoppingBag, title: "T-MART", sub: "E-Commerce Market", pos: "left-0 top-[18%]" },
  { icon: Smartphone, title: "Patient App", sub: "Book & consult", pos: "left-[22%] top-[58%]" },
  { icon: Users, title: "CM & CCM", sub: "Coordinate care", pos: "right-[22%] top-[10%]" },
  { icon: Stethoscope, title: "Physician App", sub: "Consult & manage", pos: "right-0 top-[52%]" },
];

const PRODUCTS = [
  { n: "01", chip: "For Physicians", chipCls: "bg-emerald-600", title: "T-DOC App", text: "A dedicated digital platform designed to help physicians connect, manage and participate in the Telth healthcare ecosystem.", img: IMG.ecoPhysicians, to: ROUTES.tdoc, cta: "Explore T-DOC App" },
  { n: "02", chip: "For Patients", chipCls: "bg-rose-700", title: "Patient App", text: "A patient-focused digital experience connecting users with their healthcare journey through the Telth ecosystem.", img: IMG.ecoPatients, to: EXTERNAL.playstore, cta: "Explore Patient App" },
  { n: "03", chip: "For Care Teams", chipCls: "bg-sky-700", title: "Care Manager / Collaborative Care Manager App", text: "Digital tools supporting care coordination, collaboration and communication across the healthcare ecosystem.", img: IMG.ecoCareTeams, to: ROUTES.cmccm, cta: "Explore CM / CCM" },
  { n: "04", chip: "Marketplace", chipCls: "bg-amber-600", title: "T-Mart", text: "A marketplace bringing healthcare and medical-related products into the Telth ecosystem for patients and providers.", img: IMG.ecoMarketplace, to: EXTERNAL.tmart, cta: "Explore T-Mart" },
];

const SUITE = [
  { icon: CreditCard, name: "T Pay", sub: "Simple. Secure. Connected Payments", tile: "from-sky-100 to-blue-200", dot: "bg-sky-700" },
  { icon: Wallet, name: "T Care Visa Pay", sub: "Your Healthcare Card", tile: "from-violet-100 to-purple-200", dot: "bg-violet-600" },
  { icon: ShoppingCart, name: "T Mart", sub: "Health & Wellness Marketplace", tile: "from-cyan-100 to-teal-200", dot: "bg-cyan-600" },
  { icon: Award, name: "T Gold Rewards", sub: "Earn. Redeem. Live Healthier.", tile: "from-amber-100 to-yellow-200", dot: "bg-amber-600" },
  { icon: Leaf, name: "Natlife", sub: "Trace Your Organic · Pure. Trace. Better Living.", tile: "from-green-100 to-emerald-200", dot: "bg-green-600" },
];

export default function TelthEcosystem() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[760px] -rotate-[24deg] bg-gradient-to-r from-blue-200/50 to-transparent" />
        <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <Reveal><p className="font-open text-[13px] font-bold uppercase tracking-[0.14em] text-brand sm:text-[15px]">Telth Ecosystem</p></Reveal>
            <Reveal delay={90}>
              <h1 className="mt-3 font-franklin text-[40px] font-semibold leading-[1.1] sm:text-[52px] lg:text-[58px]">
                One Ecosystem
                <span className="block text-brand-bright">Connected Care</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 max-w-[520px] text-[16px] leading-[1.75] sm:text-[18px]">
                A connected healthcare ecosystem bringing patients, physicians, care managers and healthcare services together through one integrated experience.
              </p>
            </Reveal>
          </div>

          <Reveal dir="zoom" delay={150}>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px]">
              <div className="absolute inset-[8%] animate-pulse rounded-full bg-violet-400/40 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-white shadow-lift sm:h-28 sm:w-28">
                <img src={logo} alt="Telth logo" className="h-9 w-full object-contain" />
              </div>
              {ORBIT.map((o, i) => (
                <div key={o.title} className={`absolute ${o.pos} w-[104px] sm:w-[124px]`} style={{ animation: `${i % 2 ? "floatAlt" : "float"} ${8 + i}s ease-in-out infinite` }}>
                  <div className="rounded-2xl bg-white/85 p-3 text-center shadow-card backdrop-blur">
                    <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <o.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <p className="mt-1.5 font-franklin text-[12.5px] font-bold text-ink">{o.title}</p>
                    <p className="text-[11px] leading-tight text-muted">{o.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------- core solutions ---------- */}
      <Section tone="soft">
        <Container>
          <SectionTitle center eyebrow="Core Solutions" title="Built for Every Side of Care" text="Four interconnected products designed to serve every role in the healthcare journey." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 120}>
                <article className="card-hover group flex h-full flex-col overflow-hidden rounded-[22px] border border-slate-100 bg-white shadow-card">
                  <div className="img-zoom relative aspect-[2144/832] overflow-hidden bg-[#0b1a33]">
                    <img src={p.img} alt={`${p.title} preview`} loading="lazy" className="h-full w-full object-cover object-top" />
                    <span className="absolute left-4 top-3 font-franklin text-[12px] font-semibold text-white/70">{p.n}</span>
                    <span className={`absolute right-4 top-3 rounded-full px-3 py-1 text-[11.5px] font-bold text-white ${p.chipCls}`}>{p.chip}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-[20px] font-bold leading-snug">{p.title}</h3>
                    <p className="mt-2.5 flex-1 text-[14.5px] leading-[1.7] text-muted">{p.text}</p>
                    <div className="mt-5"><TextLink to={p.to}>{p.cta}</TextLink></div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- suite ---------- */}
      <Section>
        <Container>
          <SectionTitle center eyebrow="Telth Ecosystem" title="Everything Healthcare, All in One Place" text="A unified suite of products designed for modern healthcare — payments, marketplace, rewards, and wellness traceability." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {SUITE.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <div className="card-hover h-full overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-card">
                  <div className={`flex h-[130px] items-center justify-center bg-gradient-to-br ${s.tile}`}>
                    <s.icon className="h-14 w-14 text-ink/70 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.3} aria-hidden="true" />
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
          { title: "Experience the T-Mart", cta: "Explore T-Mart", to: EXTERNAL.tmart, bg: IMG.ecoTmart },
          { title: "Experience Natlife Product", cta: "Explore Natlife", to: EXTERNAL.natlife, bg: IMG.ecoNatlife },
        ].map((c, i) => (
          <Reveal key={c.title} dir="zoom" delay={i * 120}>
            <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-[24px] bg-[#0F172A] px-6 py-14 text-center sm:rounded-[32px]">
              <img src={c.bg} alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
              <div className="relative">
                <p className="font-open text-[13px] font-bold uppercase tracking-[0.12em] text-sky-300">Get Started</p>
                <h2 className="mx-auto mt-3 max-w-md text-balance font-franklin text-[28px] font-semibold leading-tight !text-white sm:text-[38px]">{c.title}</h2>
                <div className="mt-8"><Btn to={c.to}>{c.cta}</Btn></div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
