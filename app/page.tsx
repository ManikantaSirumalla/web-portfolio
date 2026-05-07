import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import PortfolioDetails from "@/components/PortfolioDetails";
import SiteNav from "@/components/SiteNav";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-white/30 selection:text-white">
      <SiteNav />
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Achievements />
      <Projects />
      <PortfolioDetails />
    </main>
  );
}
