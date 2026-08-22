import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/portfolio";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-950"
    >
      <Container>

        <SectionTitle
          eyebrow="Projects"
          title="Things I've Built"
          description="A selection of data science, AI, data engineering, and software development projects."
        />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

        {/* Full Portfolio CTA */}
        <div className="mt-16 text-center">

          <p className="text-gray-400 mb-5">
            Want to explore more of my work?
          </p>

          <a
            href="https://www.datascienceportfol.io/rosemarymtape"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-teal-500
              text-slate-950
              font-semibold
              transition-all
              duration-300
              hover:bg-teal-400
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-teal-500/20
            "
          >
            Explore Full Portfolio
            <span>→</span>
          </a>

        </div>

      </Container>
    </section>
  );
}

export default Projects;