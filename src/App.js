import PasswordGate from "./components/PasswordGate";

function App() {

  return (
    <PasswordGate>
      <main className="min-h-screen bg-gradient-to-br from-indigo-950 to-slate-900 text-white flex items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl text-center"
        >
          <header className="mb-10">
            <h1 className="text-5xl font-bold tracking-tight mb-3">Kim Spaven</h1>
            <p className="text-lg text-slate-300">
              Engineering leader, systems thinker, and creative technologist.
            </p>
          </header>

          <section className="mb-10">
            <p className="text-md text-slate-400 leading-relaxed mb-4">
              I’ve built teams, scaled cross-functional orgs, and led complex technical strategy in defense and innovation spaces.
              This site gives a quick look at my experience while my LinkedIn is being verified.
            </p>

            <ul className="text-left text-slate-300 space-y-2 text-sm leading-snug mx-auto w-fit">
              <li>• 9+ years in engineering & applied systems thinking</li>
              <li>• Built and scaled a delivery org from 0 to 13+ contributors</li>
              <li>• Focused on frontend learning, creative tech, and mental health tools</li>
            </ul>
          </section>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/KimSpaven_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-white rounded hover:bg-white hover:text-black transition"
            >
              View Resume
            </a>
            <a
              href="https://github.com/slychaicode"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-white rounded hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </main>
    </PasswordGate>
  );

}

export default App;