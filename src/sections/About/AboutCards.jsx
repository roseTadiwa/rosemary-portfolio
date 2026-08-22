import FadeIn from "../../components/ui/FadeIn";
import { about } from "../../data/portfolio";

function AboutCards() {
  return (
    <FadeIn>
      <div className="grid md:grid-cols-2 gap-6 mt-14">

        {about.cards.map((card) => (
          <div
            key={card.title}
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

            <h3 className="text-white text-xl font-semibold mb-3">
              {card.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {card.description}
            </p>

          </div>
        ))}

      </div>
    </FadeIn>
  );
}

export default AboutCards;