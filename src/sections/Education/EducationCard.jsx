import FadeIn from "../../components/ui/FadeIn";

function EducationCard({ item, featured = false }) {
  return (
    <FadeIn>
      <article
        className={`
          group
          h-full
          bg-slate-900/60
          border
          rounded-2xl
          p-7
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-teal-400
          hover:shadow-2xl
          hover:shadow-teal-500/10
          ${
            featured
              ? "border-teal-500/40 md:p-9"
              : "border-slate-800"
          }
        `}
      >
        {/* Period */}
        <p className="text-teal-400 text-sm font-medium mb-3">
          {item.period}
        </p>

        {/* Degree */}
        <h3
          className={`
            font-semibold
            text-white
            ${
              featured
                ? "text-2xl md:text-3xl"
                : "text-xl"
            }
          `}
        >
          {item.degree}
        </h3>

        {/* Institution */}
        <p className="text-gray-300 mt-2">
          {item.institution}
        </p>

        {/* Result */}
        <div className="inline-flex mt-5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
          <span className="text-teal-400 text-sm font-medium">
            {item.result}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mt-5">
          {item.description}
        </p>
      </article>
    </FadeIn>
  );
}

export default EducationCard;