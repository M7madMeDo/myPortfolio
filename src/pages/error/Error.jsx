import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Error() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center w-full">
        <div className="mb-10 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gray-200 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 ease-out"></div>
            <img
              src="/assets/pics/Error404.webp"
              alt="404 Error"
              className="relative w-full max-w-sm rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] mix-blend-multiply grayscale group-hover:grayscale-0 transition-all duration-700 ease-out bg-white z-10"
            />
          </div>
        </div>

        <h1 className="text-7xl sm:text-9xl font-extrabold text-gray-900 tracking-tighter mb-2">
          4<span className="text-gray-300">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-5 tracking-tight">
          Oops! Page Not Found.
        </h2>

        <p className="text-base sm:text-lg text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto">
          The page you are looking for doesn't exist. It might have been moved,
          deleted, or perhaps you mistyped the URL.
        </p>

        <div className="flex justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-3 bg-gray-950 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-800 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 active:scale-95"
          >
            <FontAwesomeIcon icon={faHome} className="text-lg" />
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
}
