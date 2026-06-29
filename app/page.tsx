import ScrollyCanvas from "@/components/hero/ScrollyCanvas";
import Overlay from "@/components/hero/Overlay";
import SiteNav from "@/components/layout/SiteNav";
import Achievements from "@/components/sections/Achievements";
import FeaturedMedia from "@/components/sections/FeaturedMedia";
import ResumeHub from "@/components/sections/ResumeHub";
import Projects from "@/components/sections/Projects";
import PortfolioDetails from "@/components/sections/PortfolioDetails";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-white/30 selection:text-white">
      <SiteNav />
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <ResumeHub />
      <Achievements />
      <FeaturedMedia />
      <Projects />
      <PortfolioDetails />
    </main>
  );
}
