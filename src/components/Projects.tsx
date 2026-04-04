import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="block p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
