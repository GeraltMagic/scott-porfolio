"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#faf9f7]/85 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <a href="#" className="text-sm font-medium tracking-wide text-stone-800">
          Scott Herford
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wide text-stone-400 hover:text-stone-700 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="text-xs tracking-wide font-medium px-3.5 py-1.5 bg-stone-800 text-stone-100 rounded-md hover:bg-stone-700 transition-colors duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 text-stone-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200/60 bg-[#faf9f7] px-6 pb-4 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-xs tracking-wide text-stone-400 hover:text-stone-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-2 text-xs tracking-wide font-medium px-3.5 py-1.5 bg-stone-800 text-stone-100 rounded-md"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
