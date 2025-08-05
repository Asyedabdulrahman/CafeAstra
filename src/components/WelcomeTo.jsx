import React, { memo } from "react";
import { PhoneCall } from "lucide-react";
import burgerImage from "../assets/burger1.png";
import burgerImage2 from "../assets/burger2.png";
import welcomeRingTop from "../assets/welcomeRingTop.png";
// import welcomeimg from "../assets/restaurant.jpg";
import welcomeimg from "../assets/shopImage2.jpg";

const WelcomeTo = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center md:h-[50vh] px-4 md:px-8 mb-12 md:my-22 my-8 bg-white overflow-hidden">
      {/* Decorative icons */}
      <div className="absolute bottom-2 left-0 w-40 h-40 opacity-50 object-contain hidden md:block">
        <img
          src={burgerImage2}
          alt=""
          loading="lazy"
          decoding="async"
          aria-hidden="true"
          className="object-contain"
        />
      </div>
      <div className="absolute top-10 -right-2 w-40 h-40 opacity-40 hidden md:block">
        <img
          src={burgerImage}
          alt=""
          loading="lazy"
          decoding="async"
          aria-hidden="true"
          className="object-contain"
        />
      </div>
      <div className="absolute top-10 left-6 w-40 h-40 hidden md:block">
        <img
          src={welcomeRingTop}
          alt=""
          loading="lazy"
          decoding="async"
          aria-hidden="true"
          className="object-contain"
        />
      </div>

      {/* Image Placeholder */}
      <div className="w-[250px] h-[180px] md:w-[30vw] md:h-[60vh] rounded-lg overflow-hidden relative">
        <img
          src={welcomeimg}
          alt="Interior of the restaurant"
          width={800}
          height={600}
          className="w-full h-full object-contain"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </div>

      {/* Text Content */}
      <div className="mt-8 md:mt-0 md:ml-12 max-w-sm md:max-w-md text-center md:text-left">
        <button className="bg-[#5a5a5a] text-white font-bold text-xs px-5 py-2 mb-4 tracking-wide rounded-sm">
          MAKE RESERVATION
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
          WELCOME TO OUR CAFE
        </h2>
        <p
          className="text-gray-600 mb-6 text-sm leading-relaxed"
          style={{ textAlign: "justify" }}
        >
          CafeAstra is a warm and inviting café offering fresh coffee, juicy
          burgers, BBQ and chicken tikka pizzas, and more. Whether you're here
          to relax, catch up with friends, or enjoy a flavorful meal, CafeAstra
          has something for everyone.
        </p>

        <div className="flex items-center justify-center md:justify-start gap-3">
          <div className="relative flex bg-[#CB3A1A] rounded-full p-4 w-10 h-10 items-center justify-center text-white text-lg">
            <span>
              <PhoneCall size={16} />
            </span>
          </div>
          {/* Side text after call logo */}
          <div className="text-center md:text-left">
            <p className="text-[#74787C] text-[12px] font-extralight">
              Contact Number
            </p>
            <a href="tel:7395888258">
              <span className="text-sm font-medium underline">7395888258</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WelcomeTo);
