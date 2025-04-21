import { motion } from "framer-motion";
import ClimbButton from "./ClimbButton";

export default function Gear({ unlockNext }) {
  const skills = {
    "Leadership & Strategy": [
      "Skill 1",
      "Skill 2",
      "Hiring & Mentorship",
      "Roadmapping",
    ],
    "Team Planning": [
      "Skill 1",
      "Skill 2",
      "Asana",
      "Jira",
    ],
    "Engineering & Tools": ["React", "Git", "AWS", "Figma"],
  };

  return (
    <section className="w-full max-w-4xl px-6 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl space-y-12"
      >
        <h2 className="text-sm uppercase tracking-widest text-slate-400">
          ↟ Gear
        </h2>

        <div className="space-y-12 max-w-2xl mx-auto">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4 text-center">
              <h3 className="text-lg font-semibold text-slate-200">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-sm text-slate-300 hover:bg-white/10 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        
        <ClimbButton target="#ascent-1" label="Climb Higher" />
                
      </motion.div>
    </section>
  );
}
