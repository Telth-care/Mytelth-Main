import { Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";
import logo from "../assets/Layer 2.png";
import { EXTERNAL, FOOTER_COLUMNS, LEGAL, ROUTES, isExternal } from "../lib/links";

const linkCls = "foot-link font-open text-[14px] leading-[21px] text-slate-200/90";

export default function Footer() {
  return (
    <footer className="relative mt-0 overflow-hidden bg-[linear-gradient(134deg,#0A1628_0%,#163159_48%,#244E8E_100%)] text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8 lg:px-10 lg:py-16">
        <div>
          <Link to={ROUTES.home} aria-label="Telth – home" className="inline-block">
            <img 
              src={logo}
              alt="Telth logo"
              className="h-9 w-auto sm:h-10"
            />
          </Link>
          <p className="mt-5 max-w-[300px] font-open text-[14px] leading-[22px] text-slate-200/90">
            One intelligent ecosystem for every stage of care. Connecting healthcare for a better tomorrow.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={EXTERNAL.x} target="_blank" rel="noopener noreferrer" aria-label="Telth on X"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:-translate-y-1 hover:bg-white/25">
              <Twitter className="h-[18px] w-[18px]" />
            </a>
            <a href={EXTERNAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Telth on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:-translate-y-1 hover:bg-white/25">
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="font-franklin text-[14px] font-bold tracking-[0.02em] !text-white">{col.title}</h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  {isExternal(l.to) ? (
                    <a href={l.to} target="_blank" rel="noopener noreferrer" className={linkCls}>{l.label}</a>
                  ) : (
                    <Link to={l.to} className={linkCls}>{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="font-open text-[13px] text-slate-300">
            © {new Date().getFullYear()} Telth · myTelth.com · All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="font-open text-[13px] text-slate-300 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
