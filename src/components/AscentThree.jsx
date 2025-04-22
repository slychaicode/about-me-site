import { motion } from "framer-motion";
import ClimbButton from "./ClimbButton";

export default function AscentThree({ unlockNext, bullets = [] }) {
  return (
    <section className="w-full max-w-4xl px-6 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl space-y-6"
      >
        <h2 className="text-sm uppercase tracking-widest text-slate-400">
          ↟ Ascent III
        </h2>
        <h3 className="text-lg font-semibold text-slate-200">
          Senior Engineer – Modeling & Simulation, BAE Systems (2018–2022)
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm leading-relaxed">
          
          {Array.isArray(bullets) &&
            bullets.map((item, i)=> (
              <li key={i}>{item}</li>
          ))}
        
        </ul>

        <ClimbButton
          target="#ascent-4"
          label="Climb Higher"
          unlockNext={unlockNext}
        />
      </motion.div>
    </section>
  );
}
