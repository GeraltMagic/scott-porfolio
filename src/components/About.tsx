import { personalInfo } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900">About</h2>
        <div className="mt-8 flex flex-col md:flex-row gap-10 items-start">
          {/* Photo placeholder */}
          <div className="w-40 h-40 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
            Photo
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            {personalInfo.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
