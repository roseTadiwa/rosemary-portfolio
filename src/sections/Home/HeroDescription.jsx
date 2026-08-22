import { motion } from "framer-motion";
import { hero } from "../../data/portfolio";

function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="mt-8 max-w-3xl mx-auto md:mx-0 text-lg md:text-xl leading-8 text-slate-300"
    >
      {hero.description}
    </motion.p>
  );
}

export default HeroDescription;