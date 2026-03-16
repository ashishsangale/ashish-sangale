interface HomeSectionProps {
  onMoreAboutMe: () => void;
}

export default function HomeSection({ onMoreAboutMe }: HomeSectionProps) {
  return (
    <section className="max-w-4xl w-full">
      {/* Greeting */}
      <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500 mb-4 font-medium">
        Hello, I&apos;m
      </p>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-3 tracking-[-0.02em] leading-[0.94]">
        Ashish Sangale
      </h1>
      <h2 className="text-xl text-neutral-700 mb-8 font-medium tracking-tight">
        Software Engineer
      </h2>

      <div className="w-full h-px bg-neutral-300 mb-8" />

      <p className="text-base text-neutral-700 leading-8 mb-4 max-w-3xl">
        I&apos;m a software engineer who loves building things that work — really work — at scale, under pressure, and in production where it actually matters.
      </p>
      <p className="text-[15px] text-neutral-600 leading-8 mb-6 max-w-3xl">
        My career has taken me across the full spectrum of modern software: from crafting responsive, user-friendly frontends for 500K+ active users on JioSaavn and JioCinema, to architecting payment infrastructure handling 100K+ monthly merchant transactions at Airpay, to optimizing distributed LLM training pipelines on the Cerebras Wafer-Scale Engine — one of the most powerful AI accelerators in the world. Each chapter has deepened my belief that great engineering isn&apos;t just about writing clean code. It&apos;s about understanding the problem deeply enough to build something that genuinely changes how people work.
      </p>
      <p className="text-[15px] text-neutral-600 leading-8 mb-6 max-w-3xl">
        At Cerebras, I&apos;ve been working at the frontier of ML infrastructure — tuning training pipelines for 30% throughput gains, building observability systems that catch regressions before they hit production, and designing agent-driven stress-testing frameworks that use AI to validate AI. It&apos;s the kind of work that demands both rigor and creativity, and I love every bit of it.
      </p>
      <p className="text-[15px] text-neutral-600 leading-8 mb-6 max-w-3xl">
        On the full stack side, I bring the same care and intentionality. I&apos;ve built scalable REST and GraphQL APIs, decomposed monolithic backends into microservices, and designed data layers that stay fast and reliable as usage grows. I care about the experience on both ends — the engineer maintaining the system and the user depending on it
      </p>
      <p className="text-[15px] text-neutral-600 leading-8 max-w-3xl">
        I&apos;m currently looking for my next opportunity — ideally somewhere that values technical depth, moves with ambition, and cares about the impact of what it ships. If that sounds like your team, I&apos;d love to connect
      </p>

      {/* Quick stats */}
      <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-wrap gap-8 sm:gap-12">
        {[
          { value: "4+", label: "Years experience" },
          { value: "20+", label: "Projects shipped" },
          { value: "10+", label: "Technologies" },
        ].map((stat) => (
          <div key={stat.label} className="min-w-[130px]">
            <p className="text-3xl font-bold text-neutral-900 leading-none">{stat.value}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <button
          type="button"
          onClick={onMoreAboutMe}
          className="inline-flex items-center rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          More about me
        </button>
      </div>
    </section>
  );
}
