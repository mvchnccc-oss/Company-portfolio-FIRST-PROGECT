import React from "react";
import hero from "../../assets/Images/hero1.avif";
import { motion } from "framer-motion";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const word = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 15, 20, 0.85), rgba(11, 15, 20, 0.85) ), url(${hero})`,
      }}
    >
      <div className="container max-w-7xl mx-auto px-6 text-white relative z-10">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-6xl font-bold max-w-3xl leading-tight flex flex-wrap gap-x-3"
        >
          {"AI-Powered Industrial Monitoring".split(" ").map((w, i) => (
            <motion.span
              key={i}
              variants={word}
              className={`inline-block drop-shadow-lg ${
                w === "AI-Powered" ? "text-secondary" : ""
              }`}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-gray-300 mt-6 max-w-2xl drop-shadow-lg text-lg"
        >
          Detect machine faults, monitor worker behavior, and optimize
          production lines in real time using intelligent vision systems.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-[#000000] duration-400 hover:bg-[#ff7700] transition-colors cursor-pointer px-8 py-3 rounded-xl font-semibold">
            Request Demo
          </button>
          <button className="border border-gray-500 duration-400 hover:text-[#ff7700] hover:border-[#ff7700] cursor-pointer transition px-8 py-3 rounded-xl">
            Free Pilot
          </button>
        </div>
      </div>
    </section>
  );
}
