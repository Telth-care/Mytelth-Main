import type { ReactNode } from "react";
import { Btn, Reveal } from "./ui";
import { IMG } from "../assets/slots";

type Action = { label: string; to?: string };

/** Dark call-to-action card used at the bottom of every content page. */
export default function CtaBand({
  title,
  text,
  primary,
  secondary,
  bg = IMG.ctaAurora,
  children,
}: {
  title: ReactNode;
  text?: ReactNode;
  primary: Action;
  secondary?: Action;
  bg?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-3 py-14 sm:px-6 sm:py-20">
      <Reveal dir="zoom">
        <div className="cta-card relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#0F172A_0%,#1E3A5F_50%,#0F172A_100%)] px-6 py-14 text-center sm:rounded-[32px] sm:px-12 sm:py-20">
          <img src={bg} alt="" aria-hidden="true" loading="lazy" className="bg-drift pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-60 w-60 animate-floatAlt rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 top-0 h-60 w-60 animate-float rounded-full bg-brand/30 blur-3xl" />
          <div className="relative mx-auto max-w-[760px]">
            <h2 className="text-balance font-franklin text-[28px] font-bold leading-[1.2] !text-white sm:text-[40px] lg:text-[50px]">{title}</h2>
            {text && <p className="mx-auto mt-4 max-w-[560px] text-[15.5px] leading-[1.7] text-slate-300 sm:text-[18px]">{text}</p>}
            {children}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Btn to={primary.to}>{primary.label}</Btn>
              {secondary && (
                <Btn to={secondary.to} variant="ghostLight">
                  {secondary.label}
                </Btn>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
