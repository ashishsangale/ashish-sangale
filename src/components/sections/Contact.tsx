"use client";

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
    <section className="w-full">
      <h2 className="section-title text-5xl sm:text-6xl mb-4 leading-[0.96]">
        Contact
      </h2>
      <div className="w-full h-px bg-black/10 mb-8" />
      <p className="lede mb-6 max-w-3xl">
        I&apos;m always open to interesting projects and conversations. Whether
        you have a question, a proposal, or just want to say hi — my inbox is
        open.
      </p>
      <p className="text-sm uppercase tracking-[0.24em] text-neutral-500 mb-10">
        Currently open to AI/ML and software engineering roles.
      </p>

      {/* Contact links */}
      <div className="flex flex-col gap-4 mb-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-black/10 px-1 py-4 transition-colors duration-200 hover:text-neutral-900"
          >
            <span className="text-[11px] text-neutral-500 font-medium uppercase tracking-[0.24em]">
              {link.label}
            </span>
            <span className="text-sm text-neutral-800 group-hover:text-neutral-900 transition-colors font-medium tracking-tight">
              {link.value}
            </span>
          </a>
        ))}
      </div>

      {/* Simple form */}
      <div className="pt-4">
        <h3 className="kicker mb-5">Send a message</h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-3"
        >
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 text-sm bg-white/90 border border-black/10 rounded-lg px-4 py-2.5 outline-none focus:border-black/30 text-neutral-800 placeholder-neutral-400 transition-colors"
            />
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 text-sm bg-white/90 border border-black/10 rounded-lg px-4 py-2.5 outline-none focus:border-black/30 text-neutral-800 placeholder-neutral-400 transition-colors"
            />
          </div>
          <textarea
            placeholder="Your message"
            rows={4}
            className="text-sm bg-white/90 border border-black/10 rounded-lg px-4 py-2.5 outline-none focus:border-black/30 text-neutral-800 placeholder-neutral-400 transition-colors resize-none"
          />
          <button
            type="submit"
            className="btn-primary self-start"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
