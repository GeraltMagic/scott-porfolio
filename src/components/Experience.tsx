import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
      <div className="mt-8 space-y-10">
        {experience.map((job, i) => (
          <div key={i} className="relative pl-6 border-l-2 border-gray-200">
            <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-blue-600" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{job.role}</h3>
                <p className="text-sm text-gray-500">
                  {job.company} &middot; {job.location}
                </p>
              </div>
              <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                {job.startDate} — {job.endDate}
              </span>
            </div>
            <ul className="mt-3 space-y-1">
              {job.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="text-sm text-gray-600 leading-relaxed before:content-['•'] before:mr-2 before:text-gray-400"
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
