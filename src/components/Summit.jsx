import { motion } from "framer-motion";

export default function Summit() {
  return (
    <section className="w-full max-w-2xl px-6 py-24 mx-auto text-white text-center space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-sm uppercase tracking-widest text-slate-400">
          🏔️ Summit
        </h2>

        <h3 className="text-2xl font-bold text-slate-100">
          Thanks for climbing with me.
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed max-w-lg mx-auto">
          If you're interested in chatting more or learning about how I build teams, lead technical direction, and scale orgs with clarity and warmth — let’s connect.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={process.env.REACT_APP_RESUME_URL}
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
          {/* Optional extra */}
          <a
            href="mailto:kim.spaven.business@gmail.com"
            className="px-4 py-2 text-sm border border-white rounded hover:bg-white hover:text-black transition"
          >
            Email Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
