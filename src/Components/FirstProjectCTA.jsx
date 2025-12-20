import { motion } from "framer-motion";

export default function FirstProjectCTA() {
  return (
    <section className="py-28 bg-[#0b0f14] text-white">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-[#111111] border border-gray-800 rounded-3xl p-16"
        >
          <span className="text-[#ff7700] uppercase tracking-widest font-semibold">
            Early Access Program
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Be the First to Transform <br /> Your Factory
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            HoruVision is currently onboarding its first industrial partners.
            This is your opportunity to be among the first factories to deploy
            AI-powered vision systems and gain a competitive edge.
          </p>

          <ul className="mt-10 space-y-3 text-gray-300 text-sm">
            <li>✔ Priority onboarding & support</li>
            <li>✔ Customized solution for your facility</li>
            <li>✔ Direct influence on product roadmap</li>
            <li>✔ Exclusive early-adopter pricing</li>
          </ul>

          <div className="mt-12">
            <button className="bg-[#ff7700] hover:bg-white hover:text-black transition duration-500 px-12 py-4 font-semibold rounded-xl">
              Become Our First Partner
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
