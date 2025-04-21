import PasswordGate from "./components/PasswordGate";
import { motion } from "framer-motion";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

function App() {

  return (
    <PasswordGate>
      <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-900 text-white flex items-center justify-center px-6 py-16 transition-colors duration-1000">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg w-full max-w-2xl text-center px-8 py-12"
        >
          <header className="mb-10">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl font-bold tracking-tight mb-3"
            >
              Kim Spaven
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-slate-300"
            >
              Engineering leader, systems thinker, and creative technologist.
            </motion.p>
          </header>

          <section className="mb-10">
            <p className="text-md text-slate-400 leading-relaxed mb-6">
              I’ve built teams, scaled cross-functional orgs, and led complex technical strategy in defense and innovation spaces.
              This site gives a quick look at my experience while my LinkedIn is being verified.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-300 text-sm leading-snug mx-auto w-fit">
              <p>• 9+ years in engineering & applied systems thinking</p>
              <p>• Built and scaled a delivery org from 0 to 13+ contributors</p>
              <p>• Focused on frontend learning, creative tech, and mental health tools</p>
              <p>• Passionate about clarity, flow, and team dynamics</p>
            </div>
          </section>

          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-white rounded hover:bg-white hover:text-black transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-950"
            >
              View Resume
            </a>
            <a
              href="https://github.com/slychaicode"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm border border-white rounded hover:bg-white hover:text-black transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-950"
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