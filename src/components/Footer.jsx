import React, { memo } from "react";

import {
  Facebook,
  FacebookIcon,
  Linkedin,
  LucideFacebook,
  PhoneCall,
  Twitter,
} from "lucide-react";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook2.png";
import twitter from "../assets/twitter2.png";
import instagram from "../assets/instagram.png";
import shawarmaFooter from "../assets/ctaShawarma4x.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white text-sm">
      {/* Top Small Bar */}
      <div className="bg-[#1a1a1a] py-4 px-4 md:px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-center sm:text-left">
            <div className="md:flex justify-center sm:justify-start space-x-2 hidden">
              <span className="w-6 h-6 bg-gray-300 rounded-full" />
              <span className="w-6 h-6 bg-gray-300 rounded-full" />
              <span className="w-6 h-6 bg-gray-300 rounded-full" />
            </div>
            <p className="text-gray-300 text-sm">
              Are You{" "}
              <span className="font-semibold">WANT TO TAKE FRANCHISE</span>,{" "}
              <a
                href="#contactus"
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
              <p className="font-semibold text-sm">enquiry +91 7395888258 </p>
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
          <p className="mb-2">
            4/709, Venketeshwara colony, Nehru nagar, Perungudi, Chennai -
            600096
          </p>
          <p className="mb-4">cafeastra@franchise.com</p>
          <div className="flex space-x-3">
            <img src={facebook} alt="" className="h-5 w-5 cursor-pointer " />
            <img src={twitter} alt="" className="h-5 w-5 cursor-pointer " />
            <img
              src={linkedin}
              alt="linkedinlogo"
              className="h-5 w-5 cursor-pointer "
            />
            <img src={instagram} alt="" className="h-5 w-5 cursor-pointer " />
          </div>
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
            <li>Monday - Friday 09:00 - 22:00</li>
            <li>Saturday 11:00 - 00:00</li>
            <li>Sunday 11:00 - 23:00</li>
          </ul>
        </div>

        {/* Ambience */}
        <div className="hidden md:block">
          <h3 className="font-bold mb-4 border-b border-gray-600 pb-2">
            AMBIENCE
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-300 h-16" />
            ))}
          </div>
        </div>
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
          <a href="#" className="hover:underline">
            Terms Of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
