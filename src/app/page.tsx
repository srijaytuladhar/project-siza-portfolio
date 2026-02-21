import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillOrbit from "@/components/SkillOrbit";
import ImpactMetrics from "@/components/ImpactMetrics";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import AvailabilityPill from "@/components/AvailabilityPill";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
      <CustomCursor />
      <div className="noise-overlay" />
      <AvailabilityPill />
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <ImpactMetrics />
        <Projects />
        <Experience />
        <SkillOrbit />
      </div>
      <Footer />
    </main>
  );
}
