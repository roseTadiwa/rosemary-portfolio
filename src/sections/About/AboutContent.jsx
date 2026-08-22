import { about } from "../../data/portfolio";
import FadeIn from "../../components/ui/FadeIn";

function AboutContent() {
  return (
    <FadeIn>
      <div className="space-y-6">

        <p className="text-lg text-gray-300 leading-relaxed">
          {about.intro}
        </p>

        <p className="text-lg text-gray-400 leading-relaxed">
          {about.journey}
        </p>

      </div>
    </FadeIn>
  );
}

export default AboutContent;