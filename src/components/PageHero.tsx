import type { ReactNode } from "react";
import { IMG } from "../assets/slots";
import { Reveal } from "./ui";

/** Rounded hero panel used by the content pages: eyebrow, headline, intro, optional actions. */
export default function PageHero({
  eyebrow,
  title,
  text,
  children,
  titleClassName = "",
  contentClassName = "",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
  titleClassName?: string;
  contentClassName?: string;
}) {
  return (
    <div className="mx-auto mt-3 w-full max-w-[1332px] px-3 sm:px-5">
      <div className="relative overflow-hidden rounded-[22px] bg-soft px-5 py-14 sm:rounded-[27px] sm:px-10 sm:py-20 lg:py-24">
        <img src={IMG.blobTR} alt="" aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-6 w-24 animate-float opacity-70 sm:-right-4 sm:-top-4 sm:w-36 lg:w-44" />
        <img src={IMG.blobDL} alt="" aria-hidden="true"
          className="pointer-events-none absolute -bottom-5 -left-5 w-24 animate-floatAlt opacity-40 sm:w-36 lg:w-44" />
        <div className={`relative mx-auto max-w-[1000px] text-center ${contentClassName}`}>
          <Reveal>
            <p className="font-open text-[12.5px] font-bold uppercase tracking-[0.14em] text-brand sm:text-[14px]">{eyebrow}</p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className={`mt-3 text-balance font-franklin text-[32px] font-semibold leading-[1.15] text-ink sm:text-[42px] lg:text-[50px] ${titleClassName}`}>
              {title}
            </h1>
          </Reveal>
          {text && (
            <Reveal delay={180}>
              <p className="mx-auto mt-5 max-w-[820px] text-[15.5px] leading-[1.75] text-body sm:mt-6 sm:text-[17px] lg:text-[18px]">{text}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={260}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
