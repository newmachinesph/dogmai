export default function ReadinessGuide() {
  const checklist = [
    {
      title: "Warm-up week",
      detail: "We pair you with a mentor and a simple prompt sprint so you can practice before touching real deliverables.",
    },
    {
      title: "Beginner-friendly rituals",
      detail: "Expect 45-minute focus blocks, daily reflections, and office hours that explain every step without jargon.",
    },
    {
      title: "Proof, not pressure",
      detail: "You share the first artifact when you feel confident—we review it together and only then move into the core loop.",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-sm text-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-intl-orange/80">Readiness helper</p>
      <h3 className="mt-2 text-2xl font-semibold text-white">What to do before you hit submit.</h3>
      <p className="mt-2 text-sm text-slate-300">
        No AI scorecards. Just a quick checklist so you know you’re ready for your first week inside the cohort.
      </p>
      <ul className="mt-5 space-y-3">
        {checklist.map((item) => (
          <li key={item.title} className="rounded-2xl border border-white/10 bg-black/50 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-cerulean">{item.title}</p>
            <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-2xl border border-white/5 bg-black/30 p-4 text-xs text-slate-400">
        <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">Tip</p>
        <p className="mt-1 text-sm text-slate-200">
          Mention anything you’re nervous about in the notes field. We tailor the first assignments to your comfort zone.
        </p>
      </div>
    </div>
  );
}
