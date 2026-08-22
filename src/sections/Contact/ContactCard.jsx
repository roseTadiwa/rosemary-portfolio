import FadeIn from "../../components/ui/FadeIn";

function ContactCard({ icon, title, value, href }) {
  return (
    <FadeIn>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="
          group
          block
          bg-slate-900/60
          border
          border-slate-800
          rounded-2xl
          p-6
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-teal-400
          hover:shadow-2xl
          hover:shadow-teal-500/10
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-teal-500/10
              flex
              items-center
              justify-center
              text-teal-400
              text-xl
              group-hover:bg-teal-500/20
              transition
            "
          >
            {icon}
          </div>

          <div>
            <p className="text-gray-400 text-sm">
              {title}
            </p>

            <p className="text-white font-medium mt-1 break-all">
              {value}
            </p>
          </div>

        </div>
      </a>
    </FadeIn>
  );
}

export default ContactCard;