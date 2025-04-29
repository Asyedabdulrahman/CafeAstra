import React from "react";
import aboutUsRight from "../assets/aboutUsRight.png";
import aboutUsLeft from "../assets/aboutUsLeft.png";

export const AboutUs = () => {
  const cardComponentsData = [
    {
      img: "/path-to-image/blank.png",
      title: "OUR STORY",
      desc: "The chocolate fondant which did not disappoint. It was rich and indulgent, with a gooey center that was pure bliss.",
    },
    {
      img: "/path-to-image/blank.png",
      title: "WHY CHOOSE US",
      desc: "Assertively myocardinate robust e-tailers for extensible human capital. Appropriately benchmark networks.",
    },
    {
      img: "/path-to-image/blank.png",
      title: "ABOUT US",
      desc: "Assertively myocardinate robust e-tailers for extensible human capital. Appropriately benchmark networks.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF4EE] py-16 relative overflow-hidden">
      {/* Decorative background icons */}
      <img
        src={aboutUsRight}
        alt="Decor1"
        className="absolute top-8 right-8 w-40 h-40 opacity-50 hidden md:block"
      />

      <img
        src={aboutUsLeft}
        alt="Decor4"
        className="absolute bottom-26 left-28 w-22 h-22 object-contain hidden md:block"
      />

      {/* Section title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold uppercase mb-2">About Us</h2>
        <div className="w-px h-6 bg-[#CB3A1A] mx-auto mb-2"></div>
        <div className="flex justify-center gap-1">
          <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
          <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
          <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex md:flex-wrap md:justify-center overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:overflow-visible scrollbar-hide">
        {cardComponentsData.map((card, i) => (
          <div
            key={i}
            className="bg-white flex-shrink-0 w-[250px] md:w-[300px] snap-center flex flex-col shadow-md p-4 transition hover:shadow-lg"
          >
            <div className="w-full h-40 bg-gray-300 mb-4"></div>
            <h3 className="text-lg font-bold mb-2 md:text-left text-center">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 md:text-left text-center">
              {card.desc}
            </p>
            <button className="text-[#CB3A1A] border border-[#CB3A1A] px-4 py-2 text-xs jost-600 uppercase tracking-wide w-[70%] hover:bg-red-500 hover:text-white transition md:text-left text-center mx-auto md:mx-0">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
