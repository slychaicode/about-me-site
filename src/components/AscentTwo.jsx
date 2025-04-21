import { motion } from "framer-motion";

export default function AscentTwo() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-sm uppercase tracking-widest text-slate-400">↟ Ascent II</h2>
        <h3 className="text-lg font-semibold text-slate-200">Engineer II - Modeling & Simulation, BAE Systems (2018–2018)</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm leading-relaxed">
            <li>Highlight 1 will be here</li>
            <li>Highlight 2 will be here</li>
            <li>Highlight 3 will be here</li>
            <li>Highlight 4 will be here</li>
            <li>Highlight 5 will be here</li>
        </ul>
      </motion.div>
    </section>
  );
}
