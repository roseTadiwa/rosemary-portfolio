import { motion } from "framer-motion";
import { hero } from "../../data/portfolio";


function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="mt-10 flex flex-wrap justify-center md:justify-start gap-4"
    >

      <a
        href="#projects"
        className="bg-teal-500 hover:bg-teal-400 transition-all duration-300 text-white px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1"
      >
        View Projects
      </a>

      <a
        href={hero.resume}
        download
        className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300 px-7 py-3 rounded-lg font-semibold hover:-translate-y-1"
      >
        Download CV
      </a>

    </motion.div>
  );
}

export default HeroButtons;