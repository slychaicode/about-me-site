import { motion } from "framer-motion";
import ClimbButton from "./ClimbButton";

export default function Gear({unlockNext}) {
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
    "Engineering & Tools": [
      "React",
      "Git",
      "AWS",
      "Figma",
    ],
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-sm uppercase tracking-widest text-slate-400">
          ↟ Gear
        </h2>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-200">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
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

        <ClimbButton
            target="#ascent-1"
            label="Climb Higher" 
            unlockNext={unlockNext}
        />
                
      </motion.div>
    </section>
  );
}