import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-32 bg-[#0b0f14] text-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-[#ff7700] text-2xl uppercase tracking-widest font-semibold">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Let’s Build a Smarter Factory
          </h1>
          <p className="mt-6 text-gray-400">
            Tell us about your factory and challenges. Our team will get back
            to you with a tailored solution.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 mt-20 items-start">

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111111] border border-gray-800 rounded-3xl p-10 space-y-3"
          >
            <div>
              <label className="text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-2 px-4 py-4 bg-[#0b0f14] border border-gray-700 rounded-xl outline-none focus:border-[#ff7700]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Work Email</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full mt-2 px-4 py-4 bg-[#0b0f14] border border-gray-700 rounded-xl outline-none focus:border-[#ff7700]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Company Name</label>
              <input
                type="text"
                placeholder="Factory / Company"
                className="w-full mt-2 px-4 py-4 bg-[#0b0f14] border border-gray-700 rounded-xl outline-none focus:border-[#ff7700]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your factory, cameras, or challenges..."
                className="w-full mt-2 px-4 py-4 bg-[#0b0f14] border border-gray-700 rounded-xl outline-none focus:border-[#ff7700]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff7700] hover:bg-white hover:text-black transition duration-500 py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Why Contact HoruVision?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We don’t sell generic software. Every deployment is customized
                based on your factory layout, production lines, and existing
                camera infrastructure.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#ff7700] text-xl" />
                <span className="text-gray-300">contact@horuvisiontech.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#ff7700] text-xl" />
                <span className="text-gray-300">+20 XXX XXX XXXX</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#ff7700] text-xl" />
                <span className="text-gray-300">Giza, Egypt</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-20"
        >
          We usually respond within 24 hours.
        </motion.p>

      </div>
    </section>
  );
}
