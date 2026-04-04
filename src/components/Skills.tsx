import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
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
