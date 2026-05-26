const project = {
  title: "EduSummarizer",
  description:
    "EduSummarizer turns dense academic content into clear, structured summaries with a RAG pipeline and a fast, interactive UI. It combines retrieval, prompt orchestration, and evaluation-friendly outputs to keep summaries grounded in source material.",
  tags: ["RAG", "Vector Database", "OpenAI API", "Streamlit"],
  github: "https://github.com/ashishsangale/EduSummarizer",
  demo: "https://youtu.be/x90i9oiSYYA",
  embed: "https://www.youtube.com/embed/x90i9oiSYYA",
};

export default function ProjectsSection() {
  return (
    <section className="w-full">
      <p className="project-label mb-3">Featured Project</p>
      <div className="project-card">
        <div className="project-thumb" aria-label="Watch demo">
          <iframe
            className="project-iframe"
            src={project.embed}
            title="EduSummarizer demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <span className="project-demo-pill">Demo</span>
        </div>
        <div className="project-body">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-actions">
              <a
                className="project-btn"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                className="project-btn primary"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶ Watch Demo
              </a>
            </div>
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
