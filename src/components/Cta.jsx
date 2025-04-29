// import React from "react";
// import ctaShawarma from "../assets/ctaShawarma.svg";
// import ctaShawarma2 from "../assets/ctaShawarma2.png";

// const Cta = () => {
//   return (
//     <section className="flex flex-col">
//       {/* Hero Section */}
//       <div className="bg-[#0B0A0AC9] text-white py-20 relative overflow-hidden">
//         <div className="container mx-auto px-6 flex flex-col items-center text-center">
//           <button className="bg-[#CB3A1A] text-xs font-semibold px-4 py-2 rounded mb-4">
//             CRISPY, EVERY BITE TASTE
//           </button>
//           <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
//             ARE YOU LOOKING TO TAKE A FRANCHISE?
//           </h1>
//           <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-gray-800 transition">
//             JOIN WITH US →
//           </button>
//         </div>
//         {/* Left side Illustration */}
//         <img
//           src={ctaShawarma}
//           alt="Wrap Illustration"
//           className="absolute left-4 -bottom-24 w-32 md:w-48 "
//         />
//       </div>

//       {/* Contact Section */}
//       <div className="bg-white py-20 relative overflow-hidden">
//         <div className="container mx-auto px-6  ">
//           <div className="flex flex-col items-start text-left mb-12 w-[70%] mx-auto">
//             <button className="bg-[#CB3A1A] text-white text-xs font-semibold px-4 py-2 rounded mb-4">
//               CRISPY, EVERY BITE TASTE
//             </button>
//             <h2 className="text-2xl md:text-4xl jost-600 mb-6">
//               CONTACT INFORMATION
//             </h2>
//           </div>

//           {/* Mid Text Box */}
//           <div className="bg-gray-200 py-6 px-8 max-w-2xl mx-auto rounded mb-12">
//             <p className="font-bold text-lg">
//               JOIN WITH US IS ONE OF THE BEST DECISION IN YOU LIFE
//             </p>
//           </div>

//           {/* Form */}
//           <form className="max-w-md mx-auto space-y-6">
//             <div className="flex flex-col text-left">
//               <label className="text-sm jost-700 mb-1">NAME</label>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
//               />
//             </div>
//             <div className="flex flex-col text-left">
//               <label className="text-sm jost-700 mb-1">CONTACT NO</label>
//               <input
//                 type="text"
//                 placeholder="Number"
//                 className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-[#CB3A1A] text-white font-semibold px-6 py-2 rounded hover:bg-red-700 transition justify-center flex mx-auto w-full md:w-[40%]"
//             >
//               SUBMIT
//             </button>
//           </form>
//         </div>

//         {/* Bottom Right Illustration */}
//         <img
//           src={ctaShawarma2}
//           alt="Wrap Illustration"
//           className="absolute right-80 bottom-16 w-16 md:w-24 "
//         />
//       </div>
//     </section>
//   );
// };

// export default Cta;
import React from "react";
import ctaShawarma from "../assets/ctaShawarma.svg";
import ctaShawarma2 from "../assets/ctaShawarma2.png";

const Cta = () => {
  return (
    <section className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-[#0B0A0AC9] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <button className="bg-[#CB3A1A] text-xs sm:text-sm font-semibold px-4 py-2 rounded mb-4">
            CRISPY, EVERY BITE TASTE
          </button>
          <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
            ARE YOU LOOKING TO TAKE A FRANCHISE?
          </h1>
          <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-gray-800 transition">
            JOIN WITH US →
          </button>
        </div>

        {/* Left side Illustration (Hidden on mobile) */}
        <img
          src={ctaShawarma}
          alt="Wrap Illustration"
          className="absolute left-4 -bottom-24 w-32 sm:w-40 md:w-48 hidden md:block"
        />
      </div>

      {/* Contact Section */}
      <div className="bg-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-start text-left mb-8 sm:mb-12 w-full sm:w-[70%] mx-auto">
            <button className="bg-[#CB3A1A] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded mb-4">
              CRISPY, EVERY BITE TASTE
            </button>
            <h2 className="text-xl sm:text-2xl md:text-4xl jost-600">
              CONTACT INFORMATION
            </h2>
          </div>

          {/* Mid Text Box */}
          <div className="bg-gray-200 py-6 px-8 max-w-2xl mx-auto rounded mb-8 sm:mb-12">
            <p className="font-bold text-sm sm:text-lg">
              JOIN WITH US IS ONE OF THE BEST DECISION IN YOU LIFE
            </p>
          </div>

          {/* Form */}
          <form className="max-w-md mx-auto space-y-6">
            <div className="flex flex-col text-left">
              <label className="text-sm jost-700 mb-1">NAME</label>
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div className="flex flex-col text-left">
              <label className="text-sm jost-700 mb-1">CONTACT NO</label>
              <input
                type="text"
                placeholder="Number"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <button
              type="submit"
              className="bg-[#CB3A1A] text-white font-semibold px-6 py-2 rounded hover:bg-red-700 transition justify-center flex mx-auto w-full sm:w-[60%] md:w-[40%]"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Bottom Right Illustration (Hidden on mobile) */}
        <img
          src={ctaShawarma2}
          alt="Wrap Illustration"
          className="absolute right-8 bottom-16 w-16 sm:w-20 md:w-24 hidden md:block"
        />
      </div>
    </section>
  );
};

export default Cta;
