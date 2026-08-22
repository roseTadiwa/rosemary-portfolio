import { hero } from "../../data/portfolio";

function HeroStats() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      {hero.stats.map((item) => (
        <div
          key={item}
          className="rounded-full border border-slate-700 bg-slate-800/70 px-5 py-3 text-sm md:text-base font-medium text-slate-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-teal-400 hover:shadow-teal-500/10"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default HeroStats;