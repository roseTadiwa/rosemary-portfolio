import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ContactCard from "./ContactCard";
import { contact } from "../../data/portfolio";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950"
    >
      <Container>

        <SectionTitle
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
        />

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">

          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
          />

          <ContactCard
            icon={<FaPhone />}
            title="Phone"
            value={contact.phone}
            href={`tel:${contact.phone}`}
          />

          <ContactCard
            icon={<FaLinkedin />}
            title="LinkedIn"
            value="Connect with me"
            href={contact.linkedin}
          />

          <ContactCard
            icon={<FaGithub />}
            title="GitHub"
            value="View my projects"
            href={contact.github}
          />

        </div>

        {/* Call To Action */}
        <div className="text-center mt-14">

          <p className="text-gray-400 mb-5">
            Interested in working together?
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="
              inline-flex
              items-center
              gap-2
              px-7
              py-3
              rounded-xl
              bg-teal-500
              text-slate-950
              font-semibold
              transition-all
              duration-300
              hover:bg-teal-400
              hover:-translate-y-1
              hover:shadow-lg
              hover:shadow-teal-500/20
            "
          >
            Get In Touch
            <span>→</span>
          </a>

        </div>

      </Container>
    </section>
  );
}

export default Contact;