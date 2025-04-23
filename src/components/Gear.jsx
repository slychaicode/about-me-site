import { motion } from "framer-motion";
import ClimbButton from "./ClimbButton";

export default function Gear({ unlockNext }) {
  const skills = {
    "Org Design & Leadership": [
      "Hiring & Mentorship",
      "Org Scaling",
      "Strategic Roadmapping",
      "Stakeholder Alignment",
      "Culture Building",
    ],
    "Product & Team Routines": [
      "Sprint Planning",
      "Roadmap Execution",
      "Prioritization",
      "Stakeholder Demos",
      "Asana",
      "Jira",
      "Figma",
    ],
    "Engineering Tools & Infra": [
      "JavaScript",
      "React",
      "Git",
      "Python",
      "AWS",
      "Vercel",
      "PowerBI",
      "Zapier",
    ],
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

        <p className="text-slate-300 leading-relaxed text-lg">
        Before we kick off the ascent up this metaphorical mountain, here's a look at the gear I've picked up along the way — core skills I've used as both an engineer and engineering manager at BAE Systems, plus a few from personal projects like this site, built with React and hosted on Vercel.
        </p>

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
