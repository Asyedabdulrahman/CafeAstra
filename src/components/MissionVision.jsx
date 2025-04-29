// import React from "react";

// const MissionVision = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="w-[70vw] mx-auto px-4">
//         {/* Mission and Vision */}
//         <div className="text-center mb-12">
//           <button className="bg-red-600 text-xs text-white font-semibold px-3 py-1 rounded mb-2">
//             Client Testimonials
//           </button>
//           <h2 className="text-2xl md:text-3xl font-extrabold">
//             OUR MISSION AND VISION
//           </h2>
//           <div className="mt-2 w-24 h-1 bg-red-600 mx-auto"></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 mb-16">
//           <div className="border border-[#CB3A1A] p-6 text-left py-12">
//             <h3 className="font-bold mb-4 ">MISSION</h3>
//             <p className="text-sm text-gray-600 ml-2">
//               The only minor downside was the noise level, which made
//               conversation a bit challenging at times. However, this did not
//               significantly detract from the overall experience. The Culinary
//               Corner excels in delivering delicious food and exceptional
//               service.
//             </p>
//           </div>
//           <div className="border border-[#CB3A1A] p-6 text-left py-12">
//             <h3 className="font-bold mb-4">VISION</h3>
//             <p className="text-sm text-gray-600">
//               The only minor downside was the noise level, which made
//               conversation a bit challenging at times. However, this did not
//               significantly detract from the overall experience. The Culinary
//               Corner excels in delivering delicious food and exceptional
//               service.
//             </p>
//           </div>
//         </div>

//         {/* Franchise Details */}
//         <div className="flex flex-col md:flex-row items-center justify-between mb-16 bg-gray-500 p-8 rounded shadow w-[90vw] md:w-[70vw] h-auto md:h-[80vh] mx-auto space-y-8 md:space-y-0">
//           <div className="flex-1">
//             <button className="bg-red-600 text-xs font-semibold px-3 py-1 rounded mb-2">
//               ABOUT
//             </button>
//             <h2 className="text-2xl font-extrabold mb-4">FRANCHISE DETAILS</h2>
//             <p className="text-sm text-gray-600 mb-6">
//               The only river downside was the noise level, which made
//               conversations a bit challenging at times. However, the cold air
//               sparkling made dining a treat.
//             </p>
//             <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
//               CONTACT US
//             </button>
//           </div>
//           <div className="bg-gray-300 h-64 md:h-full w-full md:w-[40%] rounded"></div>{" "}
//           {/* Placeholder Image */}
//         </div>

//         {/* Meet Founder */}
//         <div className="text-center">
//           <button className="bg-red-600 text-xs font-semibold px-3 py-1 rounded mb-2">
//             Reach Us
//           </button>
//           <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
//             MEET OUR FOUNDER
//           </h2>
//           <div className="mt-2 w-24 h-1 bg-red-600 mx-auto mb-8"></div>
//           <div className="max-w-sm mx-auto bg-gray-300 h-80 rounded flex flex-col justify-end">
//             <div className="bg-black text-white py-4 rounded-b text-center">
//               <h4 className="font-bold">JACK</h4>
//               <p className="text-xs">Founder</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionVision;

import React from "react";

const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-[90vw] md:w-[65vw] mx-auto px-4">
        {/* Mission and Vision */}
        <div className="text-center mb-12">
          <button className="bg-[#CB3A1A] text-xs text-white font-semibold px-3 py-1 rounded mb-2">
            CLIENT TESTIMONIALS
          </button>
          <h2 className="text-2xl md:text-3xl font-extrabold">
            OUR MISSION AND VISION
          </h2>
          <div className="w-px h-6 bg-[#CB3A1A] mx-auto my-2"></div>
          <div className="flex justify-center gap-1">
            <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
            <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
            <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
            <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-[#CB3A1A] p-6 sm:text-left text-center py-12">
            <h3 className="font-bold mb-4">MISSION</h3>
            <p className="text-sm text-gray-600 ml-2">
              The only minor downside was the noise level, which made
              conversation a bit challenging at times. However, this did not
              significantly detract from the overall experience. The Culinary
              Corner excels in delivering delicious food and exceptional
              service.
            </p>
          </div>
          <div className="border border-[#CB3A1A] p-6 sm:text-left text-center py-12">
            <h3 className="font-bold mb-4">VISION</h3>
            <p className="text-sm text-gray-600 ml-2">
              The only minor downside was the noise level, which made
              conversation a bit challenging at times. However, this did not
              significantly detract from the overall experience. The Culinary
              Corner excels in delivering delicious food and exceptional
              service.
            </p>
          </div>
        </div>

        {/* Franchise Details */}
        <div className="flex flex-col md:flex-row items-center text-center mb-16 bg-[#F6F6F6] p-4 sm:p-8 rounded shadow h-auto md:h-[80vh] space-y-8 md:space-y-0">
          <div className="flex-1">
            <button className="bg-[#CB3A1A] text-xs text-white font-semibold px-3 py-1 rounded mb-2">
              ABOUT
            </button>
            <h2 className="text-4xl mb-4 jost-600">FRANCHISE DETAILS</h2>
            <div className="w-px h-6 bg-[#CB3A1A] mx-auto my-2"></div>
            <div className="flex justify-center gap-1 mb-6 pt-2">
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
            </div>
            <p className="text-sm text-gray-600 mb-6 w-full max-w-md mx-auto sm:text-left text-center">
              The only minor downside was the noise level, which made
              conversation a bit challenging at times. However, this did not
              significantly detract from the overall experience. The Culinary
              Corner excels in delivering delicious food and exceptional
              service.
            </p>
            <button className="bg-[#CB3A1A] text-white px-6 py-2 hover:bg-red-700 transition w-full max-w-md mx-auto">
              CONTACT US
            </button>
          </div>
          <div className="bg-gray-300 h-64 md:h-full w-full md:w-[40%] hidden md:block"></div>
        </div>

        {/* Meet Founder */}
        <div className="text-center">
          <button className="bg-[#CB3A1A] text-white text-xs font-semibold px-3 py-1 rounded mb-2">
           KNOW US
          </button>
          <h2 className="text-2xl md:text-3xl mb-2 jost-700">
            MEET OUR FOUNDER
          </h2>
          <div className="w-px h-6 bg-[#CB3A1A] mx-auto my-3"></div>
          <div className="flex justify-center gap-1 pb-4">
            <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
            <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
            <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
            <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
          </div>
          <div className="w-full max-w-sm mx-auto bg-gray-300 h-110 rounded flex flex-col justify-end">
            <div className="bg-black text-white py-4 rounded-b text-center">
              <h4 className="font-bold">SK</h4>
              <p className="text-xs">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
