interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "EduSummarizer",
    description:
      "A full-stack web application with real-time features, built with Next.js and Node.js. Handles authentication, data visualisation, and live updates via WebSockets.",
    tags: ["Vector Database", "RAG", "OpenAI API", "Streamlit"],
    github: "https://github.com/ashishsangale/EduSummarizer",
    live: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-4xl w-full">
      <h2 className="text-5xl sm:text-6xl font-bold text-neutral-900 mb-4 tracking-[-0.02em] leading-[0.96]">
        Projects
      </h2>
      <div className="w-full h-px bg-neutral-300 mb-10" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col gap-3 shadow-sm hover:border-neutral-300 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold text-neutral-900 tracking-tight">
                {project.title}
              </h3>
              <div className="flex gap-2 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.08em] text-neutral-500 hover:text-neutral-800 transition-colors"
                    aria-label="GitHub"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.08em] text-neutral-500 hover:text-neutral-800 transition-colors"
                    aria-label="Live demo"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-neutral-600 leading-6 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-[0.08em] px-2 py-0.5 bg-neutral-50 text-neutral-600 rounded border border-neutral-200 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
