function SkillCard({ icon: Icon, title, description, skills }) {
  return (
    <div
      className="
        group
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
      <div
        className="
          w-14
          h-14
          rounded-xl
          bg-teal-500/10
          flex
          items-center
          justify-center
          mb-6
          group-hover:bg-teal-500/20
          transition
        "
      >
        <Icon className="text-2xl text-teal-400" />
      </div>

      <h3 className="text-white text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-5">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-3
              py-1.5
              text-sm
              text-gray-300
              bg-slate-800/70
              border
              border-slate-700
              rounded-lg
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;