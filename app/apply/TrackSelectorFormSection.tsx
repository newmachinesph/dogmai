'use client';

import { useState } from "react";
import { bootcampPrograms } from "@/lib/bootcamp-programs";
import ApplyForm from "./ApplyForm";
import ReadinessGuide from "./ReadinessGuide";

export default function TrackSelectorFormSection() {
  const builderProgram = bootcampPrograms.find((program) => program.id === "Builder Track");
  const trackOptions = builderProgram ? [builderProgram.id] : ["Builder Track"];
  const fallbackTrack = trackOptions[0];
  const [selectedTrack, setSelectedTrack] = useState(fallbackTrack);
  const resolvedOptions = trackOptions;

  const handleTrackChange = (track: string) => {
    if (track === "Builder Track") {
      setSelectedTrack(track);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#05060b] via-black/75 to-slate-950/70 p-10 shadow-[0_35px_95px_rgba(0,0,0,0.65)]">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-intl-orange/80">Pick your starter lane</p>
          <h2 className="font-heading text-3xl font-bold text-white">Builder Track applications now open.</h2>
          <p className="text-sm text-slate-300">
            Daily learning sprints, weekly outcome reviews, and monthly mastery milestones power every track. Choose the lane that matches how you create leverage today.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {builderProgram ? (
            <label
              key={builderProgram.id}
              className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/55 p-6 transition hover:border-intl-orange/60"
            >
                <input
                  type="radio"
                  name="trackInterest"
                  value={builderProgram.id}
                  form="apply-form"
                  checked={selectedTrack === builderProgram.id}
                  onChange={() => handleTrackChange(builderProgram.id)}
                  className="peer absolute right-6 top-6 h-5 w-5 cursor-pointer appearance-none rounded-full border border-white/30 bg-transparent transition checked:border-none checked:bg-intl-orange"
                />
              <div className="flex flex-col space-y-2 pr-10">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-400">
                  <span>{builderProgram.id}</span>
                  <span>{builderProgram.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{builderProgram.title}</h3>
                <p className="text-sm text-slate-300" dangerouslySetInnerHTML={{ __html: builderProgram.description }} />
              </div>
              <ul className="space-y-2 text-sm text-slate-200">
                {builderProgram.tags.slice(0, 2).map((tag) => (
                  <li key={tag} className="flex items-center gap-2">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-intl-orange" />
                    {tag}
                  </li>
                ))}
                <li className="text-slate-400">Capstone: {builderProgram.capstone}</li>
              </ul>
              <p className="text-xs text-slate-400">
                {builderProgram.curriculum[0]?.title ?? "Weekly coaching"} - Daily structure -&gt; weekly proof -&gt; monthly mastery.
              </p>
            </label>
          ) : null}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">
          Builder Track is the only cohort currently accepting applications. Mention &quot;still deciding&quot; in your notes if you want guidance for other tracks.
        </p>
      </section>

      <section className="rounded-[32px] border border-white/10 bg-gradient-to-b from-black/80 via-slate-950/70 to-black/75 p-10 shadow-[0_35px_95px_rgba(0,0,0,0.65)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cerulean">Application form</p>
            <h2 className="font-heading text-3xl font-bold text-white">Tell us where you create leverage.</h2>
            <p className="text-sm text-slate-300">
              Submit the context below. We review every application manually, so give us links to artifacts, dashboards, or code you are proud of. We reply with the readiness sprint + interview scheduling link.
            </p>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Response time</p>
              <p className="mt-2 text-lg font-semibold text-white">&lt; 24 hours on weekdays</p>
              <p className="mt-2 text-xs text-slate-500">Need priority review for a team? Mention it in the notes or email hello@dogm.ai.</p>
            </div>
            <ReadinessGuide />
          </div>
          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950/85 to-black/90 p-8">
            <div className="pointer-events-none absolute inset-px rounded-[30px] border border-white/5 opacity-30 transition duration-300 group-hover:opacity-60" />
            <ApplyForm selectedTrack={selectedTrack} onTrackChange={handleTrackChange} trackOptions={resolvedOptions} />
          </div>
        </div>
      </section>
    </>
  );
}
