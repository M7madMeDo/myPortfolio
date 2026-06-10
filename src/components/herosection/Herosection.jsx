import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCode } from "@fortawesome/free-solid-svg-icons";

export default function Herosection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-white flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 mb-6 border border-gray-100 rounded-full bg-gray-50 shadow-sm">
              <span className="text-[11px] font-extrabold tracking-widest text-gray-500 uppercase">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-4">
              Hi, I'm Mohamed<span className="text-gray-300">.</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-400 mb-6 tracking-wide">
              Front-End Developer
            </h2>

            <p className="text-lg sm:text-xl text-gray-500 max-w-xl mb-10 leading-relaxed font-medium">
              I specialize in building responsive, interactive, and
              user-friendly web applications using modern JavaScript frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-gray-950 text-white rounded-xl font-bold hover:bg-gray-800 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 active:scale-95"
              >
                <FontAwesomeIcon icon={faCode} />
                View Projects
              </a>

              <a
                href="/assets/file/Front-End-Mohamed-Ahmed.pdf"
                target="_blank"
                download="Mohamed_Ahamed_CV.pdf"
                className="inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-bold hover:border-gray-900 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 active:scale-95"
              >
                <FontAwesomeIcon icon={faDownload} />
                Download CV
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-120 lg:h-120 group">
              <div className="absolute inset-0 bg-gray-50 rounded-full mix-blend-multiply transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 ease-out"></div>
              <img
                src="/assets/pics/Programming-amico.webp"
                alt="Portfolio-IMG"
                className="relative w-full h-full object-cover rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-gray-100 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
