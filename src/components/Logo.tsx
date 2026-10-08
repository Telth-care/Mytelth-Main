/** Telth mark + wordmark, drawn as SVG so it never depends on image files. */
export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const word = light ? "#FFFFFF" : "#0F172A";
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`} aria-label="Telth">
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`tl-${light ? "l" : "d"}`} x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6D28D9" />
            <stop offset="1" stopColor="#47117B" />
          </linearGradient>
        </defs>
        <rect width="38" height="38" rx="10" fill={`url(#tl-${light ? "l" : "d"})`} />
        <path d="M9 11.5h20v6.2h-6.9V29h-6.2V17.7H9z" fill="#fff" />
        <circle cx="29" cy="27.5" r="2.4" fill="#C4B5FD" />
      </svg>
      <span
        className="font-franklin text-[26px] font-bold leading-none tracking-[-0.02em]"
        style={{ color: word }}
      >
        telth
      </span>
    </span>
  );
}
