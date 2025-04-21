import { motion } from "framer-motion";

export default function ClimbButton({ target = "#gear", label = "Climb Higher" , unlockNext}) {
  const handleClick = () => {
    if(unlockNext) unlockNext();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="mt-10 px-6 py-2 border border-white text-white text-sm rounded hover:bg-white hover:text-black transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
    >
      {label}
    </motion.button>
  );
}