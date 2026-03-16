"use client";

import { useState } from "react";
import Sidebar, { type Section } from "@/components/Sidebar";
import HomeSection from "@/components/sections/Home";
import ResumeSection from "@/components/sections/Resume";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  function renderActiveSection(section: Section) {
    switch (section) {
      case "home":
        return <HomeSection onMoreAboutMe={() => setActiveSection("resume")} />;
      case "resume":
        return <ResumeSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
    }
  }

  return (
    <div className="portfolio-canvas flex h-screen overflow-hidden bg-[#f5f5f0]">
      {/* Sidebar */}
      <Sidebar active={activeSection} onChange={setActiveSection} />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full flex items-start justify-start px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <div
            className={`w-full max-w-4xl px-8 py-10 sm:px-10 sm:py-12 ${
              activeSection === "home" ? "" : "content-band rounded-3xl"
            }`}
          >
            {renderActiveSection(activeSection)}
          </div>
        </div>
      </main>
    </div>
  );
}

