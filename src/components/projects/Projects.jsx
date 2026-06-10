import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: "ToDo List",
      description:
        "A simple and intuitive task management application that allows users to add, edit, delete, and organize daily tasks efficiently. It features local storage to ensure data persistence and a clean, user-friendly interface.",
      image: "/assets/pics/todolist.webp",
      liveLink: "https://todolist-medo.netlify.app/",
      repoLink: "https://github.com/M7madMeDo/TodoList.git",
    },
    {
      id: 2,
      title: "Bookmarker",
      description:
        "A web application designed to save and manage favorite website links. Users can easily add, visit, and delete bookmarks, with data stored locally for quick and reliable access.",
      image: "/assets/pics/book.webp",
      liveLink: "https://bookmark-medo.netlify.app/",
      repoLink: "https://github.com/M7madMeDo/bookmarker.git",
    },
    {
      id: 3,
      title: "React Portfolio",
      description:
        "A modern and responsive personal portfolio built with React. It showcases projects, skills, and contact information through reusable components and a clean, professional design.",
      image: "/assets/pics/protfail.png",
      liveLink: "m7mad-portfolio.netlify.app",
      repoLink: "https://github.com/M7madMeDo/myPortfolio.git",
    },
    {
      id: 4,
      title: "Crypto Money Tracker",
      description:
        "A responsive React application that displays cryptocurrency market data using the CoinGecko API. The app features a clean UI, dynamic data fetching, and smooth pagination for an enhanced user experience.",
      image: "/assets/pics/Cypto projeect.png",
      liveLink: "",
      repoLink: "https://github.com/M7madMeDo/crypto-money-tracker",
    },
    {
      id: 5,
      title: "E-Commerce",
      description:
        "A fully responsive E-Commerce application built with React and Tailwind CSS, leveraging the DummyJSON API for dynamic product management. The project features a secure authentication system via js-cookies, a scalable folder architecture, and a seamless user experience powered by React Router and Sweet Alert.",
      image: "/assets/pics/e-Commerce.webp",
      liveLink: "https://e-commerce-react-black-sigma.vercel.app/",
      repoLink: "https://github.com/M7madMeDo/E-Commerce-React",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-black mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100 border-b border-gray-50">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="flex flex-col flex-1 p-6 sm:p-8">
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-100">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 bg-gray-950 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors active:scale-95 shadow-sm"
                    >
                      <FontAwesomeIcon icon={faCode} />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 bg-gray-100 text-gray-400 rounded-xl text-sm font-semibold cursor-not-allowed opacity-70"
                    >
                      <FontAwesomeIcon icon={faCode} />
                      No Demo Yet
                    </button>
                  )}

                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors active:scale-95"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
