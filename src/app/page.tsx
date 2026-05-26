import HomeSection from "@/components/sections/Home";
import ResumeSection from "@/components/sections/Resume";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";
import MotionReveal from "@/components/MotionReveal";

export default function Portfolio() {
  return (
    <div className="portfolio-canvas min-h-screen">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-12 sm:px-10 sm:pb-14 lg:px-14">
        <MotionReveal className="px-8 sm:px-12">
          <HomeSection />
        </MotionReveal>

        <MotionReveal
          className="px-8 py-10 sm:px-12 sm:py-12"
          delayMs={80}
        >
          <ResumeSection />
        </MotionReveal>

        <MotionReveal
          className="px-8 py-10 sm:px-12 sm:py-12"
          delayMs={120}
        >
          <ProjectsSection />
        </MotionReveal>

        <MotionReveal
          className="px-8 py-10 sm:px-12 sm:py-12"
          delayMs={160}
        >
          <ContactSection />
        </MotionReveal>
      </main>
    </div>
  );
}

