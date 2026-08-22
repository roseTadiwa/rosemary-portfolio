import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

import { about } from "../../data/portfolio";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950"
    >
      <Container>

        <SectionTitle
          eyebrow={about.eyebrow}
          title={about.title}
          description=""
        />

        <AboutContent />

        <AboutCards />

      </Container>
    </section>
  );
}

export default About;