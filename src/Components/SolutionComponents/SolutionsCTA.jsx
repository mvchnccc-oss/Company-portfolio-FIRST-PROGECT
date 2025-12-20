import { motion } from "framer-motion";

export default function SolutionsCTA() {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-100 rounded-3xl shadow-xl p-14 text-center"
        >
          <span className="text-[#ff7700] uppercase tracking-widest font-semibold">
            Ready to See It in Action?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mt-6">
            Turn Your Factory Into a <br /> Smart Factory
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Start with a free pilot and see how HoruVision transforms raw video
            feeds into actionable insights — without disrupting your operations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ff7700] hover:bg-black hover:text-white transition duration-500 px-10 py-4 font-semibold rounded-xl">
              Start Free Pilot
            </button>

            <button className="border border-gray-300 hover:border-[#ff7700] hover:text-[#ff7700] transition duration-500 px-10 py-4 font-semibold rounded-xl">
              Talk to an Expert
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
