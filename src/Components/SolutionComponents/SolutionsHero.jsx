// Components/SolutionsHero.jsx
import hero from "../../assets/Images/about.webp";

export default function SolutionsHero() {
  return (
    <section
      className="relative h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          AI-Powered Solutions for Smart Factories
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Detect failures, improve safety, and optimize production
          using real-time computer vision.
        </p>

        <button className="mt-8 bg-[#ff7700] hover:bg-white hover:text-black transition duration-500 cursor-pointer px-8 py-4 font-semibold rounded-lg">
          Request Free Pilot
        </button>
      </div>
    </section>
  );
}
