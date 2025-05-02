import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Correct import
import emailjs from "@emailjs/browser";

import ctaShawarma from "../assets/ctaShawarma.svg";
import ctaShawarma2 from "../assets/ctaShawarma2.png";

const Cta = () => {
  const [clickedButton, setClickedButton] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_m7598jw",
        "template_oxz8ajb",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          location: formData.location,
        },
        "4YeEjxO8U73uvXDOk"
      )
      .then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        setFormData({ name: "", phone: "", email: "", location: "" });
        setClickedButton([]);
      })
      .catch((err) => console.error("Email Error:", err));
  };

  return (
    <section className="flex flex-col" id="contactus">
      {/* Hero Section */}
      <div className="bg-[#0B0A0AC9] text-white py-10 md:py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <p className="bg-[#CB3A1A] text-sm font-semibold px-4 py-2 rounded mb-4">
            CRISPY, EVERY BITE TASTE
          </p>
          <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
            ARE YOU LOOKING TO TAKE A FRANCHISE?
          </h1>
          <a href="#contactus">
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-gray-800 transition">
              JOIN WITH US →
            </button>
          </a>
        </div>

        <img
          src={ctaShawarma}
          alt="Wrap Illustration"
          loading="lazy"
          className="absolute left-4 -bottom-24 w-32 sm:w-40 md:w-48 hidden md:block"
        />
      </div>

      {/* Contact Section */}
      <div className="bg-white py-10 md:py-14 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-start text-left mb-4 sm:mb-8 w-full sm:w-[70%] mx-auto">
            <button className="bg-[#CB3A1A] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded mb-4">
              CRISPY, EVERY BITE TASTE
            </button>
            <h2 className="text-xl sm:text-2xl md:text-4xl jost-600">
              CONTACT INFORMATION
            </h2>
          </div>

          <div className="bg-gray-200 py-6 px-6 max-w-2xl mx-auto rounded mb-8 sm:mb-12">
            <p className="font-bold text-md sm:text-xl text-center">
              JOIN WITH US IS ONE OF THE BEST DECISION IN YOUR LIFE
            </p>
          </div>

          <form className="max-w-md mx-auto space-y-6" onSubmit={handleSubmit}>
            {["name", "phone", "email", "location"].map((field) => (
              <div key={field} className="flex flex-col text-left">
                <label className="text-sm jost-700 mb-1 uppercase">
                  {field}
                </label>
                <input
                  type="text"
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-[#CB3A1A] text-white font-semibold px-6 py-2 rounded hover:bg-red-700 transition justify-center flex mx-auto w-full sm:w-[60%] md:w-[40%]"
            >
              SUBMIT
            </button>
          </form>
        </div>

        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed bottom-5 right-5 bg-[#CB3A1A] text-white px-8 py-4 rounded-lg shadow-xl text-lg"
            >
              Email sent! We will get back to you soon.
            </motion.div>
          )}
        </AnimatePresence>

        <img
          src={ctaShawarma2}
          alt="Wrap Illustration"
          loading="lazy"
          className="absolute right-8 bottom-16 w-16 sm:w-20 md:w-24 hidden md:block"
        />
      </div>
    </section>
  );
};

// ✅ Memoized for performance
export default memo(Cta);
