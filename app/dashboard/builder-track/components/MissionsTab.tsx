import React from "react";
import { WeekModule } from "../domain-tracks";

type MissionsTabProps = {
  curriculum: WeekModule[];
  weekCompletion: Record<number, boolean>;
  onToggleWeek: (week: number) => void;
};

const sprintBoardItems = [
  "Define the slice (UI -> API -> DB)",
  "Build baseline UI",
  "Add API endpoint for the flow",
  "Add database model updates",
  "Add minimal telemetry logs",
  "Test the flow end-to-end",
  "Record a short Loom for proof",
];

const dayOneRhythm = [
  "Orientation: Full-Stack E-commerce Builder",
  "AI Readiness Lab: set up logs, metrics, and copilot",
  "End-of-Day Reflection: what worked, blockers, next steps",
];

const MissionsTab: React.FC<MissionsTabProps> = ({ curriculum, weekCompletion, onToggleWeek }) => (
  <section className="grid gap-6 lg:grid-cols-[1.7fr,1.3fr]">
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-2">Weekly Missions</h2>
        <p className="text-[11px] text-slate-400 mb-4">Each week produces a working e-commerce feature with a deployed output.</p>
        <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
          {curriculum.map((module) => {
            const isCompleted = Boolean(weekCompletion[module.week]);
            const statusText = isCompleted ? "Completed" : "Active";

            return (
              <div key={module.week} className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-[11px] text-slate-300 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-slate-50">
                    Week {module.week} – {module.title}
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      isCompleted ? "bg-emerald-400/10 text-emerald-200 border border-emerald-500/40" : "bg-slate-900 text-slate-500 border border-slate-700"
                    }`}
                  >
                    Status: {statusText}
                  </span>
                </div>
                <p className="text-slate-400">Summary: {module.summary}</p>
                <p className="text-slate-100">Deliverable: {module.deliverable}</p>
                {!isCompleted && (
                  <button
                    onClick={() => onToggleWeek(module.week)}
                    className="mt-1 text-[10px] rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-slate-500"
                  >
                    Mark week complete
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3">
        <div>
          <h2 className="text-sm font-semibold">Sprint Board (Day 1)</h2>
          <p className="text-[11px] text-slate-400">Use this checklist to ship the first thin slice.</p>
        </div>
        <ul className="text-[11px] text-slate-300 space-y-1.5 list-disc ml-4">
          {sprintBoardItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>

    <aside className="space-y-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-sm font-semibold mb-2">Day 1 Rhythm</h2>
        <ul className="text-[11px] text-slate-300 space-y-1.5 list-disc ml-4">
          {dayOneRhythm.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </aside>
  </section>
);

export default MissionsTab;
