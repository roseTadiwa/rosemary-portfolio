import { hero } from "../../data/portfolio";

function Greeting() {
  return (
    <p className="text-teal-400 text-lg md:text-xl font-medium mb-4">
      {hero.greeting}
    </p>
  );
}

export default Greeting;