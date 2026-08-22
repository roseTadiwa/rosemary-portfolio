import FadeIn from "../../components/ui/FadeIn";
import { experience } from "../../data/portfolio";

function ExperienceTimeline() {
  return (
    <div className="relative mt-16">

      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2" />

      <div className="space-y-12">

        {experience.map((item, index) => (
          <FadeIn key={`${item.company}-${item.role}`}>

            <div
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >

              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-8 w-3 h-3 rounded-full bg-teal-400 border-4 border-slate-950 md:-translate-x-1/2 z-10" />

              {/* Experience Card */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">

                <div
                  className="
                    group
                    bg-slate-900/60
                    border border-slate-800
                    rounded-2xl
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-teal-400
                    hover:shadow-2xl
                    hover:shadow-teal-500/10
                  "
                >

                  {/* Period */}
                  <p className="text-teal-400 text-sm font-medium mb-3">
                    {item.period}
                  </p>

                  {/* Role */}
                  <h3 className="text-white text-xl font-semibold">
                    {item.role}
                  </h3>

                  {/* Company */}
                  <p className="text-gray-300 mt-1">
                    {item.company}
                  </p>

                  {/* Location & Type */}
                  <div className="flex flex-wrap gap-2 mt-3">

                    <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-gray-400">
                      {item.location}
                    </span>

                    <span className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-400">
                      {item.type}
                    </span>

                  </div>

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

                        <span>{responsibility}</span>
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

            </div>

          </FadeIn>
        ))}

      </div>

    </div>
  );
}

export default ExperienceTimeline;