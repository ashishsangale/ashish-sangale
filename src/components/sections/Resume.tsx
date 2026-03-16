const skills = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Node.js", "Express", "REST APIs", "GraphQL"],
  Tools: ["Git", "Docker", "AWS", "PostgreSQL"],
};

const experience = [
  {
    role: "Machine Learning Engineer",
    company: "Cerebras Systems, Inc.",
    period: "06/2025 — 08/2025",
    bullets: [
      "Optimized distributed LLM training pipelines in PyTorch on the Cerebras Wafer-Scale Engine (WSE), tuning batch sizing and runtime configurations to improve training throughput by 30% while maintaining convergence stability",
      "Built modular Python tooling to manage LLM checkpoints, prompt cache artifacts, and experiment metadata, improving reuse, reproducibility, and iteration speed in large scale training and inference workflows",
      "Implemented automated diagnostic logging to track training stability and inference metrics (latency, throughput, cache hit rates, output consistency), enabling early detection of regressions",
      "Designed agent-driven validation and stress-testing pipelines to evaluate long-context behavior, cache correctness, and system-level failure modes under real-world and adversarial prompt distributions"
    ],
  },
  {
    role: "Software Engineer II",
    company: "Airpay Financial Technologies",
    period: "08/2021 — 07/2024",
    bullets: [
      "Built and scaled REST and GraphQL APIs using Python (FastAPI) and Node.js, backed by MySQL and Redis, supporting 100K+ monthly merchant transactions across Airpay Vyaapaar, Yako, and Wakala with 99.9% uptime",
      "Transitioned tightly coupled backend components to microservices with infrastructure-as-code (Terraform), enabling parallel team development and decreasing feature release lead time by 30%",
      "Orchestrated asynchronous transaction workflows using AWS SQS, Elastic Load Balancers, and database connection pooling, increasing peak traffic handling capacity by 35% and reducing request timeouts under high concurrency",
      "Strengthened production reliability by introducing automated test coverage, performance profiling, and structured error handling, decreasing Sev-2 incidents by 25% and improving mean time to resolution"
    ],
  },
  {
    role: "Software Engineer",
    company: "Jio Platforms Ltd.",
    period: "11/2020 — 08/2021",
    bullets: [
      "Engineered responsive user interfaces for JioSaavn and JioCinema using React and TypeScript, optimizing component rendering and bundle size to reduce page load time from 2.2s to 1.8s for 500K+ active users",
      "Enhanced Java and Spring Boot services managing user session data and content metadata, lowering API response latency from 320ms to 240ms during peak streaming hours",
      "Integrated automated test suites and pre-merge validation checks into CI pipelines, improving release stability and reducing post-deployment hotfixes by 20%",
      "Optimized distributed service performance using Datadog APM for request tracing and latency analysis, resolving bottlenecks and sustaining 99.9% uptime during major content launches"
    ],
  }
];

const education = [
    {
        degree: "Master of Science in Computer Software Engineering",
        school: "Arizona State University",
        year: "2026",
    },
    {
        degree: "Bachelor of Engineering in Information Technology",
        school: "University of Mumbai",
        year: "2020",
    }
];

export default function ResumeSection() {
  return (
    <section className="max-w-4xl w-full">
      <h2 className="text-5xl sm:text-6xl font-bold text-neutral-900 mb-4 tracking-[-0.02em] leading-[0.96]">
        Resume
      </h2>
      <div className="w-full h-px bg-neutral-300 mb-10" />

      {/* Experience */}
      <div className="mb-10">
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-6 font-medium">
          Experience
        </h3>
        <div className="flex flex-col gap-8">
          {experience.map((job) => (
            <div key={job.role + job.company}>
              <div className="flex items-start justify-between mb-1">
                <div>
                  <p className="text-base font-semibold text-neutral-900 tracking-tight">
                    {job.role}
                  </p>
                  <p className="text-sm text-neutral-600 mt-0.5">{job.company}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.08em] text-neutral-500 shrink-0 ml-4 mt-0.5">
                  {job.period}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                {job.bullets.map((b) => (
                  <li key={b} className="text-sm text-neutral-600 leading-6 flex gap-2">
                    <span className="text-neutral-400 mt-0.5">–</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-10">
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-6 font-medium">
          Education
        </h3>
        {education.map((edu) => (
          <div key={edu.degree} className="flex items-start justify-between">
            <div>
              <p className="text-base font-semibold text-neutral-900 tracking-tight">
                {edu.degree}
              </p>
              <p className="text-sm text-neutral-600 mt-0.5">{edu.school}</p>
            </div>
            <span className="text-xs uppercase tracking-[0.08em] text-neutral-500 shrink-0 ml-4 mt-0.5">
              {edu.year}
            </span>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-6 font-medium">
          Skills
        </h3>
        <div className="flex flex-col gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex gap-4">
              <span className="text-xs uppercase tracking-[0.1em] text-neutral-500 w-24 shrink-0 mt-1">
                {category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md font-medium border border-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
