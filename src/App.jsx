import Navbar from "./components/layout/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education/>
        <Contact/>
        <Footer />
      </main>
    </>
  );
}

export default App;