// Components/Problems.jsx
import { motion } from "framer-motion";

const problems = [
  {
    title: "Hidden Machine Failures",
    desc: "Machines fail silently until production stops completely.",
  },
  {
    title: "Unsafe Human Behavior",
    desc: "Small unsafe actions lead to major accidents.",
  },
  {
    title: "No Real-Time Visibility",
    desc: "Managers discover problems too late.",
  },
  {
    title: "Manual Monitoring",
    desc: "Humans can’t watch 24/7 like AI can.",
  },
];
export default function Problems() {
  
  return (    <section className="py-28 bg-white ">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-[#ff7700] text-3xl font-semibold uppercase tracking-widest">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Why Factories Fail
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Most factories don’t fail suddenly — they fail silently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-gray-800 p-8 rounded-2xl hover:border-[#ff7700] hover:-translate-y-2 transition"
            >
              <h3 className="text-xl text-[#ff7700] font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-4 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
