import { hero } from "../../data/portfolio";

import { motion } from "framer-motion";


function Greeting() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-teal-400 text-lg md:text-xl font-semibold tracking-wide uppercase"
    >
      {hero.greeting}
    </motion.p>
  );
}


export default Greeting;