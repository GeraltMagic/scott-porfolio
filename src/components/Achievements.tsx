import { selectedAchievements } from "@/data/resume";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-stone-100/50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-8">
          Selected Achievements
        </h2>
        <ul className="space-y-5">
          {selectedAchievements.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-600/70 flex-shrink-0" />
              <span className="text-sm leading-relaxed text-stone-600">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
