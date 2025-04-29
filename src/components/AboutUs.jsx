// import React from "react";

// export const AboutUs = () => {
//   const cardComponentsData = [
//     {
//       img: "/path-to-image/blank.png", // Replace with actual image path
//       title: "OUR STORY",
//       desc: "The chocolate fondant which did not disappoint. It was rich and indulgent, with a gooey center that was pure bliss.",
//     },
//     {
//       img: "/path-to-image/blank.png",
//       title: "WHY CHOOSE US",
//       desc: "Assertively myocardinate robust e-tailers for extensible human capital. Appropriately benchmark networks.",
//     },
//     {
//       img: "/path-to-image/blank.png",
//       title: "ABOUT US",
//       desc: "Assertively myocardinate robust e-tailers for extensible human capital. Appropriately benchmark networks.",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#FAF4EE] py-16 relative overflow-hidden">
//       {/* Decorative background icons */}
//       <img
//         src="/path-to-icons/rings.svg"
//         alt="Decor"
//         className="absolute top-4 right-10 w-12 opacity-10"
//       />
//       <img
//         src="/path-to-icons/leaf.svg"
//         alt="Decor"
//         className="absolute top-20 right-20 w-10 opacity-10"
//       />
//       <img
//         src="/path-to-icons/star.svg"
//         alt="Decor"
//         className="absolute top-40 right-6 w-8 opacity-10"
//       />
//       <img
//         src="/path-to-icons/ginger.svg"
//         alt="Decor"
//         className="absolute bottom-10 left-10 w-14 opacity-70"
//       />

//       {/* Section title */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold uppercase mb-2">About Us</h2>
//         {/* single line on vertically based on the design that i've implemened */}
//         <div className="w-0.5 h-6 bg-red-500 mx-auto mb-2"></div>
//         {/* rounded dots */}
//         <div className="flex justify-center gap-1">
//           <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//           <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//           <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
//         {cardComponentsData.map((card, i) => (
//           <div
//             key={i}
//             className="bg-white w-[300px] flex flex-col shadow-md p-4 transition hover:shadow-lg"
//           >
//             <div className="w-full h-40 bg-gray-300 mb-4"></div>{" "}
//             {/* Placeholder image */}
//             <h3 className="text-lg font-bold mb-2 md:text-left text-center">
//               {card.title}
//             </h3>
//             <p className="text-gray-600 text-sm mb-4 md:text-left text-center">
//               {card.desc}
//             </p>
//             <button
//               className="text-red-500 border border-red-500 px-4 py-2 text-xs uppercase tracking-wide w-[70%] hover:bg-red-500 hover:text-white transition md:text-left text-center mx-auto md:mx-0
//             "
//             >
//               Read More →
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from "react";

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
        src="/path-to-icons/rings.svg"
        alt="Decor"
        className="absolute top-4 right-10 w-12 opacity-10"
      />
      <img
        src="/path-to-icons/leaf.svg"
        alt="Decor"
        className="absolute top-20 right-20 w-10 opacity-10"
      />
      <img
        src="/path-to-icons/star.svg"
        alt="Decor"
        className="absolute top-40 right-6 w-8 opacity-10"
      />
      <img
        src="/path-to-icons/ginger.svg"
        alt="Decor"
        className="absolute bottom-10 left-10 w-14 opacity-70"
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
