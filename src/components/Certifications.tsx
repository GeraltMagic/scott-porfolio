import { certifications } from "@/data/resume";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-8">
        Certifications
      </h2>
      <div className="flex flex-wrap gap-2">
        {certifications.map((cert) => (
          <span
            key={cert}
            className="px-3 py-1.5 bg-stone-100 text-stone-500 text-xs rounded-md"
          >
            {cert}
          </span>
        ))}
      </div>
    </section>
  );
}
