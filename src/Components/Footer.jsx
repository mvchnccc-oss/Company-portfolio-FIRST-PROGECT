import React from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../assets/Images/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300">
      {/* Top CTA */}
      <div className="container mx-auto px-6 py-16 border-b border-gray-700">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get Your Free Pilot Right Now
          </h2>

          <div className="flex w-full lg:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 lg:w-80 bg-[#1a1f26] px-5 py-4 outline-none"
            />
            <button className="bg-[#ff7700] hover:bg-white hover:text-black duration-500 px-6 py-4 font-semibold text-black">
              Get Free Pilot
            </button>
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="container mx-auto px-6 py-14 border-b border-gray-700">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-xl font-semibold text-white mb-2"></h4>
            <p className="text-gray-400"></p>
          </div>

          <div className="md:border-x border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-2">Egypt</h4>
            <div className="flex gap-3 items-center justify-self-center">
              <p className="text-gray-400">Altahrer street Dokki </p>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-2"></h4>
            <p className="text-gray-400"></p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold">
              <img src={logo2} alt="" />
            </div>
            <span className="text-xl font-bold text-white">HoruVision</span>
          </div>

          {/* Links */}
          <ul className="flex gap-6 text-sm uppercase tracking-wide">
            {["Home", "Product", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-[#ff7700] transition"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social */}
          <div className="flex gap-3 justify-center md:justify-end">
            {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-[#ff7700] flex items-center justify-center rounded-lg hover:bg-[#ff7700] hover:text-black transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-sm text-gray-500 py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">
          <p>© 2025 HoruVision. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
