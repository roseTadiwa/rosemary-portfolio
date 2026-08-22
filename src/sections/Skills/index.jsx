import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import FadeIn from "../../components/ui/FadeIn";
import SkillCard from "./SkillCard";

import { skills } from "../../data/portfolio";

import {
  FaChartLine,
  FaDatabase,
  FaRobot,
  FaCode,
} from "react-icons/fa";

const icons = [
  FaChartLine,
  FaDatabase,
  FaRobot,
  FaCode,
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950"
    >
      <Container>

        <SectionTitle
          eyebrow={skills.eyebrow}
          title={skills.title}
          description={skills.description}
        />

        <FadeIn>
          <div className="grid md:grid-cols-2 gap-6 mt-14">

            {skills.categories.map((category, index) => (
              <SkillCard
                key={category.title}
                icon={icons[index]}
                title={category.title}
                description={category.description}
                skills={category.skills}
              />
            ))}

          </div>
        </FadeIn>

      </Container>
    </section>
  );
}

export default Skills;