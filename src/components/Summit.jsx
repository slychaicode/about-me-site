export default function Summit() {
    return (
      <section className="min-h-screen w-full flex items-center justify-center px-6 text-white">
        <div className="text-center space-y-6 max-w-xl">
          <h2 className="text-sm uppercase tracking-widest text-slate-400">
            ↟ Summit
          </h2>
          <p className="text-2xl font-bold text-slate-100">
            You’ve reached the summit.
          </p>
          <p className="text-lg text-slate-300">
            I’d love to connect! Whether it’s about the role, your team, or just to chat about ideas — I’m here.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="/KimSpaven_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm border border-white rounded hover:bg-white hover:text-black transition"
            >
              View Resume
            </a>
            <a
              href="mailto:your.email@example.com"
              className="px-5 py-2 text-sm border border-white rounded hover:bg-white hover:text-black transition"
            >
              Send an Email
            </a>
            <a
              href="https://github.com/slychaicode"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm border border-white rounded hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    );
  }
  