import React from "react";
import { motion } from "framer-motion";

const features = [
  "Real-time video monitoring",
  "AI-based fault detection",
  "Worker behavior analysis",
  "Production performance tracking",
  "Instant alerts & reports",
  "Easy integration with existing cameras",
];

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function KeyCapabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[#ff7700] text-2xl uppercase tracking-widest font-semibold">
              Capabilities
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Everything You Need in One Platform
            </h2>

            <p className="mt-6 text-gray-600">
              HoruVision combines computer vision, analytics, and real-time
              alerts into a single unified system.
            </p>

            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 space-y-4"
            >
              {features.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="w-2 h-2 bg-[#ff7700] rounded-full"></span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-100 rounded-3xl h-[380px] flex items-center justify-center text-gray-400 text-lg"
          >
            Product Dashboard Preview
          </motion.div>
        </div>
      </div>
    </section>
  );
}
