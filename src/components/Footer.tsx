import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60">
      <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400 tracking-wide">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
        <div className="flex gap-4">
          {personalInfo.social.linkedin && (
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-600 transition-colors duration-300"
            >
              LinkedIn
            </a>
          )}
          {personalInfo.social.github && (
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-600 transition-colors duration-300"
            >
              GitHub
            </a>
          )}
          {personalInfo.social.substack && (
            <a
              href={personalInfo.social.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-600 transition-colors duration-300"
            >
              Substack
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
