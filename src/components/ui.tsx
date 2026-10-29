import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import { isExternal } from "../lib/links";

/* ------------------------------------------------------------------ *
 *  Reveal – fades/slides content in once, when it scrolls into view  *
 * ------------------------------------------------------------------ */
export function Reveal({
  children,
  dir = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  dir?: "up" | "left" | "right" | "zoom";
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return setSeen(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-dir={dir === "up" ? undefined : dir}
      style={{ "--d": `${delay}ms` } as CSSProperties}
      className={`reveal ${seen ? "is-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ *
 *  Layout helpers                                                     *
 * ------------------------------------------------------------------ */
export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>
);

export function Section({
  children,
  tone = "white",
  className = "",
  bg,
  id,
}: {
  children: ReactNode;
  tone?: "white" | "soft" | "dark";
  className?: string;
  bg?: string;
  id?: string;
}) {
  const [backgroundFailed, setBackgroundFailed] = useState(false);
  useEffect(() => setBackgroundFailed(false), [bg]);
  const base =
    tone === "dark" ? "bg-[#050A18] text-white" : tone === "soft" ? "bg-soft" : "bg-white";
  return (
    <section id={id} className={`relative overflow-hidden py-16 sm:py-20 lg:py-24 ${base} ${className}`}>
      {bg && (
        <>
          {backgroundFailed ? (
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(37,99,235,.16),transparent_42%),radial-gradient(ellipse_at_80%_70%,rgba(20,184,166,.12),transparent_38%)]" />
          ) : (
            <img src={bg} alt="" loading="lazy" onError={() => setBackgroundFailed(true)} className="bg-drift pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050A18]/70 via-transparent to-[#050A18]/70" />
        </>
      )}
      <div className="relative">{children}</div>
    </section>
  );
}

export const Eyebrow = ({ children, light = false, center = false }: { children: ReactNode; light?: boolean; center?: boolean }) => (
  <p
    className={`font-open text-[12.5px] font-bold uppercase tracking-[0.12em] sm:text-[13.5px] ${
      light ? "text-sky-300" : "text-brand"
    } ${center ? "text-center" : ""}`}
  >
    {children}
  </p>
);

export function SectionTitle({
  eyebrow,
  title,
  text,
  center = false,
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  center?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow light={light} center={center}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-2.5 font-franklin text-[28px] font-semibold leading-[1.2] sm:text-[34px] lg:text-[38px] ${
          light ? "!text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-[15.5px] leading-[1.75] sm:text-[16.5px] ${light ? "text-slate-300" : "text-body"}`}>{text}</p>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ *
 *  Buttons – real links, so navigation, middle-click and a11y work   *
 * ------------------------------------------------------------------ */
type Variant = "primary" | "ghost" | "ghostLight" | "white";
const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-brand to-brand-dark text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,.7)] hover:shadow-[0_16px_32px_-10px_rgba(37,99,235,.8)]",
  ghost: "border border-slate-300 bg-white text-ink hover:border-brand hover:text-brand hover:shadow-card",
  ghostLight: "border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:border-white/50",
  white: "bg-white text-ink hover:shadow-[0_14px_30px_-12px_rgba(255,255,255,.5)]",
};

