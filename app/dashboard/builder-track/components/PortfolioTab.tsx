import React from "react";

type PortfolioTabProps = {
  weekCompletion: Record<number, boolean>;
};

const caseStudies = [
  {
    title: "Case Study 1: E-commerce Baseline",
    weeksLabel: "Weeks 1-4",
    details: [
      "UI: product list, cart, checkout states",
      "API: cart + order routes",
      "DB: carts, orders",
      "Basic telemetry for errors + steps",
    ],
    weeks: [1, 2, 3, 4],
  },
  {
    title: "Case Study 2: Systems Upgrade",
    weeksLabel: "Weeks 5-8",
    details: ["Authentication", "Payment provider integration", "Webhooks", "Logs, metrics, traces"],
    weeks: [5, 6, 7, 8],
  },
  {
    title: "Case Study 3: Final Capstone",
    weeksLabel: "Weeks 9-12",
    details: ["End-to-end product", "Production deployment", "Monitoring + health checks", "Documentation + Loom demo"],
    weeks: [9, 10, 11, 12],
  },
];

const publicPortfolioItems = [
  "Live deployed app",
  "System diagram",
  "Telemetry screenshots",
  "API and DB design",
  "Loom walkthroughs",
  "Capstone report",
];

const PortfolioTab: React.FC<PortfolioTabProps> = ({ weekCompletion }) => {
  const completionForWeeks = (weeks: number[]) => {
    const done = weeks.filter((week) => weekCompletion[week]).length;
    return Math.round((done / weeks.length) * 100);
  };

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Portfolio Progress</div>
          <div className="mt-1 text-sm font-semibold text-slate-50">
            Track each case study as you progress through the 12-week bootcamp
          </div>
        </div>
        <button className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-900">Open Public Portfolio</button>
      </div>

      <div className="space-y-4 text-[11px] text-slate-300">
        {caseStudies.map((study) => {
          const percent = completionForWeeks(study.weeks);
          return (
            <div key={study.title} className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
              <div className="text-xs font-semibold text-slate-50">{study.title}</div>
              <div className="text-[10px] text-slate-500">{study.weeksLabel}</div>
              <ul className="list-disc ml-4 space-y-1">
                {study.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400" style={{ width: `${percent}%` }} />
              </div>
              <div className="text-[10px] text-slate-500">Progress: {percent}%</div>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-2 text-[11px] text-slate-300">
        <div className="text-sm font-semibold text-slate-50">Public Portfolio</div>
        <p className="text-slate-400">Your final link shows:</p>
        <ul className="list-disc ml-4 space-y-1">
          {publicPortfolioItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioTab;
