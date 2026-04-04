import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-10">
        Project Case Studies
      </h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group p-6 bg-white/60 rounded-lg border border-stone-200/60 hover:border-stone-300/80 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-sm font-medium text-stone-700">
                  {project.title}
                </h3>
                <p className="text-xs text-stone-400">{project.subtitle}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[11px] text-stone-400">
                  {project.role}
                </span>
                <span className="text-[11px] text-stone-300">
                  {project.year}
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-stone-500 mb-2">
              {project.description}
            </p>

            <p className="text-xs leading-relaxed text-stone-400 italic mb-4">
              {project.impact}
            </p>

            <div className="flex flex-wrap items-center gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-stone-100 text-stone-400 text-[10px] rounded"
                >
                  {tech}
                </span>
              ))}
              {project.caseStudy && (
                <a
                  href={project.caseStudy}
                  className="ml-auto text-[11px] text-stone-400 hover:text-stone-600 transition-colors duration-300 underline underline-offset-2 decoration-stone-300"
                >
                  View case study
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
