import { motion } from "framer-motion";
import ClimbButton from "./ClimbButton";

export default function Basecamp({ unlockNext }) {
  return (
    <section className="w-full max-w-4xl px-6 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6 text-center"
      >
        <h2 className="text-sm uppercase tracking-widest text-slate-400">
          ↟ Basecamp
        </h2>

        <h1 className="text-4xl font-bold tracking-tight text-white">
          Kim Spaven
        </h1>

        <p className="text-slate-300 leading-relaxed text-lg">
          Hi! I’m Kim Spaven, currently an Advanced Technology Manager based in the U.S.
          I'm making an intentional leap - pivoting from defense tech to tech industry and relocating from Philadelphia to Vancouver.
          When I saw Asana's Technical Engineering Manager role in Vancouver, it sparked this site - part portfolio, part personal introduction. 
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
