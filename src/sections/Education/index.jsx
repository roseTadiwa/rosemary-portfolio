import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import EducationCard from "./EducationCard";
import { education } from "../../data/portfolio";

function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-slate-950"
    >
      <Container>

        <SectionTitle
          eyebrow="Education"
          title="Academic Foundation"
          description="My academic background in data science, systems, mathematics, and business."
        />

        {/* Degree */}
        <div className="mt-14">
          <EducationCard
            item={education[0]}
            featured
          />
        </div>

        {/* Earlier Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {education.slice(1).map((item) => (
            <EducationCard
              key={`${item.institution}-${item.degree}`}
              item={item}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Education;