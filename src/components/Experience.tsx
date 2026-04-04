import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-10">
        Experience
      </h2>
      <div className="space-y-10">
        {experience.map((job, i) => (
          <div key={i} className="relative pl-5 border-l border-stone-200">
            <div className="absolute -left-[3px] top-[5px] w-1.5 h-1.5 rounded-full bg-amber-600/70" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-sm font-medium text-stone-700 leading-snug">
                  {job.role}
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  {job.company} &middot; {job.location}
                </p>
              </div>
              <span className="text-xs text-stone-400 flex-shrink-0">
                {job.startDate} — {job.endDate}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {job.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="text-xs leading-relaxed text-stone-500 pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-px before:bg-stone-300"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
