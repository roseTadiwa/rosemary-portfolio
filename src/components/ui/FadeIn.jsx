import { motion } from "framer-motion";

function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;