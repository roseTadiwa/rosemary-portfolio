import { techStack } from "../../data/portfolio";

function HeroTechStack() {
  return (
    <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-4">
      {techStack.map((tech) => (
        <div
          key={tech}
          className="px-5 py-2 rounded-full border border-slate-700 bg-slate-800/60 text-slate-200 font-medium transition-all duration-300 hover:border-teal-400 hover:bg-slate-700 hover:-translate-y-1 hover:shadow-lg"
        >
          {tech}
        </div>
      ))}
    </div>
  );
}

export default HeroTechStack;