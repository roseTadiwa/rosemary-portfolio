import FadeIn from "../../components/ui/FadeIn";

function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
  responsibilities,
}) {
  return (
    <FadeIn>
      <div className="relative pl-8 md:pl-12">

        {/* Timeline Dot */}
        <div
          className="
            absolute
            left-0
            top-2
            w-4
            h-4
            rounded-full
            bg-teal-400
            border-4
            border-slate-950
          "
        ></div>

        {/* Experience Card */}
        <div
          className="
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
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">

            <div>
              <h3 className="text-white text-xl font-semibold">
                {title}
              </h3>

              <p className="text-teal-400 font-medium mt-1">
                {company}
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-gray-300 text-sm font-medium">
                {period}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                {location}
              </p>
            </div>

          </div>

          <p className="text-gray-400 leading-relaxed mb-5">
            {description}
          </p>

          <ul className="space-y-3">
            {responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-gray-400 leading-relaxed"
              >
                <span className="text-teal-400 mt-2">•</span>

                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </FadeIn>
  );
}

export default ExperienceCard;