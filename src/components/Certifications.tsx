import { certifications } from "@/data/resume";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {certifications.map((cert) => (
          <li
            key={cert}
            className="flex items-start gap-2 text-sm text-gray-600"
          >
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {cert}
          </li>
        ))}
      </ul>
    </section>
  );
}
