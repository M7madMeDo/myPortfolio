import About from "../about/About";
import Herosection from "../herosection/Herosection";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

export default function Home() {
  return (
    <>
      <Herosection />
      <Skills />
      <Projects />
      <About />
    </>
  );
}
