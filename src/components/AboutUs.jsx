import React from "react";
import aboutUsRight from "../assets/aboutUsRight.png";
import aboutUsLeft from "../assets/aboutUsLeft.png";
// import restaurant1 from "../assets/restaurant1.jpg";
// import restaurant2 from "../assets/restaurant.jpg";
// import restaurant3 from "../assets/restaurant3.jpg";
import cafeTable from "../assets/cafeTable.jpg";
import cafeTable2 from "../assets/cafeTable2.jpg";
import cafeTable3 from "../assets/cafeTable3.jpg";

export const AboutUs = () => {
  const cardComponentsData = [
    {
      img:  cafeTable ,
      title: "OUR STORY",
      desc: "The chocolate fondant which did not disappoint. It was rich and indulgent, with a gooey center that was pure bliss.",
    },
    {
      img: cafeTable2 ,
      title: "WHY CHOOSE US",
      desc: "Assertively myocardinate robust e-tailers for extensible human capital. Appropriately benchmark networks.",
    },
    {
      img:  cafeTable3 ,
      title: "ABOUT US",
      desc: "Assertively myocardinate robust e-tailers for extensible human capital. Appropriately benchmark networks.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF4EE] py-6 pb-16 relative overflow-hidden" id="about">
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
      <div className="text-center mb-6">
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
           <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
  <img
    src={card.img}
    alt="img"
    className="w-full h-full object-cover"
  />
</div>
            <h3 className="text-lg font-bold mb-2 md:text-left text-center">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 text-left justify-center flex-1">
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
