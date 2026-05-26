"use client";

import Image from "next/image";
import profileImage from "./profile.jpg";

export type Section = "home" | "resume" | "projects" | "contact";

interface NavItem {
  id: Section;
  label: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ashish-sangale",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.08V21h-4v-5.54c0-1.32-.02-3.01-1.84-3.01-1.84 0-2.12 1.44-2.12 2.92V21h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/ashishsangale",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.08-.74.08-.73.08-.73 1.19.08 1.81 1.22 1.81 1.22 1.06 1.81 2.77 1.28 3.45.98.11-.76.41-1.28.75-1.57-2.67-.3-5.48-1.34-5.48-5.94 0-1.31.47-2.37 1.22-3.21-.12-.3-.53-1.52.12-3.17 0 0 .99-.32 3.24 1.22A11.2 11.2 0 0 1 12 6.8c.99 0 1.99.13 2.92.39 2.25-1.54 3.24-1.22 3.24-1.22.65 1.65.24 2.87.12 3.17.76.84 1.22 1.9 1.22 3.21 0 4.61-2.82 5.64-5.5 5.94.43.37.82 1.11.82 2.23v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:ashish.sangale7@outlook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
        <path d="m4 8 8 6 8-6" />
      </svg>
    ),
  },
];

interface SidebarProps {
  active: Section;
  onChange: (section: Section) => void;
}

export default function Sidebar({ active, onChange }: SidebarProps) {
  return (
    <aside className="w-[21rem] h-full flex flex-col py-10 px-8 bg-white/60 border-r border-black/10 shrink-0 backdrop-blur">
      {/* Photo */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-neutral-100 border border-black/10 shadow-sm">
          <Image
            src={profileImage}
            alt="Ashish Sangale"
            fill
            className="object-cover z-10"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Fallback initials */}
          <span className="absolute inset-0 z-0 flex items-center justify-center text-2xl font-semibold text-neutral-400 select-none">
            AS
          </span>
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="kicker">Portfolio</p>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 mt-2">
          Ashish Sangale
        </h1>
        <p className="text-sm text-neutral-600 mt-1">AI/ML Engineer + SWE</p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/10 mb-8" />

      {/* Nav */}
      <nav className="w-full flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`w-full text-left px-4 py-2.5 text-xs uppercase tracking-[0.3em] rounded-full transition-all duration-200 ease-out ${
              active === item.id
                ? "bg-neutral-900 text-white shadow-sm"
                : "text-neutral-600 hover:bg-neutral-900/10 hover:text-neutral-900 hover:translate-x-0.5"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t border-black/10">
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={item.label}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white/80 text-neutral-500 shadow-sm transition-all duration-200 ease-out hover:scale-[1.04] hover:border-black/30 hover:bg-white hover:text-neutral-900 hover:shadow-[0_0_0_6px_rgba(18,18,18,0.06)]"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
