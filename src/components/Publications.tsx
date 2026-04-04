import { publications } from "@/data/resume";

export default function Publications() {
  return (
    <section id="publications" className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900">
          Research &amp; Publications
        </h2>
        <ul className="mt-8 space-y-4">
          {publications.map((pub) => (
            <li
              key={pub}
              className="flex items-start gap-3 text-gray-600"
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              {pub}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
