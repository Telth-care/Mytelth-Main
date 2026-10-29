import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm } from "../lib/api";
import { ROUTES } from "../lib/links";

type Props = {
  title: string;
  buttonLabel: string;
  enquiryType?: string;
  solutionOptions?: string[];
};

const inputClass = "mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[12px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100";

export default function TechnologyEnquiryForm({ title, buttonLabel, enquiryType = "Technology / MedPreneur", solutionOptions = [] }: Props) {
  const navigate = useNavigate();
  const [fields, setFields] = useState({ fullName: "", email: "", phone: "", organisation: "", solution: "", message: "", consent: false });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const update = (key: keyof typeof fields, value: string | boolean) => setFields((current) => ({ ...current, [key]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!fields.consent) {
      setError("Please consent to processing your information before sending.");
      return;
    }
    if (fields.message.trim().length < 10) {
      setError("Please add a little more detail (at least 10 characters).");
      return;
    }
    setSubmitting(true);
    try {
      await submitContactForm({
        fullName: fields.fullName.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        organisation: fields.organisation.trim(),
        country: "",
        contactMethod: "Email",
        enquiryType,
        role: "Technology or industry partner",
        message: [fields.solution && `Selected solution: ${fields.solution}`, fields.message.trim()].filter(Boolean).join("\n\n"),
      });
      navigate(ROUTES.enquirySubmitted, { state: { origin: "contact" } });
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "We couldn't send your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return <form onSubmit={submit} className="rounded-2xl bg-white p-5 text-slate-900 shadow-xl sm:p-7" noValidate>
    <h3 className="font-franklin text-xl font-semibold">{title}</h3>
    <div className="mt-5 grid gap-x-4 gap-y-3 sm:grid-cols-2">
      <label className="text-[11px] font-medium text-slate-700">Full Name *<input required autoComplete="name" value={fields.fullName} onChange={(e) => update("fullName", e.target.value)} className={inputClass} placeholder="Your full name" /></label>
      <label className="text-[11px] font-medium text-slate-700">Work Email *<input required type="email" autoComplete="email" value={fields.email} onChange={(e) => update("email", e.target.value)} className={inputClass} placeholder="your@email.com" /></label>
      <label className="text-[11px] font-medium text-slate-700">Phone Number<input type="tel" autoComplete="tel" value={fields.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} placeholder="+1 (optional)" /></label>
      <label className="text-[11px] font-medium text-slate-700">Organization / Hospital / Clinic<input autoComplete="organization" value={fields.organisation} onChange={(e) => update("organisation", e.target.value)} className={inputClass} placeholder="Organization or region" /></label>
      {solutionOptions.length > 0 && <label className="text-[11px] font-medium text-slate-700 sm:col-span-2">Select a TELTH solution<select value={fields.solution} onChange={(e) => update("solution", e.target.value)} className={inputClass}><option value="">Select solution</option>{solutionOptions.map((solution) => <option key={solution}>{solution}</option>)}</select></label>}
      <label className="text-[11px] font-medium text-slate-700 sm:col-span-2">Location, requirement and proposed deployment *<textarea required minLength={10} rows={4} value={fields.message} onChange={(e) => update("message", e.target.value)} className={`${inputClass} resize-y`} placeholder="Tell us what you would like to discuss" /></label>
    </div>
    <label className="mt-4 flex items-start gap-2 text-[10px] leading-4 text-slate-500"><input type="checkbox" checked={fields.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-0.5 accent-blue-600" /><span>I consent to TELTH processing my information to respond to this request, in accordance with applicable data-protection regulations.</span></label>
    {error && <p role="alert" className="mt-3 flex items-start gap-2 text-[11px] text-red-600"><AlertCircle className="h-4 w-4 flex-none"/>{error}</p>}
    <div className="mt-4 flex justify-end"><button type="submit" disabled={submitting} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-brand to-brand-dark px-6 text-[12px] font-bold text-white shadow-md transition hover:brightness-105 disabled:cursor-wait disabled:opacity-70">{submitting && <Loader2 className="h-4 w-4 animate-spin"/>}{submitting ? "Sending…" : buttonLabel}</button></div>
  </form>;
}
