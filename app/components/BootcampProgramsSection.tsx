"use client";

import Link from "next/link";
import { bootcampPrograms } from "@/lib/bootcamp-programs";
import { useMemo, useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function BootcampProgramsSection() {
  const enabledTracks = new Set([
    "Builder Track",
    "Designer Track",
    "Analyst Track",
    "Operator Track",
    "Marketing Track",
  ]);
  const [activeTrack, setActiveTrack] = useState(bootcampPrograms[0].id);
  const activeProgram = useMemo(
    () => bootcampPrograms.find((program) => program.id === activeTrack)!,
    [activeTrack],
  );
  const isCurriculumAvailable = activeProgram.id === "Builder Track";

  return (
    <AnimatedSection id="bootcamp" className="border-b border-white/5 bg-ebony/90 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="space-y-5 lg:w-1/3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-intl-orange">
              Bootcamps Powered by the DOGM.AI System
            </p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Choose your track. Build real projects. Become AI-native.
            </h2>
            <p className="text-sm text-slate-300">
              Each track pairs AI copilots with mentor critiques and weekly outcomes. Pick the craft
              you want to master—Builder, Designer, Analyst, or Execution—and the loop adapts to you.
            </p>
            <div className="space-y-3">
              {bootcampPrograms.map((program) => {
                const isEnabled = enabledTracks.has(program.id);
                const isActive = activeTrack === program.id;
                return (
                  <button
                    key={program.id}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
                      isActive
                        ? "border-intl-orange/60 bg-intl-orange/10 text-white"
                        : "border-white/10 bg-black/30 text-slate-300"
                    } ${isEnabled ? "hover:border-white/30" : "cursor-not-allowed opacity-50"}`}
                    onClick={() => {
                      if (isEnabled) setActiveTrack(program.id);
                    }}
                    disabled={!isEnabled}
                  >
                    <span className="min-w-[50%]">{program.id}</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400 text-right">
                      {isEnabled ? program.duration : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:w-2/3">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/70 via-black/80 to-black/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
              <div className="pointer-events-none absolute inset-px rounded-[calc(1.5rem-4px)] border border-white/5 opacity-40 transition duration-300 group-hover:opacity-70" />
              <div className="relative z-10 flex h-full flex-col gap-4">
                <div className="mb-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="inline-flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${activeProgram.dotClass}`} />
                    {activeProgram.intro}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${activeProgram.badgeClass}`}
                  >
                    {activeProgram.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{activeProgram.title}</h3>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                  <span className="rounded-full border border-white/10 px-2 py-0.5">
                    {activeProgram.duration}
                  </span>
                  {activeProgram.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-800/60 bg-black/30 px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p
                  className="text-sm text-slate-300"
                  dangerouslySetInnerHTML={{ __html: activeProgram.description }}
                />
                {isCurriculumAvailable ? (
                  <Link
                    href={activeProgram.buttonHref ?? "/apply#apply-form"}
                    className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-bold shadow-lg transition-all duration-200 hover:scale-105 ${activeProgram.buttonClass}`}
                  >
                    {activeProgram.buttonText}
                  </Link>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-wide text-slate-400 shadow-inner">
                    Coming soon
                  </span>
                )}

                <div className="border-t border-white/5 pt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {activeProgram.curriculumLabel}
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[11px] text-slate-400">
                    {activeProgram.curriculum.map((item) => (
                      <li key={item.title}>
                        {item.title}
                        <br />
                        <span className="text-slate-500">{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/5 pt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {activeProgram.stackLabel}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-400">
                    {activeProgram.stackItems.map((stack) => (
                      <li key={stack}>{stack}</li>
                    ))}
                  </ul>
                </div>

                <p className="mt-auto pt-4 text-[11px] text-slate-400">
                  {activeProgram.capstone}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
