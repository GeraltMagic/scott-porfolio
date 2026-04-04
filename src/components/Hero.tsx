import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
      <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">
        {personalInfo.location}
      </p>
      <h1 className="text-3xl md:text-4xl font-light tracking-tight text-stone-800 leading-tight">
        {personalInfo.name}
      </h1>
      <p className="mt-2 text-base md:text-lg font-light text-stone-400">
        {personalInfo.title}
      </p>
      <div className="mt-8 flex gap-3">
        <a
          href="#contact"
          className="text-xs tracking-wide font-medium px-5 py-2.5 bg-stone-800 text-stone-100 rounded-md hover:bg-stone-700 transition-colors duration-300"
        >
          Get in Touch
        </a>
        <a
          href="/resume.pdf"
          download
          className="text-xs tracking-wide font-medium px-5 py-2.5 border border-stone-300 text-stone-500 rounded-md hover:border-stone-400 hover:text-stone-700 transition-colors duration-300"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
