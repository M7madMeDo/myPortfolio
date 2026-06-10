export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-105 lg:h-105 group">
              <div className="absolute inset-0 bg-gray-100 rounded-full mix-blend-multiply transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img
                src="/assets/pics/Figma.webp"
                alt="Working on code"
                className="relative w-full h-full object-cover rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.08)] grayscale group-hover:grayscale-0 transition-all duration-700 ease-out z-10"
              />
            </div>
          </div>

          <div className="text-center lg:text-left order-2 lg:order-0 flex flex-col items-center lg:items-start">
            <div className="w-12 h-1 bg-black mb-8"></div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              About Me
            </h2>

            <p className="text-xl sm:text-2xl text-black font-semibold mb-6 leading-relaxed">
              Front-End Developer passionate about building modern, responsive,
              and user-friendly websites.
            </p>

            <p className="text-base sm:text-lg text-gray-500 leading-loose mb-8 max-w-2xl">
              My journey in web development stems from a desire to solve complex
              problems through code. I enjoy working with HTML, CSS, JavaScript,
              and React to build responsive interfaces that look great on any
              device. I am constantly learning and exploring new technologies,
              from modern CSS frameworks like Tailwind CSS to connecting
              front-end interfaces with external APIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
