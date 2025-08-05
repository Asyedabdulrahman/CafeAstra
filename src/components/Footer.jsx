import React, { memo } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  PhoneCall,
  Twitter,
} from "lucide-react";

import instagram from "../assets/instagram.png";

import shawarmaFooter from "../assets/ctaShawarma4x.png";
import cafeTable from "../assets/cafeTable.jpg";
import cafeTable2 from "../assets/cafeTable2.jpg";
import cafeTable3 from "../assets/cafeTable3.jpg";
import welcomeimg from "../assets/shopImage2.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white text-sm">
      {/* Top Small Bar */}
      <div className="bg-[#1a1a1a] py-4 px-4 md:px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-center sm:text-left">
            <p className="text-gray-300 text-sm">
              Are You{" "}
              <span className="font-semibold">WANT TO TAKE FRANCHISE</span>,{" "}
              <a
                href="tel:7395888250"
                className="underline font-semibold text-white"
              >
                CONTACT US
              </a>
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="bg-red-600 p-2 rounded-full">
              <PhoneCall size={20} />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs">CONTACT US</p>
              <p className="font-semibold text-sm">
                enquiry{" "}
                <a href="tel:7395888250" className="underline">
                  +91 7395888258
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 md:px-6 py-10 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative">
        {/* Get In Touch */}
        <div>
          <h3 className="font-bold mb-4 border-b border-gray-600 pb-2">
            GET IN TOUCH
          </h3>
          <address className="not-italic mb-2">
            4/709, Venketeshwara colony, Nehru nagar, Perungudi, Chennai -
            600096
          </address>
          <p className="mb-4">cafeastra@franchise.com</p>
          <a
            href="https://www.instagram.com/cafeastraofficial.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <img src={instagram} alt="instagram" className="w-6 h-6" />
          </a>
        </div>

        {/* Food Menu */}
        <div className="hidden md:block">
          <h3 className="font-bold mb-4 border-b border-gray-600 pb-2">
            FOOD MENU
          </h3>
          <ul className="space-y-2">
            {[
              "White Castle",
              "Beef Sandwich",
              "Cherry Limeade",
              "Wendy’s Frosty",
              "Pumpkin Spice",
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-2">
                <span>➔</span> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="font-bold mb-4 border-b border-gray-600 pb-2">
            WORKING HOURS
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Monday - Friday 9 AM - 10 PM</li>
            <li>Saturday 9 AM - 10 PM</li>
            <li>Sunday 11 AM - 11 PM</li>
          </ul>
        </div>

        {/* Ambience */}
        <div className="hidden md:block">
          <h3 className="font-bold mb-4 border-b border-gray-600 pb-2">
            AMBIENCE
          </h3>
          <div className="grid grid-cols-4 grid-rows-2 gap-2">
            {[cafeTable, cafeTable2, cafeTable3, cafeTable3, welcomeimg].map(
              (imageName, i) => (
                <img
                  loading="lazy"
                  key={i}
                  src={imageName}
                  alt={`Gallery image ${i + 1}`}
                  className={
                    i === 0
                      ? "col-span-2 row-span-2 h-full w-full object-cover"
                      : "h-full w-full object-cover"
                  }
                />
              )
            )}
          </div>
        </div>

        {/* Decorative Image */}
        <img
          src={shawarmaFooter}
          alt="shawarmaFooter"
          className="absolute w-36 h-44 object-contain bottom-0 -right-28 hidden md:block"
        />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 px-4 md:px-6 text-center text-xs">
        <p>© Copyright Delish. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <p className="hover:underline">Terms Of Use</p>
          <p className="hover:underline">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
