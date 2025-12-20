import React from "react";
import { motion } from "framer-motion";

const useCases = [
  {
    title: "Machine Downtime Prevention",
    problem: "Unexpected machine failures cause production delays.",
    solution: "AI monitors machine behavior and detects anomalies early.",
    impact: "Up to 30% reduction in unplanned downtime.",
  },
  {
    title: "Worker Safety Monitoring",
    problem: "Unsafe actions lead to workplace accidents.",
    solution: "Real-time vision detects risky behaviors instantly.",
    impact: "Improved safety compliance & fewer incidents.",
  },
  {
    title: "Quality Inspection Automation",
    problem: "Manual inspection is slow and inconsistent.",
    solution: "Computer vision detects defects automatically.",
    impact: "Higher quality output with less waste.",
  },
];

export default function Projects() {
  return (
    <section className="py-28 bg-[#0b0f14] text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-[#ff7700] uppercase tracking-widest font-semibold">
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Real Problems. Real Impact.
          </h2>
          <p className="text-gray-400 mt-6">
            See how HoruVision solves real industrial challenges using AI
            vision.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {useCases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-gray-800 rounded-2xl p-8 hover:border-[#ff7700] transition"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>

              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">Problem:</span>{" "}
                {item.problem}
              </p>

              <p className="text-sm text-gray-400 mt-3">
                <span className="text-white font-semibold">Solution:</span>{" "}
                {item.solution}
              </p>

              <p className="text-sm text-[#ff7700] mt-4 font-semibold">
                Impact: {item.impact}
              </p>
            </motion.div>
          ))}
        </div>
        {/* Early Partner Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 max-w-3xl mx-auto text-center bg-[#111111] border border-dashed border-[#ff7700]/40 rounded-2xl p-12"
        >
          <span className="text-[#ff7700] uppercase tracking-widest font-semibold">
            Early Access
          </span>

          <h3 className="text-3xl font-bold mt-4">
            Be One of Our First Industrial Partners
          </h3>

          <p className="text-gray-400 mt-6 leading-relaxed">
            These use cases are currently being deployed with selected early
            partners. Join HoruVision as one of the first factories to implement
            AI vision systems and shape the future of industrial intelligence.
          </p>

          <p className="text-sm text-gray-500 mt-4">
            Limited early-access slots available.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <h3 className="text-3xl font-bold">Ready to Be Among the First?</h3>

          <button className="mt-8 bg-[#ff7700] hover:bg-white hover:text-black transition px-10 py-4 font-semibold rounded-xl">
            Request Free Pilot
          </button>
        </motion.div>
      </div>
    </section>
  );
}
