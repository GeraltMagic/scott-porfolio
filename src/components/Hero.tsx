import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
        {personalInfo.name}
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-500">
        {personalInfo.title}
      </p>
      <p className="mt-2 text-gray-400">{personalInfo.location}</p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
