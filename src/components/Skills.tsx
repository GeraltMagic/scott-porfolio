import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-8">
        Core Competencies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-medium text-stone-500 mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-stone-100 text-stone-500 text-[11px] rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
