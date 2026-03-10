import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Built for Industry",
    desc: "Designed specifically for factories, production lines, and harsh industrial environments.",
  },
  {
    title: "Real-Time Decisions",
    desc: "Instant alerts and insights — not delayed reports after problems happen.",
  },
  {
    title: "No Hardware Replacement",
    desc: "Works seamlessly with your existing camera infrastructure.",
  },
  {
    title: "Vision That Acts",
    desc: "From detection to action — AI that actually improves operations.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyHoruVision() {
  return (
    <section className="py-28 bg-[#0b0f14] text-white">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#ff7700] text-2xl uppercase tracking-widest font-semibold"
        >
          Why HoruVision
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mt-4"
        >
          Built Different. Built for Industry.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          HoruVision is not a generic AI platform. It is engineered to solve
          real industrial problems with speed, accuracy, and reliability.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-20"
        >
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-[#111111] border border-gray-800 rounded-2xl p-8
                         hover:border-[#ff7700] hover:-translate-y-5
                         transition duration-300"
            >
              <h3 className="font-bold text-[#ff7700] text-lg">{item.title}</h3>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
