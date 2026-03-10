import React from "react";
import { motion } from "framer-motion";
import servicesBg from "../../assets/Images/about.webp";
import {
  FaRobot,
  FaCogs,
  FaChartLine,
  FaUserCheck,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ServiceHome() {
  return (
    <section className="relative py-20">
      {/* Hero */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center text-white max-w-2xl mx-auto px-6 flex flex-col justify-center h-full"
        >
          <span className="text-[#ff7700] uppercase tracking-widest text-2xl font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What We Offer & <br /> What We Do.
          </h2>

          <p className="mt-6 text-gray-300 text-md">
            Intelligent vision systems for industrial monitoring and production
            optimization.
          </p>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="relative z-20 -mt-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaRobot size={70} />,
                title: "Machine Monitoring",
                desc: "Track machine performance in real-time to prevent faults and downtime.",
              },
              {
                icon: <FaUserCheck size={70} />,
                title: "Worker Behavior Analysis",
                desc: "Monitor and optimize employee workflow with AI-powered vision.",
              },
              {
                icon: <FaCogs size={70} />,
                title: "Production Optimization",
                desc: "Improve efficiency and reduce waste in industrial processes.",
              },
              {
                icon: <FaChartLine size={70} />,
                title: "Real-time Analytics",
                desc: "Gain actionable insights from live data for smarter decision-making.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white p-8 lg:p-10 xl:p-12 text-center shadow-xl rounded-xl flex flex-col items-center transition-all duration-300 hover:-translate-y-5 hover:bg-[#ff7700]"
              >
                <div className="text-[#ff7700] mb-4 text-5xl group-hover:text-black transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500 font-semibold text-sm group-hover:text-white">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
