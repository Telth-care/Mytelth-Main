import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { X } from "lucide-react";
import PageHero from "./PageHero";
import CtaBand from "./CtaBand";
import { CheckList, Container, FeatureCard, FeatureGrid, Notice, Reveal, Section, SectionTitle, Split } from "./ui";
import { IMG } from "../assets/slots";

export type ThosVersionProps = {
  eyebrow: string;
  title: string;
  text: string;
  notice: { label: string; text: string; tone: "blue" | "amber" | "violet" };
  overview: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    aside?: { title: string; lead?: string; items: string[]; kind: "check" | "not" };
  };
  grid: { eyebrow: string; title: string; cols?: 2 | 3 | 4; items: { icon: LucideIcon; title: string; text: string }[] };
  principles?: { eyebrow: string; title: string; items: string[] };
  closing?: ReactNode;
  gridBg?: string;
  cta: { title: string; text: string; primary: { label: string; to: string }; secondary: { label: string; to: string }; bg?: string };
};

function NotList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((t, i) => (
        <Reveal as="li" key={t} delay={i * 70} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-rose-500/10 text-rose-600">
            <X className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
          </span>
          <span className="text-[15px] leading-[1.65] text-body">{t}</span>
        </Reveal>
      ))}
    </ul>
  );
}

export default function ThosVersion(p: ThosVersionProps) {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} text={p.text} />

      <div className="mx-auto mt-8 w-full max-w-[1100px] px-4 sm:px-6">
        <Notice label={p.notice.label} tone={p.notice.tone}>{p.notice.text}</Notice>
      </div>

      <Section>
        <Container>
          {p.overview.aside ? (
            <Split
              center={false}
              left={
                <div>
                  <SectionTitle eyebrow={p.overview.eyebrow} title={p.overview.title} />
                  {p.overview.paragraphs.map((t, i) => (
                    <Reveal key={i} delay={100 + i * 80}>
                      <p className="mt-5 text-[15.5px] leading-[1.8]">{t}</p>
                    </Reveal>
                  ))}
                </div>
              }
              right={
                <Reveal dir="right">
                  <div className="rounded-[22px] border border-slate-100 bg-soft p-6 sm:p-8">
                    <h3 className="text-[19px] font-semibold">{p.overview.aside.title}</h3>
                    {p.overview.aside.lead && <p className="mt-2 text-[14.5px] leading-[1.7]">{p.overview.aside.lead}</p>}
                    <div className="mt-5">
                      {p.overview.aside.kind === "not" ? <NotList items={p.overview.aside.items} /> : <CheckList items={p.overview.aside.items} />}
                    </div>
                  </div>
                </Reveal>
              }
            />
          ) : (
            <div className="mx-auto max-w-3xl text-center">
              <SectionTitle center eyebrow={p.overview.eyebrow} title={p.overview.title} />
              {p.overview.paragraphs.map((t, i) => (
                <Reveal key={i} delay={100 + i * 80}>
                  <p className="mt-5 text-[15.5px] leading-[1.8]">{t}</p>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <Section tone="dark" bg={p.gridBg ?? IMG.waveTealWide}>
        <Container>
          <SectionTitle center light eyebrow={p.grid.eyebrow} title={p.grid.title} />
          <FeatureGrid cols={p.grid.cols ?? 3}>
            {p.grid.items.map((it, i) => (
              <FeatureCard key={it.title} {...it} delay={(i % 3) * 100} />
            ))}
          </FeatureGrid>
          {p.closing && (
            <Reveal delay={150}>
              <p className="mx-auto mt-12 max-w-3xl text-center text-[15.5px] leading-[1.8] text-slate-300">{p.closing}</p>
            </Reveal>
          )}
        </Container>
      </Section>

      {p.principles && (
        <Section tone="soft">
          <Container>
            <SectionTitle center eyebrow={p.principles.eyebrow} title={p.principles.title} />
            <div className="mx-auto mt-10 max-w-3xl">
              <CheckList items={p.principles.items} />
            </div>
          </Container>
        </Section>
      )}

      <CtaBand {...p.cta} bg={p.cta.bg ?? IMG.ctaAuroraTall} />
    </>
  );
}
