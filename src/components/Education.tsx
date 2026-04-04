import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
        <div className="mt-8 space-y-6">
          {education.map((entry, i) => (
            <div key={i}>
              <h3 className="font-semibold text-gray-900">{entry.degree}</h3>
              <p className="text-sm text-gray-500">{entry.school}</p>
              <p className="text-sm text-gray-400">{entry.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
