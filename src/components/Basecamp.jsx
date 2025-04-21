import { motion } from "framer-motion";
import ClimbButton from "./ClimbButton";

export default function Basecamp({ unlockNext }) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl space-y-6 text-center"
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

        <ClimbButton
          target="#gear"
          label="Climb Higher"
          unlockNext={unlockNext}
        />
      </motion.div>
    </section>
  );
}
