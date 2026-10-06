import StudioHero from "@/components/hero/StudioHero";
import Achievements from "@/components/sections/Achievements";
import FeaturedMedia from "@/components/sections/FeaturedMedia";
import ResumeHub from "@/components/sections/ResumeHub";
import Projects from "@/components/sections/Projects";
import PortfolioDetails from "@/components/sections/PortfolioDetails";

export default function Home() {
  return (
    <main id="content" className="site-main">
      <StudioHero />
      <Projects />
      <ResumeHub />
      <Achievements />
      <FeaturedMedia />
      <PortfolioDetails />
    </main>
  );
}
