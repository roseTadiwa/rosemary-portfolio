
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "../../data/portfolio";

function HeroSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1 }}
      className="mt-10 flex justify-center md:justify-start items-center gap-6"
    >
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-slate-400 hover:text-teal-400 text-2xl transition-all duration-300 hover:-translate-y-1"
      >
        <FaGithub />
      </a>

      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-slate-400 hover:text-teal-400 text-2xl transition-all duration-300 hover:-translate-y-1"
      >
        <FaLinkedin />
      </a>

      <a
        href={socialLinks.email}
        aria-label="Email"
        className="text-slate-400 hover:text-teal-400 text-2xl transition-all duration-300 hover:-translate-y-1"
      >
        <FaEnvelope />
      </a>
    </motion.div>
  );
}

export default HeroSocials;
