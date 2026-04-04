import { militaryService } from "@/data/resume";

export default function MilitaryService() {
  return (
    <section id="military" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-gray-900">Military Service</h2>
      <div className="mt-8 flex items-start gap-4">
        <svg
          className="w-8 h-8 text-blue-600 flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
        <div>
          <h3 className="font-semibold text-gray-900">
            {militaryService.branch}
          </h3>
          <p className="text-sm text-gray-500">{militaryService.role}</p>
          <p className="text-sm text-gray-400">
            {militaryService.startDate} — {militaryService.endDate}
          </p>
        </div>
      </div>
    </section>
  );
}
