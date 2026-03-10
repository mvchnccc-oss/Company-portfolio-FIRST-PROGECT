import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    desc: "For small production lines",
    features: [
      "Up to 5 cameras",
      "Basic AI detection",
      "Real-time alerts",
      "Email support",
    ],
  },
  {
    name: "Professional",
    desc: "For growing factories",
    features: [
      "Up to 20 cameras",
      "Advanced AI models",
      "Dashboard & analytics",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    desc: "Custom industrial solutions",
    features: [
      "Unlimited cameras",
      "Custom AI models",
      "On-prem / Edge deployment",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
  <>
  
    <section className="py-32 bg-[#0b0f14] text-white">
      <div className="container max-w-7xl mx-auto px-6 text-center">

        {/* Hero */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#ff7700] text-3xl uppercase tracking-widest font-semibold"
        >
          Pricing
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mt-4"
        >
          Flexible Plans for Every Factory
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          Choose a plan that fits your operations. Start with a free pilot
          before committing.
        </motion.p>

        {/* Plans */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`rounded-3xl p-10 border 
                ${
                  plan.highlight
                    ? "bg-[#111111] border-[#ff7700]"
                    : "bg-[#0f141b] border-gray-800"
                }`}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-gray-400 text-sm">{plan.desc}</p>

              <ul className="mt-8 space-y-4 text-sm text-gray-300">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ff7700] rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full px-6 py-4 rounded-xl font-semibold transition
                ${
                  plan.highlight
                    ? "bg-[#ff7700] hover:bg-white hover:text-black"
                    : "border border-gray-700 hover:border-[#ff7700] hover:text-[#ff7700]"
                }`}
              >
                {plan.highlight ? "Start Free Pilot" : "Contact Sales"}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-gray-500 text-sm"
        >
          * Pricing depends on factory size, number of cameras, and deployment
          requirements.
        </motion.p>

      </div>
    </section>
  
  </>
  )
}
