import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../assets/Images/logo.png";
import { FaPhone } from "react-icons/fa";

export default function Navbar() {
  const [toggeler, settoggeler] = useState(false);
  const links = [
    { path: "/home", label: "Home" },
    { path: "/solution", label: "Solution" },
    { path: "/Product", label: "Product" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <>
      <nav className="shadow-2xl px-4 sm:px-0 py-4 bg-[#111111] fixed start-0 end-0 z-50">
        <div className="container max-w-7xl text-slate-100 rounded-2xl ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={logo2} className="w-10 rounded-full" alt="logo" />
              <div>
                <h2 className="text-4xl font-bold">Horuvision</h2>
                <p className="text-sm text-[#ff7700]">
                  Where Cameras Think, Not Just See.
                </p>
              </div>
            </div>

            <div>
              <ul className="md:flex gap-8 text-white hidden bg-black py-3 lg:px-10 px-5 rounded-3xl items-center ">
                {links.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      className={({ isActive }) =>
                        `transition-colors duration-600 ${
                          isActive
                            ? "text-[#ff7700] font-semibold"
                            : "text-white hover:text-[#ff7700]"
                        }`
                      }
                      to={link.path}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="flex items-center md:hidden">
                <svg
                  onClick={() => settoggeler(!toggeler)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </div>
            </div>

            <div className="icon md:block hidden">
              <NavLink to="/contact">
                <button className="px-4 py-2 border border-[#ff7700] rounded-full text-white transition duration-300 hover:bg-[#ff7700] hover:text-white">
                  Contact Us
                </button>
              </NavLink>
            </div>
          </div>
          <ul
            className={`text-white space-y-3 mt-3 overflow-hidden transition-all duration-700 ease-in-out ${
              toggeler
                ? "max-h-60 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 translate-y-8"
            }`}
          >
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  onClick={() => settoggeler(false)}
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? "text-[#ff7700] font-semibold"
                        : "text-white hover:text-[#ff7700]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/contact" onClick={() => settoggeler(false)}>
                <button className="w-full py-3 rounded-full border border-[#ff7700] text-white transition duration-300 hover:bg-[#ff7700] hover:text-white">
                  Contact Us
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
