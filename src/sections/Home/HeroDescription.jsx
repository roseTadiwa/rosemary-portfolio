import { hero } from "../../data/portfolio";

function HeroDescription() {
  return (
    <p className="mt-8 max-w-3xl text-lg md:text-xl text-slate-300 leading-8">
      {hero.description}
    </p>
  );
}

export default HeroDescription;