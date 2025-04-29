import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import cafeAstra3 from "../assets/logo4.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full z-[9999] relative">
      {/* Navigation Bar */}
      <nav className="bg-black bg-opacity-70 backdrop-blur-md text-white flex items-center justify-between px-4 py-3 md:px-8 md:py-4 fixed top-0 left-0 w-full z-[9999]">
        {/* Left (Logo or Spacer) */}
        <div className="md:w-1/3 w-2/3">
          <img
            src={cafeAstra3}
            className="h-16 w-auto p-2 object-cover"
            alt="cafeAstra"
          />
          <div className="md:hidden font-bold text-lg tracking-wide"></div>
        </div>

        {/* Center (Nav Links) */}
        <div className="hidden md:flex gap-6 text-sm justify-center w-1/3">
          <a href="#" className="hover:text-gray-400 transition">
            HOME
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            ABOUT US
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            MENU
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            FRANCHISE
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            CONTACT US
          </a>
        </div>

        {/* Right (CTA + Mobile Toggle) */}
        <div className="w-1/3 flex justify-end items-center">
          <button className="hidden md:block border border-red-600 px-4 py-2 text-xs hover:bg-white hover:text-black transition">
            JOIN WITH US →
          </button>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md px-6 pt-24 transition-all duration-300 ease-in-out z-[9998] ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8 text-lg text-white font-medium">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition"
          >
            HOME
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition"
          >
            ABOUT US
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition"
          >
            MENU
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition"
          >
            FRANCHISE
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition"
          >
            CONTACT US
          </a>
          <button className="mt-6 w-full border border-red-600 px-4 py-2 text-sm hover:bg-white hover:text-black transition">
            JOIN WITH US →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
