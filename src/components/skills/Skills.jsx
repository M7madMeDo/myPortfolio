import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faGithub,
  faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "HTML5", icon: faHtml5, color: "#E34F26" },
  { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "React", icon: faReact, color: "#61DAFB" },
  { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
  { name: "Tailwind", icon: faTailwindCss, color: "#06B6D4" },
  { name: "GitHub", icon: faGithub, color: "#181717" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-black mx-auto mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group w-35 h-35 sm:w-40 sm:h-40 flex flex-col items-center justify-center bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:bg-white transition-all duration-300 cursor-default"
            >
              <FontAwesomeIcon
                icon={skill.icon}
                size="3x"
                style={{ color: skill.color }}
                className="mb-4 transform group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-sm sm:text-base font-bold text-gray-600 group-hover:text-gray-900 transition-colors tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
