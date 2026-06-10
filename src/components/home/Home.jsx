import About from "../about/About";
import Herosection from "../herosection/Herosection";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Herosection />
      <Skills />
      <Projects />
      <About />
    </main>
  );
}
