import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { ProfessionalExperience } from "@/components/sections/professional-experience";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <ProfessionalExperience />
        <Services />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
