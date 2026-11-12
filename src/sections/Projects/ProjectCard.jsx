
import FadeIn from "../../components/ui/FadeIn";

function ProjectCard({ project }) {
  return (
    <FadeIn>
      <article
        className="
          group
          h-full
          bg-slate-900/60
          border border-slate-800
          rounded-2xl
          p-7
          flex
          flex-col
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-teal-400
          hover:shadow-2xl
          hover:shadow-teal-500/10
        "
      >
        {/* Category */}
        <p className="text-teal-400 text-sm font-medium mb-3">
          {project.category}
        </p>

        {/* Project Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                px-3
                py-1
                rounded-full
                bg-slate-800
                text-gray-300
                text-xs
                border
                border-slate-700
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Links */}
        {(project.github || project.live || project.publication) && (
          <div className="flex flex-wrap gap-4 mt-7 pt-5 border-t border-slate-800">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  font-medium
                  text-teal-400
                  hover:text-teal-300
                  transition
                "
              >
                GitHub →
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  font-medium
                  text-teal-400
                  hover:text-teal-300
                  transition
                "
              >
                Live Project →
              </a>
            )}

            {project.publication && (
              <a
                href={project.publication}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  font-medium
                  text-teal-400
                  hover:text-teal-300
                  transition
                "
              >
                Published on MacroEdTech →
              </a>
            )}

          </div>
        )}
      </article>
    </FadeIn>
  );
}

export default ProjectCard;
