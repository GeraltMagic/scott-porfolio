import { aiProjects } from "@/data/resume";

export default function AIProjects() {
  return (
    <section id="projects" className="bg-stone-100/50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-8">
          Independent AI Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiProjects.map((project) => (
            <div
              key={project.title}
              className="p-5 bg-white/60 rounded-lg border border-stone-200/60 hover:border-stone-300/80 transition-colors duration-300"
            >
              <h3 className="text-sm font-medium text-stone-700">
                {project.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
