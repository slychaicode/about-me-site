import { motion } from "framer-motion";

export default function Basecamp() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-sm uppercase tracking-widest text-slate-400">
          ↟ Basecamp
        </h2>

        <h1 className="text-4xl font-bold tracking-tight text-white">
          Kim Spaven
        </h1>

        <p className="text-slate-300 leading-relaxed text-lg">
          Welcome!
          Intro sentence here. 
          More intro here.
        </p>
      </motion.div>
    </section>
  );
}