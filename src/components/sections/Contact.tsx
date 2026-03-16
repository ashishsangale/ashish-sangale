const links = [
  {
    label: "Email",
    value: "ashish.sangale7@outlook.com",
    href: "mailto:ashish.sangale7@outlook.com",
  },
  {
    label: "GitHub",
    value: "github.com/ashishsangale",
    href: "https://github.com/ashishsangale",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ashish-sangale",
    href: "https://linkedin.com/in/ashish-sangale",
  },
];

export default function ContactSection() {
  return (
    <section className="max-w-4xl w-full">
      <h2 className="text-5xl sm:text-6xl font-bold text-neutral-900 mb-4 tracking-[-0.02em] leading-[0.96]">
        Contact
      </h2>
      <div className="w-full h-px bg-neutral-300 mb-8" />
      <p className="text-base text-neutral-700 mb-10 leading-8 max-w-3xl">
        I&apos;m always open to interesting projects and conversations. Whether
        you have a question, a proposal, or just want to say hi — my inbox is
        open.
      </p>

      {/* Contact links */}
      <div className="flex flex-col gap-4 mb-12">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center justify-between group border border-neutral-200 bg-white rounded-xl px-5 py-4 shadow-sm hover:border-neutral-300 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            <span className="text-[11px] text-neutral-500 font-medium uppercase tracking-[0.16em]">
              {link.label}
            </span>
            <span className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors font-medium tracking-tight">
              {link.value}
            </span>
          </a>
        ))}
      </div>

      {/* Simple form */}
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-5 font-medium">
          Send a message
        </h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-3"
        >
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 text-sm bg-white border border-neutral-200 rounded-lg px-4 py-2.5 outline-none focus:border-neutral-400 text-neutral-800 placeholder-neutral-400 transition-colors"
            />
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 text-sm bg-white border border-neutral-200 rounded-lg px-4 py-2.5 outline-none focus:border-neutral-400 text-neutral-800 placeholder-neutral-400 transition-colors"
            />
          </div>
          <textarea
            placeholder="Your message"
            rows={4}
            className="text-sm bg-white border border-neutral-200 rounded-lg px-4 py-2.5 outline-none focus:border-neutral-400 text-neutral-800 placeholder-neutral-400 transition-colors resize-none"
          />
          <button
            type="submit"
            className="self-start text-sm font-medium bg-neutral-900 text-white px-6 py-2.5 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
