import type { ReactNode } from "react";

const skills = [
  {
    title: "ML & Infra",
    highlighted: ["PyTorch", "Hugging Face Transformers", "LLM fine-tuning & inference"],
    items: [
      "Scikit-learn",
      "XGBoost",
      "RAG",
      "Prompt engineering",
      "Distributed training",
      "Model evaluation & stress-testing",
    ],
  },
  {
    title: "Languages",
    highlighted: ["Python", "JavaScript"],
    items: ["Java", "C#", "SQL", "PostgreSQL", "MySQL"],
  },
  {
    title: "Platforms & Frameworks",
    highlighted: ["React", "Node.js", "FastAPI"],
    items: ["REST", "GraphQL", "AWS (SQS, ELB, S3, EC2, Lambda)", "Docker", "Kubernetes"],
  },
  {
    title: "Tools & Technologies",
    highlighted: [],
    items: [
      "Spring Boot",
      "Linux",
      "Jenkins",
      "Git",
      "Terraform",
      "Redis",
      "MongoDB",
      "Datadog",
      "Jira",
      "Pandas",
      "Weights & Biases",
      "Google BigQuery",
    ],
  },
];

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  logo: string;
  highlights: string[];
  bullets: ReactNode[];
}

const experience: ExperienceItem[] = [
  {
    role: "Machine Learning Integration & Quality Engineer Intern",
    company: "Cerebras Systems, Inc.",
    period: "06/2025 — 08/2025",
    logo: "/logos/cerebras-systems-logo-vector.svg",
    highlights: ["30% throughput gain", "LLM infrastructure", "Observability"],
    bullets: [
      <>
        Optimized distributed LLM training pipelines in <span className="resume-highlight">PyTorch</span> on the
        <span className="resume-highlight"> Cerebras Wafer-Scale Engine (WSE)</span>, tuning batch sizing and runtime
        configurations to improve training throughput by <span className="resume-highlight">30%</span> while
        maintaining convergence stability
      </>,
      <>
        Built modular Python tooling to manage <span className="resume-highlight">LLM checkpoints</span>, prompt cache
        artifacts, and experiment metadata, improving reuse, reproducibility, and iteration speed in large scale
        training and inference workflows
      </>,
      <>
        Implemented automated diagnostic logging to track training stability and inference metrics
        <span className="resume-highlight"> (latency, throughput, cache hit rates)</span>, enabling early detection of
        regressions
      </>,
      <>
        Designed agent-driven validation and stress-testing pipelines to evaluate long-context behavior, cache
        correctness, and system-level failure modes under real-world and adversarial prompt distributions
      </>
    ],
  },
  {
    role: "Software Engineer II",
    company: "Airpay Financial Technologies",
    period: "08/2021 — 07/2024",
    logo: "/logos/airpay.png",
    highlights: ["100K+ transactions", "$20B worth transaction monthly", "Microservices", "99.9% uptime"],
    bullets: [
      <>
        Built and scaled REST and <span className="resume-highlight">GraphQL APIs</span> using Python
        <span className="resume-highlight"> (FastAPI)</span> and Node.js, backed by
        <span className="resume-highlight"> MySQL</span> and <span className="resume-highlight">Redis</span>, supporting
        <span className="resume-highlight"> 100K+</span> monthly merchant transactions across Airpay Vyaapaar, Yako, and
        Wakala with <span className="resume-highlight">99.9% uptime</span>
      </>,
      <>
        Transitioned tightly coupled backend components to <span className="resume-highlight">microservices</span> with
        infrastructure-as-code <span className="resume-highlight">(Terraform)</span>, enabling parallel team development
        and decreasing feature release lead time by <span className="resume-highlight">30%</span>
      </>,
      <>
        Orchestrated asynchronous transaction workflows using <span className="resume-highlight">AWS SQS</span>, Elastic
        Load Balancers, and database connection pooling, increasing peak traffic handling capacity by
        <span className="resume-highlight"> 35%</span> and reducing request timeouts under high concurrency
      </>,
      <>
        Strengthened production reliability by introducing automated test coverage, performance profiling, and
        structured error handling, decreasing <span className="resume-highlight">Sev-2 incidents by 25%</span> and
        improving mean time to resolution
      </>
    ],
  },
  {
    role: "Software Engineer",
    company: "Jio Platforms Ltd.",
    period: "11/2020 — 08/2021",
    logo: "/logos/jio.svg",
    highlights: ["500K+ active users", "Performance tuning", "99.9% uptime"],
    bullets: [
      <>
        Engineered responsive user interfaces for JioSaavn and JioCinema using
        <span className="resume-highlight"> React</span> and <span className="resume-highlight">TypeScript</span>, optimizing
        component rendering and bundle size to reduce page load time from
        <span className="resume-highlight"> 2.2s</span> to <span className="resume-highlight">1.8s</span> for
        <span className="resume-highlight"> 500K+</span> active users
      </>,
      <>
        Enhanced <span className="resume-highlight">Java</span> and
        <span className="resume-highlight"> Spring Boot</span> services managing user session data and content metadata,
        lowering API response latency from <span className="resume-highlight">320ms</span> to
        <span className="resume-highlight"> 240ms</span> during peak streaming hours
      </>,
      <>
        Integrated automated test suites and pre-merge validation checks into CI pipelines, improving release
        stability and reducing post-deployment hotfixes by <span className="resume-highlight">20%</span>
      </>,
      <>
        Optimized distributed service performance using <span className="resume-highlight">Datadog APM</span> for request
        tracing and latency analysis, resolving bottlenecks and sustaining
        <span className="resume-highlight"> 99.9% uptime</span> during major content launches
      </>
    ],
  }
];

