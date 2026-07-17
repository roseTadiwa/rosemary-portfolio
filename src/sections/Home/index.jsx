import Greeting from "./Greeting";
import HeroHeadline from "./HeroHeadline";
import HeroDescription from "./HeroDescription";
import HeroTechStack from "./HeroTechStack";
function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center">
        <Greeting />

        <HeroHeadline />

        <HeroDescription />
        
        <HeroTechStack />
      </div>
    </section>
  );
}

export default Home;