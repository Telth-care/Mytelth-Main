import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Smartphone, Stethoscope, UserCheck } from "lucide-react";
import { LOGIN_LINKS, NAV, ROUTES, isExternal } from "../lib/links";
import logo from "../assets/telth-logo-name.png";

const LOGIN_ICONS = [Smartphone, Stethoscope, UserCheck];

function LoginMenu({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const away = (e: MouseEvent) => !wrap.current?.contains(e.target as Node) && setOpen(false);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", away);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", away);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    <div ref={wrap} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="btn inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-brand-bright px-6 font-franklin text-[14px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(11,95,255,.8)] hover:shadow-[0_12px_26px_-8px_rgba(11,95,255,.9)]"
      >
        Log in
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-64 animate-fadeIn rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(15,23,42,.35)]"
        >
          {LOGIN_LINKS.map((l, i) => {
            const Icon = LOGIN_ICONS[i];
            const body = (
              <>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span className="text-left">
                  <span className="block font-franklin text-[14px] font-semibold text-ink">{l.label}</span>
                  <span className="block text-[12px] text-muted">{l.hint}</span>
                </span>
              </>
            );
            const cls = "flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-soft";
            const done = () => {
              setOpen(false);
              onNavigate?.();
            };
            return isExternal(l.to) ? (
              <a key={l.label} role="menuitem" href={l.to} target="_blank" rel="noopener noreferrer" className={cls} onClick={done}>
                {body}
              </a>
            ) : (
              <Link key={l.label} role="menuitem" to={l.to} className={cls} onClick={done}>
                {body}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setDrawer(false), [pathname]);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  // Header is transparent with a fixed height of 78px (mobile) / 82px (sm+).
  // Hero sections pull up under it with `-mt-[78px] pt-[78px] sm:-mt-[82px] sm:pt-[82px]`
  // so their background covers the navbar.
  return (
    <header className="sticky top-0 z-50 min-h-[78px] px-3 pt-3 sm:min-h-[82px] sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-[1332px] items-center justify-between gap-4 rounded-full border border-sky-200/70 px-4 py-2.5 backdrop-blur-xl transition-shadow duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "bg-white/90 shadow-[0_14px_34px_-16px_rgba(15,23,42,.35)]" : "bg-sky-50/90"
        }`}
      >
        <Link to={ROUTES.home} aria-label="Telth – home" className="flex-none transition-transform hover:scale-[1.03]">
          <img 
            src={logo}
            alt="Telth logo"
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 xl:gap-10 lg:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end
              className={({ isActive }) =>
                `nav-link font-franklin text-[15px] font-medium transition-colors ${isActive ? "text-ink" : "text-[#576689] hover:text-ink"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <LoginMenu />
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-white lg:hidden"
            aria-label={drawer ? "Close menu" : "Open menu"}
            aria-expanded={drawer}
            aria-controls="mobile-menu"
            onClick={() => setDrawer((d) => !d)}
          >
            {drawer ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* mobile / tablet drawer */}
      <div
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-[1332px] origin-top overflow-hidden rounded-3xl border border-sky-200/70 bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,.4)] transition-all duration-300 lg:hidden ${
          drawer ? "max-h-[85vh] scale-100 opacity-100" : "pointer-events-none max-h-0 scale-95 border-transparent opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col p-3">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3.5 font-franklin text-[16px] font-medium transition-colors ${
                  isActive ? "bg-brand/10 text-brand" : "text-ink hover:bg-soft"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <div className="mt-2 border-t border-slate-100 px-1 pt-3">
            <p className="px-3 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">Log in</p>
            {LOGIN_LINKS.map((l) =>
              isExternal(l.to) ? (
                <a key={l.label} href={l.to} target="_blank" rel="noopener noreferrer" className="block rounded-2xl px-4 py-3 text-[15px] font-semibold text-ink hover:bg-soft">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} to={l.to} className="block rounded-2xl px-4 py-3 text-[15px] font-semibold text-ink hover:bg-soft">
                  {l.label}
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
