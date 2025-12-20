import { motion } from "framer-motion";

const cases = [
  {
    industry: "Food & Beverage",
    problem: "Undetected contamination & idle production lines.",
    solution: "AI detects workflow interruptions and hygiene violations.",
    result: "Reduced downtime by 30%",
  },
  {
    industry: "Pharmaceuticals",
    problem: "Strict compliance and human error risks.",
    solution: "Continuous monitoring with automated alerts.",
    result: "24/7 compliance visibility",
  },
  {
    industry: "Automotive",
    problem: "Complex assembly errors and machine failures.",
    solution: "Real-time fault detection and workflow tracking.",
    result: "Higher production accuracy",
  },
  {
    industry: "Packaging & Assembly",
    problem: "Manual quality checks slow production.",
    solution: "AI-based defect detection on conveyor lines.",
    result: "Faster QA with fewer defects",
  },
];

export default function UseCases() {
  return (
    <section className="py-28 bg-[#0b0f14] text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#ff7700] text-2xl uppercase tracking-widest">
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Proven Across Industries
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            HoruVision adapts to different industrial environments with tailored
            AI models.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-gray-800 rounded-2xl p-8 hover:border-[#ff7700] transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.industry}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                <span className="text-white font-semibold">Problem: </span>
                {item.problem}
              </p>

              <p className="text-gray-400 text-sm mb-3">
                <span className="text-white font-semibold">Solution: </span>
                {item.solution}
              </p>

              <p className="text-[#ff7700] font-semibold text-sm">
                Result: {item.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
