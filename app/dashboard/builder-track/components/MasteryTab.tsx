import React from "react";

type MasteryPath = { label: string; desc: string; weeks: number[] };

type MasteryTabProps = {
  masteryPaths: MasteryPath[];
  weekCompletion: Record<number, boolean>;
};

const MasteryTab: React.FC<MasteryTabProps> = ({ masteryPaths, weekCompletion }) => {
  const completionForRange = (weeks: number[]) => {
    const done = weeks.filter((week) => weekCompletion[week]).length;
    return Math.round((done / weeks.length) * 100);
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[1.7fr,1.3fr]">
      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-sm font-semibold mb-1">Mastery Paths</h2>
          <p className="text-[11px] text-slate-400 mb-3">Progress auto-updates based on completed weeks.</p>
          <div className="space-y-3">
            {masteryPaths.map((m) => {
              const percent = completionForRange(m.weeks);
              return (
                <div key={m.label} className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                  <div className="text-xs font-semibold text-slate-50">{m.label}</div>
                  <p className="text-[11px] text-slate-400">{m.desc}</p>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-400 to-emerald-400" style={{ width: `${percent}%` }} />
                  </div>
                  <div className="text-[10px] text-slate-500">Progress: {percent}% · Weeks {m.weeks.join(", ")}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-sm font-semibold mb-1">Monthly Milestone</h2>
          <p className="text-[11px] text-slate-400 mb-2">To complete the month:</p>
          <ul className="text-[11px] text-slate-300 space-y-1">
            <li>- Finish 3 module weeks</li>
            <li>- Finish 1 fundamentals block</li>
            <li>- Submit 1 reflection (Builder Signal)</li>
          </ul>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-sm font-semibold mb-2">Builder Signal (Reflection)</h2>
          <p className="text-[11px] text-slate-400">Log the reflection that powers your Growth, Mastery, and Intelligence graphs.</p>
          <ul className="text-[11px] text-slate-300 space-y-1 mt-2">
            <li>- What did I ship?</li>
            <li>- What failed or slowed down the flow?</li>
            <li>- How did AI reduce time or complexity?</li>
          </ul>
          <textarea
            className="mt-3 w-full rounded-xl border border-slate-800 bg-slate-950 p-2 text-[11px] text-slate-100 placeholder:text-slate-500 focus:outline-none"
            rows={4}
            placeholder="Today I shipped..., the stack broke at..., AI helped me by..."
          />
          <button className="mt-2 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-900">Save Reflection</button>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-sm font-semibold mb-2">Mastery Snapshot</h2>
          <p className="text-[11px] text-slate-400">You're at the beginning of a 12-week full-stack arc. Keep marking weeks done to move the bar from Discipline to Intelligence.</p>
          <div className="mt-3 h-2 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full w-[5%] bg-gradient-to-r from-indigo-500 to-emerald-400" />
          </div>
        </div>
      </aside>
    </section>
  );
};

export default MasteryTab;
