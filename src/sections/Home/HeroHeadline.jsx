import { motion } from "framer-motion";
import { hero } from "../../data/portfolio";

function HeroHeadline() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-2 text-5xl md:text-7xl font-extrabold tracking-tight text-white"
      >
        {hero.name}
      </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mt-3 text-lg md:text-xl font-medium uppercase tracking-[0.2em] text-slate-400"
    >
      {hero.role}
    </motion.p>


      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-5 text-2xl md:text-4xl font-semibold text-teal-400 leading-snug"
      >
        {hero.headline}
      </motion.h2>

    </>
  );
}

export default HeroHeadline;