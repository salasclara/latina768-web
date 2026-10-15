import { Hero } from "@/components/Hero";
import { Solutions, Services, Process, Audience, About } from "@/components/Sections";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Solutions />
      <Process />
      <Audience />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
