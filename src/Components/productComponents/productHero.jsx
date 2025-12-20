import React from "react";
import heroImg from "../../assets/Images/hero1.avif";
import { motion } from "framer-motion";

export default function ProductHero() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#ff7700] text-2xl uppercase tracking-widest font-semibold"
            >
              HoruVision Product
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mt-4 leading-tight"
            >
              AI Vision Platform <br />
              for Industrial Intelligence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-6 text-gray-600 max-w-xl leading-relaxed"
            >
              HoruVision transforms industrial cameras into intelligent
              monitoring systems that detect faults, improve safety, and
              optimize production — all in real time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="bg-[#ff7700] hover:bg-black hover:text-white duration-300 px-8 py-4 font-semibold rounded-lg">
                Request Free Pilot
              </button>

              <button className="border border-gray-300 hover:border-[#ff7700] hover:text-[#ff7700] duration-300 px-8 py-4 rounded-lg">
                View Capabilities
              </button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="HoruVision Product"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Accent */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#ff7700]/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
