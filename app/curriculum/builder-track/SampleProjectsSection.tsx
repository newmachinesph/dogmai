'use client';

import Link from "next/link";
import { useState } from "react";

export type SampleProject = {
  title: string;
  description: string;
  images: string[];
  highlights: string[];
  impact: string[];
};

type Props = {
  projects: SampleProject[];
};

export default function SampleProjectsSection({ projects }: Props) {
  const [activeProject, setActiveProject] = useState<SampleProject | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <>
      <section className="rounded-[32px] border border-white/10 bg-black/60 p-10 shadow-[0_30px_85px_rgba(0,0,0,0.6)]">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-intl-orange/80">Sample Ecommerce Projects</p>
          <h2 className="text-3xl font-bold text-white">See the caliber of proof you’ll produce.</h2>
          <p className="text-sm text-slate-300">These projects mirror the fidelity and structure of the deployable artifacts you ship throughout the track.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <button
              key={project.title}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-[28px] border border-white/10 bg-black/50 p-6 text-left shadow-[0_25px_60px_rgba(0,0,0,0.55)] transition hover:-translate-y-1 hover:border-intl-orange/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intl-orange"
              onClick={() => {
                setActiveProject(project);
                setActiveImageIndex(0);
              }}
            >
              <span className="sr-only">Open {project.title} details</span>
              <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-black to-slate-900">
                <img
                  src={project.images[0]}
                  alt={`${project.title} visual`}
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
                  <span>Viz-{index + 1}</span>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-[10px]">Tap to expand</span>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Project</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
              </div>
              <div className="mt-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-slate-400">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">Deliverable Snapshot</p>
                <p className="mt-1 text-sm text-white">{project.highlights.join(" · ")}</p>
                <p className="mt-2 text-[11px] text-slate-500">Click to review visuals and mission impact.</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative grid w-full max-w-5xl gap-6 rounded-[36px] border border-white/10 bg-slate-950/95 p-8 shadow-[0_55px_140px_rgba(0,0,0,0.85)] lg:grid-cols-[1.1fr_0.9fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg text-white transition hover:border-intl-orange hover:text-intl-orange"
              onClick={() => setActiveProject(null)}
              aria-label="Close project preview"
            >
              ×
            </button>
            <div className="space-y-4">
              <div className="space-y-3">
                <img
                  src={activeProject.images[activeImageIndex]}
                  alt={`${activeProject.title} visual ${activeImageIndex + 1}`}
                  className="h-72 w-full rounded-3xl border border-white/10 object-cover"
                />
                <div className="grid grid-cols-2 gap-3">
                  {activeProject.images.map((image, imageIndex) => (
                    <button
                      key={image}
                      type="button"
                      className={`relative h-32 rounded-2xl border ${
                        activeImageIndex === imageIndex ? "border-intl-orange" : "border-white/10"
                      } overflow-hidden`}
                      onClick={() => setActiveImageIndex(imageIndex)}
                    >
                      <img src={image} alt={`${activeProject.title} thumbnail ${imageIndex + 1}`} className="h-full w-full object-cover" />
                      {activeImageIndex === imageIndex && (
                        <span className="absolute inset-0 border-2 border-intl-orange/70" aria-hidden="true" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Visual reference only — final submissions use live data.</p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-intl-orange/80">Project</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{activeProject.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{activeProject.description}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">Key highlights</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {activeProject.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-intl-orange" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">Mission impact</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {activeProject.impact.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-cerulean" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/apply"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-intl-orange px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ebony shadow-[0_0_30px_rgba(250,84,4,0.55)] transition hover:-translate-y-0.5 hover:bg-orange-500"
                >
                  Start your project
                </Link>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-intl-orange hover:text-intl-orange"
                  onClick={() => setActiveProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
