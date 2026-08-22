import { experience } from "../../data/portfolio";
import FadeIn from "../../components/ui/FadeIn";

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-16">

          <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Where I’ve Applied Data, AI & Technology
          </h2>

          <p className="text-gray-400 max-w-2xl mt-5 leading-relaxed">
            My professional experience spans data analytics, research,
            monitoring and evaluation, and technology-driven solutions.
          </p>

        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {experience.map((item) => (

            <FadeIn key={`${item.company}-${item.role}`}>

              <div
                className="
                  group
                  h-full
                  bg-slate-900/60
                  border border-slate-800
                  rounded-2xl
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-teal-400
                  hover:shadow-2xl
                  hover:shadow-teal-500/10
                "
              >

                {/* Date */}
                <p className="text-teal-400 text-sm font-medium mb-2">
                  {item.period}
                </p>

                {/* Role */}
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {item.role}
                </h3>

                {/* Company & Location */}
                <p className="text-gray-300 mt-1">
                  {item.company} · {item.location}
                </p>

                {/* Category */}
                <span className="inline-block mt-4 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs">
                  {item.type}
                </span>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mt-5">
                  {item.description}
                </p>

                {/* Responsibilities */}
                <ul className="mt-5 space-y-3">

                  {item.responsibilities.map((responsibility) => (

                    <li
                      key={responsibility}
                      className="flex gap-3 text-gray-400 text-sm leading-relaxed"
                    >

                      <span className="text-teal-400 mt-1">
                        ▹
                      </span>

                      <span>
                        {responsibility}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            </FadeIn>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;