import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Machine Fault Detection",
    desc: "Detect abnormal machine behavior before breakdowns happen.",
  },
  {
    title: "Worker Safety Monitoring",
    desc: "Identify unsafe actions and prevent workplace accidents.",
  },
  {
    title: "Production Analytics",
    desc: "Track productivity and optimize workflows in real time.",
  },
  {
    title: "Quality Inspection",
    desc: "Detect defects automatically using computer vision.",
  },
];

export default function SolutionDetails() {
  return (
    <section className="relative py-32 bg-[#0b0f14] text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#ff7700] text-3xl uppercase tracking-widest"
        >
          Our Solutions
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mt-4"
        >
          What We Offer & What We Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto"
        >
          Smart AI solutions designed specifically for industrial environments.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white text-black rounded-2xl p-8 shadow-xl cursor-default"
            >
              <div className="text-[#ff7700] text-4xl mb-4">⬤</div>
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-gray-600 mt-3 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
