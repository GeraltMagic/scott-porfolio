import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="bg-stone-100/50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-8">
          Education
        </h2>
        <div className="space-y-5">
          {education.map((entry, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <div>
                <h3 className="text-sm font-medium text-stone-700">
                  {entry.degree}
                </h3>
                <p className="text-xs text-stone-400">{entry.school}</p>
              </div>
              <span className="text-xs text-stone-400 flex-shrink-0">
                {entry.dates}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
