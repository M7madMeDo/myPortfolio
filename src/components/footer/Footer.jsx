import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-black text-white py-12 mt-auto border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-2xl font-extrabold tracking-tight mb-2">
              Mohamed<span className="text-gray-600">.</span>
            </h4>
            <p className="text-sm text-gray-400 font-medium flex items-center">
              Built with React & Tailwind CSS
              <FontAwesomeIcon icon={faHeart} className="text-gray-300 ml-2" />
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 font-medium">
              &copy; {currentYear} Mohamed Portfolio. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/M7madMeDo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-a-abdelhamied-6925803a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
