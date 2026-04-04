import { aiProjects } from "@/data/resume";

export default function AIProjects() {
  return (
    <section id="projects" className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900">
          Independent AI Projects &amp; Building
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiProjects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-white rounded-xl border border-gray-100"
            >
              <h3 className="font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
