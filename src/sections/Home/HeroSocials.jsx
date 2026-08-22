import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { socialLinks } from "../../data/portfolio";

function HeroSocials() {
  return (
    <div className="mt-10 flex justify-center gap-6">
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noreferrer"
        className="text-2xl text-slate-400 transition duration-300 hover:text-teal-400 hover:scale-110"
      >
        <FaGithub />
      </a>

      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noreferrer"
        className="text-2xl text-slate-400 transition duration-300 hover:text-teal-400 hover:scale-110"
      >
        <FaLinkedin />
      </a>

      <a
        href={socialLinks.email}
        className="text-2xl text-slate-400 transition duration-300 hover:text-teal-400 hover:scale-110"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}

export default HeroSocials;