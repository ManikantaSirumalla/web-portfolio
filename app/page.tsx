import ScrollyCanvas from "@/components/hero/ScrollyCanvas";
import Overlay from "@/components/hero/Overlay";
import Achievements from "@/components/sections/Achievements";
import FeaturedMedia from "@/components/sections/FeaturedMedia";
import ResumeHub from "@/components/sections/ResumeHub";
import Projects from "@/components/sections/Projects";
import PortfolioDetails from "@/components/sections/PortfolioDetails";

export default function Home() {
  return (
    <main id="content" className="site-main">
      <div className="hero-stage">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Projects />
      <ResumeHub />
      <Achievements />
      <FeaturedMedia />
      <PortfolioDetails />
    </main>
  );
}
