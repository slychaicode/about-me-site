import { motion } from "framer-motion";
import ClimbButton from "./ClimbButton";

export default function AscentFour() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-sm uppercase tracking-widest text-slate-400">↟ Ascent IV</h2>
        <h3 className="text-lg font-semibold text-slate-200">Advanced Technology Manager, BAE Systems (2022–present)</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm leading-relaxed">
            <li>Highlight 1 will be here</li>
            <li>Highlight 2 will be here</li>
            <li>Highlight 3 will be here</li>
            <li>Highlight 4 will be here</li>
            <li>Highlight 5 will be here</li>
        </ul>
        
        <ClimbButton target="#summit" label="Climb Higher" />
                
      </motion.div>
    </section>
  );
}
