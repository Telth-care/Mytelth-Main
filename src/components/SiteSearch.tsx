import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { SEARCH_PAGES } from "../lib/links";

export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrap = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const results = useMemo(() => {
    const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];

    return SEARCH_PAGES
      .map((page) => ({
        ...page,
        score: terms.reduce((score, term) => {
          const label = page.label.toLocaleLowerCase();
          const keywords = page.keywords.toLocaleLowerCase();
          const path = page.to.toLocaleLowerCase();
          return score + (label === term ? 4 : label.includes(term) ? 2 : 0)
            + (keywords.includes(term) ? 1 : 0)
            + (path.includes(term) ? 1 : 0);
        }, 0),
      }))
      .filter((page) => page.score > 0)
      .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label))
      .slice(0, 7);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    const away = (event: MouseEvent) => {
      if (!wrap.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", away);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("mousedown", away);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setQuery("");
  }, [pathname]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (results[0]) {
      navigate(results[0].to);
      setOpen(false);
    }
  };

  return (
    <div ref={wrap} className="relative">
      <button
        type="button"
        aria-label={open ? "Close search" : "Search this website"}
        aria-expanded={open}
        aria-controls="site-search-panel"
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-white"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Search className="h-5 w-5" aria-hidden="true" />}
      </button>
      {open && (
        <div
          id="site-search-panel"
          className="absolute right-0 top-[calc(100%+12px)] z-50 w-[min(90vw,24rem)] rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_24px_60px_-20px_rgba(15,23,42,.35)]"
        >
          <form role="search" onSubmit={submit}>
            <label htmlFor="site-search-input" className="sr-only">Search pages</label>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
              <Search className="h-4 w-4 flex-none text-muted" aria-hidden="true" />
              <input
                ref={input}
                id="site-search-input"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pages..."
                autoComplete="off"
                className="min-h-11 w-full bg-transparent font-franklin text-sm text-ink outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                disabled={!results.length}
                className="rounded-lg bg-brand px-3 py-1.5 font-franklin text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                Go
              </button>
            </div>
          </form>
          <div aria-live="polite" className="mt-2">
            {!query.trim() ? (
              <p className="px-2 py-3 text-sm text-muted">Search for pages, services, or topics.</p>
            ) : results.length ? (
              <>
                <p className="px-2 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">Pages</p>
                <ul>
                  {results.map((result) => (
                    <li key={result.to}>
                      <Link
                        to={result.to}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-3 py-2.5 font-franklin text-sm font-medium text-ink transition-colors hover:bg-soft focus:bg-soft focus:outline-none"
                      >
                        {result.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="px-2 py-3 text-sm text-muted">No matching pages. Try a different search.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
