import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

const control =
  "block w-full rounded-xl border border-slate-200 bg-white px-4 font-open text-[14.5px] text-ink outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-brand focus:ring-4 focus:ring-brand/15";

export function Field({
  label,
  required,
  hint,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block font-open text-[13.5px] font-semibold text-slate-700">
        {label}
        {required && <span className="ml-1 text-red-500" aria-hidden="true">*</span>}
      </span>
      {children}
      {hint && <span className="mt-1 block text-[12px] text-muted">{hint}</span>}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${control} h-12 ${props.className ?? ""}`} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${control} min-h-[130px] resize-y py-3 ${props.className ?? ""}`} />;
}

export function Select({
  options,
  placeholder,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement> & { options: readonly string[]; placeholder: string }) {
  return (
    <span className="relative block">
      <select
        {...rest}
        defaultValue={rest.defaultValue ?? ""}
        className={`${control} h-12 cursor-pointer appearance-none pr-11 invalid:text-slate-400 ${rest.className ?? ""}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
    </span>
  );
}

export function Consent({
  name = "consent",
  children,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { name?: string; children: ReactNode }) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        name={name}
        required
        {...props}
        className={`mt-1 h-[18px] w-[18px] flex-none cursor-pointer rounded border-slate-400 accent-brand ${props.className ?? ""}`}
      />
      <span className="text-[13.5px] leading-[1.7] text-body">{children}</span>
    </label>
  );
}
