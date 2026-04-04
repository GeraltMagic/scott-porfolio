import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <div className="flex gap-4">
          {personalInfo.social.linkedin && (
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          )}
          {personalInfo.social.github && (
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
