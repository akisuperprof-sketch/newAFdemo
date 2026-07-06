import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import BentoFeatures from "@/components/sections/BentoFeatures";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectsShowcase />
      <BentoFeatures />
      <FaqSection />
    </main>
  );
}
