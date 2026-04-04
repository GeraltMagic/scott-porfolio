import { personalInfo } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="bg-stone-100/50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-6">
          About
        </h2>
        <p className="text-sm leading-7 text-stone-600 max-w-2xl">
          {personalInfo.bio}
        </p>
      </div>
    </section>
  );
}
