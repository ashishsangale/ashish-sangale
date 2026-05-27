import MotionReveal from "@/components/MotionReveal";

export default function HomeSection() {
  return (
    <section className="w-full">
      <div className="min-h-screen relative flex items-center justify-center text-center">
        <div className="flex flex-col items-center text-center">
          <MotionReveal>
            <p className="kicker">Hello, I&apos;m</p>
            <h1 className="editorial-title text-5xl sm:text-6xl lg:text-7xl mt-4 leading-[0.9]">
              Ashish Sangale
            </h1>
            <h2 className="text-xl text-neutral-700 mt-4 font-medium tracking-tight">
              AI/ML Engineer + Software Engineer
            </h2>
          </MotionReveal>

          <MotionReveal className="mt-8" delayMs={100}>
            <div className="statement-band">
              I build systems that scale from frontier ML to production-grade platforms.
            </div>
          </MotionReveal>
        </div>

        <div className="scroll-cue absolute bottom-6 z-10" aria-hidden="true">
          <span>Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <MotionReveal className="mt-24" delayMs={160}>
        <p className="impact-label mb-4">Impact Highlights</p>
        <div className="impact-grid">
          <div className="impact-card">
            <span className="impact-pill">ML infrastructure</span>
            <div className="impact-line" />
            <p className="impact-number">30%</p>
            <p className="impact-title">Faster training</p>
            <p className="impact-desc">
              Optimized distributed LLM pipelines on WSE for measurable throughput gains.
            </p>
          </div>
          <div className="impact-card">
            <span className="impact-pill">Payments</span>
            <div className="impact-line" />
            <p className="impact-number">100K+</p>
            <p className="impact-title">Transactions</p>
            <p className="impact-desc">
              Infrastructure powering monthly merchant volume at scale.
            </p>
          </div>
          <div className="impact-card">
            <span className="impact-pill">Frontend</span>
            <div className="impact-line" />
            <p className="impact-number">500K+</p>
            <p className="impact-title">Active users</p>
            <p className="impact-desc">
              Performance wins across streaming products at production scale.
            </p>
          </div>
        </div>
      </MotionReveal>

      <MotionReveal className="mt-6" delayMs={220}>
        <div className="impact-stats">
          <div className="impact-stat-card">
            <p className="impact-stat-number">4+</p>
            <p className="impact-stat-label">Years experience</p>
          </div>
          <div className="impact-stat-card">
            <p className="impact-stat-number">20+</p>
            <p className="impact-stat-label">Projects shipped</p>
          </div>
          <div className="impact-stat-card">
            <p className="impact-stat-number">10+</p>
            <p className="impact-stat-label">Technologies</p>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
