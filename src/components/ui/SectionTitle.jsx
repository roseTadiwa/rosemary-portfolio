import FadeIn from "./FadeIn";

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center";

  return (
    <FadeIn>
      <div className={`flex flex-col ${alignment} mb-16`}>

        {eyebrow && (
          <span className="text-teal-400 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            {eyebrow}
          </span>
        )}

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
          {title}
        </h2>

        {description && (
          <p className="max-w-2xl text-gray-400 leading-relaxed text-lg">
            {description}
          </p>
        )}

      </div>
    </FadeIn>
  );
}

export default SectionTitle;