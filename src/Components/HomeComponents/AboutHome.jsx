import React from "react";
import aboutImg from "../../assets/Images/about.webp";

export default function AboutHome() {
  return (
    <>
      <section className="py-24 bg-white text-gray-700">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#ff7700] font-semibold uppercase tracking-widest">
                About HoruVision
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                Intelligent Vision for <br /> Modern Factories
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                HoruVision delivers AI-powered monitoring systems designed
                specifically for industrial environments. We help factories
                detect machine faults, monitor production workflows, and ensure
                worker safety in real time.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                By combining computer vision, real-time analytics, and smart
                alerts, we transform raw video feeds into actionable insights
                that improve efficiency and reduce downtime.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="bg-black text-white hover:bg-[#ff7700] hover:text-black duration-500 transition px-6 py-3 font-semibold rounded-lg">
                  <a href="#">Learn More</a>
                </button>
                <button className="border border-gray-300 hover:border-[#ff7700] hover:text-[#ff7700] duration-500 px-6 py-3 rounded-lg">
                  <a href="#">Our Technology</a>
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={aboutImg}
                alt="Smart Factory AI Monitoring"
                className="w-full rounded-3xl shadow-xl object-cover"
              />

              <div className="absolute -bottom-5 -right-5 bg-[#ff7700] text-white px-6 py-4 rounded-xl shadow-lg">
                AI Vision Systems
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
