import { hero } from "../../data/portfolio";

function HeroHeadline() {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        {hero.name}
      </h1>

      <h2 className="mt-5 text-2xl md:text-4xl font-semibold text-teal-400">
        {hero.headline}
      </h2>
    </>
  );
}

export default HeroHeadline;