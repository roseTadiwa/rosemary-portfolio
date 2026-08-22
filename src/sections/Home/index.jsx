import Greeting from "./Greeting";
import HeroHeadline from "./HeroHeadline";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import HeroTechStack from "./HeroTechStack";
import HeroSocials from "./HeroSocials";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import FadeIn from "../../components/ui/FadeIn";


function Home() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        px-6
        py-20
        overflow-hidden
        bg-linear-to-br
        from-slate-950
        via-black
        to-slate-900
      "
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          w-full
          grid
          md:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* Left Content */}
        <div
          className="
            text-center
            md:text-left
            animate-fade-in
          "
        >
         <FadeIn delay={0}>
  <Greeting />
</FadeIn>

<FadeIn delay={0.05}>
  <HeroHeadline />
</FadeIn>

<FadeIn delay={0.1}>
  <HeroDescription />
</FadeIn>

<FadeIn delay={0.1}>
  <HeroStats />
</FadeIn>

<FadeIn delay={0.1}>
  <HeroButtons />
</FadeIn>

<FadeIn delay={0.1}>
  <HeroTechStack />
</FadeIn>

<FadeIn delay={0.1}>
  <HeroSocials />
</FadeIn>
        </div>

        {/* Right Image */}
       <FadeIn delay={0.15}>
  <div className="flex justify-center">
    <HeroImage />
  </div>
</FadeIn>
      </div>
    </section>
  );
}

export default Home;