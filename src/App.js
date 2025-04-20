import PasswordGate from "./components/PasswordGate";

function App() {

  return (
    <PasswordGate>
      <main className="min-h-screen bg-gradient-to-br from-indigo-950 to-slate-900 text-white flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full text-center">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Kim Spaven</h1>
          <p className="text-lg mb-6 text-slate-300">
            Engineering leader, creative technologist, and systems thinker with a human-first mindset.
          </p>

          <p className="text-md text-slate-400 mb-6 leading-relaxed">
            I’ve built teams, led technical strategy, and delivered innovation in high-stakes environments.
            This site offers a quick look at my background while my LinkedIn is being verified.
          </p>

          <ul className="text-left text-slate-300 mb-8 space-y-2">
            <li>🧠 9+ years in engineering & defense tech</li>
            <li>📈 Built and scaled a cross-functional org from 0 to 13+ people</li>
            <li>🌐 Currently exploring frontend and experiential design</li>
          </ul>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/KimSpaven_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            >
              View Resume
            </a>
            <a
              href="https://github.com/slychaicode"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
            {/* Add more links if you want */}
          </div>
        </div>
      </main>
    </PasswordGate>
  );

}

export default App;