export function Btn({
  to,
  children,
  variant = "primary",
  arrow = false,
  className = "",
  onClick,
  type,
}: {
  to?: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = `btn inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 py-3 font-open text-[15px] font-bold leading-6 sm:px-8 ${VARIANTS[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />}
    </>
  );
  if (!to) {
    return (
      <button type={type ?? "button"} onClick={onClick} className={cls}>
        {inner}
      </button>
    );
  }
  return isExternal(to) ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  );
}

/** Inline text link ("Explore →") */
export function TextLink({ to, children, light = false }: { to: string; children: ReactNode; light?: boolean }) {
  const cls = `btn group inline-flex items-center gap-1.5 font-open text-[15px] font-bold ${light ? "text-sky-300" : "text-brand"} hover:underline underline-offset-4`;
  const inner = (
    <>
      {children}
      <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
    </>
  );
  return isExternal(to) ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link to={to} className={cls}>{inner}</Link>
  );
}

/* ------------------------------------------------------------------ *
 *  Cards & small pieces                                               *
 * ------------------------------------------------------------------ */
export function IconBadge({ icon: Icon, className = "", tone = "blue" }: { icon: LucideIcon; className?: string; tone?: "blue" | "dark" }) {
  return (
    <span
      className={`icon-badge inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl ${
        tone === "dark" ? "bg-white/10 text-sky-300" : "bg-brand/[0.08] text-brand"
      } ${className}`}
    >
      <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
    </span>
  );
}

export function FeatureCard({
  icon,
  title,
  text,
  delay = 0,
  dark = false,
  to,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  delay?: number;
  dark?: boolean;
  to?: string;
}) {
  const body = (
    <div
      className={`card-hover h-full rounded-[20px] border p-6 sm:p-7 ${
        dark ? "border-white/10 bg-white/[0.06] backdrop-blur" : "border-slate-100 bg-white shadow-card"
      }`}
    >
      <IconBadge icon={icon} tone={dark ? "dark" : "blue"} />
      <h3 className={`mt-5 text-[18px] font-bold leading-snug ${dark ? "!text-white" : ""}`}>{title}</h3>
      <p className={`mt-2.5 text-[14.5px] leading-[1.7] ${dark ? "text-slate-300" : "text-muted"}`}>{text}</p>
      {to && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold text-brand">
          Explore <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      )}
    </div>
  );
  return (
    <Reveal delay={delay} className="h-full">
      {to ? (
        isExternal(to) ? (
          <a href={to} target="_blank" rel="noopener noreferrer" className="block h-full">{body}</a>
        ) : (
          <Link to={to} className="block h-full">{body}</Link>
        )
      ) : (
        body
      )}
    </Reveal>
  );
}

export function FeatureGrid({ children, cols = 3 }: { children: ReactNode; cols?: 2 | 3 | 4 }) {
  const c = cols === 4 ? "lg:grid-cols-4 sm:grid-cols-2" : cols === 2 ? "sm:grid-cols-2" : "lg:grid-cols-3 sm:grid-cols-2";
  return <div className={`mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 ${c}`}>{children}</div>;
}

export function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="space-y-3.5">
      {items.map((t, i) => (
        <Reveal as="li" key={t} delay={i * 70} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
            <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
          </span>
          <span className={`text-[15px] leading-[1.65] ${light ? "text-slate-200" : "text-body"}`}>{t}</span>
        </Reveal>
      ))}
    </ul>
  );
}

export function StepList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((t, i) => (
        <Reveal as="li" key={t} delay={i * 80} dir="right">
          <div className="card-hover flex items-center gap-4 rounded-2xl border border-slate-100 bg-soft px-4 py-3.5 sm:px-5">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand text-[13px] font-bold text-white">
              {i + 1}
            </span>
            <span className="font-franklin text-[15px] font-semibold leading-snug text-ink">{t}</span>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function Notice({ label, children, tone = "blue" }: { label: string; children: ReactNode; tone?: "blue" | "amber" | "violet" }) {
  const tones = {
    blue: "border-brand/25 bg-brand/[0.06]",
    amber: "border-amber-300/60 bg-amber-50",
    violet: "border-violet-300/60 bg-violet-50",
  } as const;
  return (
    <Reveal>
      <div className={`rounded-2xl border px-5 py-4 text-[14.5px] leading-[1.7] text-body sm:px-7 sm:py-5 ${tones[tone]}`}>
        <strong className="font-franklin font-bold text-ink">{label}</strong> {children}
      </div>
    </Reveal>
  );
}

/** Two-column row; stacks on mobile. */
export function Split({
  left,
  right,
  reverse = false,
  center = true,
}: {
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 ${center ? "lg:items-center" : "lg:items-start"}`}>
      <div className={reverse ? "lg:order-2" : ""}>{left}</div>
      <div className={reverse ? "lg:order-1" : ""}>{right}</div>
    </div>
  );
}

export function Pill({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "green" | "amber" | "violet" | "slate" }) {
  const t = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    violet: "bg-violet-50 text-violet-700",
    slate: "bg-slate-100 text-slate-600",
  }[tone];
  return <span className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold ${t}`}>{children}</span>;
}