const education = [
    {
        degree: "Master of Science in Computer Software Engineering",
        school: "Arizona State University",
        year: "2026",
    badge: "MS",
    },
    {
        degree: "Bachelor of Engineering in Information Technology",
        school: "University of Mumbai",
        year: "2020",
    badge: "BE",
    }
];

export default function ResumeSection() {
  return (
    <section className="w-full">
      <h2 className="section-title text-5xl sm:text-6xl mb-4 leading-[0.96]">
        Resume
      </h2>
      <div className="w-full h-px bg-black/10 mb-10" />

      {/* Experience */}
      <div className="mb-12">
        <h3 className="kicker mb-6">Experience</h3>
        <div className="resume-rail resume-rail-tech flex flex-col gap-12">
          {experience.map((job) => (
            <div key={job.role + job.company} className="relative">
              <div className="absolute -left-[5.2rem] top-1">
                <div className="resume-logo resume-logo-tech">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="h-10 w-10 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-neutral-900 tracking-tight">
                    {job.role}
                  </p>
                  <p className="text-sm text-neutral-600 mt-0.5">
                    {job.company}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 mt-1">
                  {job.period}
                </span>
              </div>
              <div className="resume-impact">
                {job.highlights.map((highlight) => (
                  <span key={highlight} className="impact-chip">
                    {highlight}
                  </span>
                ))}
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                {job.bullets.map((bullet, index) => (
                  <li
                    key={`${job.company}-${index}`}
                    className="text-sm text-neutral-600 leading-6 flex gap-2"
                  >
                    <span className="bullet-dot" aria-hidden="true" />
                    <span className="resume-bullet-text">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h3 className="kicker mb-6">Education</h3>
        <div className="education-panel">
          {education.map((edu) => (
            <div key={edu.degree} className="education-row">
              <div>
                <p className="education-degree">{edu.degree}</p>
                <p className="education-school">{edu.school}</p>
              </div>
              <div className="text-right">
                <div className="education-year">{edu.year}</div>
                <div className="education-badge">{edu.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="kicker mb-6">Skills</h3>
        <div className="skills-panel">
          {skills.map((group) => (
            <div key={group.title} className="skills-row">
              <div className="skills-header">
                <span className="skills-title">{group.title}</span>
                <span className="skills-rule" aria-hidden="true" />
              </div>
              <div className="skills-tags">
                {group.highlighted.map((skill) => (
                  <span key={skill} className="skill-tag hi">
                    {skill}
                  </span>
                ))}
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag hi">
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
