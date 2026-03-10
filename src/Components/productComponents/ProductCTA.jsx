import React from "react";
import { motion } from "framer-motion";

export default function ProductCTA() {
  return (
    <>
      <section className="py-28 bg-[#0b0f14]">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto 
                     bg-[#111111] border border-gray-800 
                     rounded-3xl p-14 text-center shadow-2xl overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff7700]/20 rounded-full blur-3xl"></div>

            <span className="relative z-10 text-[#ff7700] uppercase tracking-widest font-semibold">
              Ready to See It in Action?
            </span>

            <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mt-6">
              Turn Your Factory Into a <br /> Smart Factory
            </h2>

            <p className="relative z-10 text-gray-400 mt-6 max-w-2xl mx-auto">
              Start with a free pilot and see how HoruVision transforms raw
              video feeds into actionable insights — without disrupting your
              operations.
            </p>

            <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ff7700] hover:bg-white hover:text-black transition duration-500 px-10 py-4 font-semibold rounded-xl">
                Start Free Pilot
              </button>

              <button className="border border-gray-700 hover:border-[#ff7700] hover:text-[#ff7700] transition duration-500 px-10 py-4 font-semibold rounded-xl text-white">
                Talk to an Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
