// const WelcomeTo = () => {
//   return (
//     <section className="relative flex flex-col md:flex-row items-center justify-center h-[50vh] px-8 my-28 bg-white overflow-hidden">
//       {/* Decorative icons  */}
//       {/* burger side image and icons */}
//       <div className="absolute top-4 left-4 opacity-10">
//         <img src="/path-to-icons/rings.svg" alt="Rings" className="w-16" />
//       </div>
//       <div className="absolute bottom-4 right-4 opacity-10">
//         <img src="/path-to-icons/burger.svg" alt="Burger" className="w-16" />
//       </div>

import { PhoneCall } from "lucide-react";

//       {/* Image Placeholder */}
//       <div className="bg-gray-300 w-[300px] h-[200px] md:w-[30vw] md:h-[40vh] rounded-md"></div>

//       {/* Text Content */}
//       <div className="mt-8 md:mt-0 md:ml-12 max-w-md">
//         <button className="bg-[#CB3A1A] text-white text-xs px-4 py-2 mb-4 tracking-wide rounded-sm">
//           MAKE RESERVATION
//         </button>
//         <h2 className="text-2xl md:text-3xl font-bold mb-4">
//           WELCOME TO OUR LUXURY CAFE
//         </h2>
//         <p className="text-gray-600 mb-6 text-sm">
//           The scallops were perfectly cooked, tender, and flavorful, paired
//           beautifully with a creamy risotto and seasonal vegetables. The
//           presentation was artful, showcasing the chef’s attention to detail.
//         </p>

//         <div className="flex items-center gap-2">
//           <div className="relative flex bg-red-500 rounded-full p-4 w-5 h-5 items-center justify-center text-white">
//             <span className="">🤚</span>
//           </div>
//           {/* ṣide text after call logo */}
//           <div>
//             <p className="text-[#74787C] text-[12px] font-extralight">
//               HOTLINE 24/7
//             </p>
//             <span>9940241501</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WelcomeTo;

const WelcomeTo = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] md:h-[50vh] px-4 md:px-8 my-12 md:my-4 bg-white overflow-hidden">
      {/* Decorative icons */}
      <div className="absolute top-2 left-2 opacity-10 w-12 md:w-16">
        <img src="/path-to-icons/rings.svg" alt="Rings" className="w-full" />
      </div>
      <div className="absolute bottom-2 right-2 opacity-10 w-12 md:w-16">
        <img src="/path-to-icons/burger.svg" alt="Burger" className="w-full" />
      </div>

      {/* Image Placeholder */}
      <div className="bg-gray-300 w-[250px] h-[180px] md:w-[30vw] md:h-[60vh] rounded-md"></div>

      {/* Text Content */}
      <div className="mt-8 md:mt-0 md:ml-12 max-w-sm md:max-w-md text-center md:text-left">
        <button className="bg-[#CB3A1A] text-white text-xs px-5 py-2 mb-4 tracking-wide rounded-sm">
          MAKE RESERVATION
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
          WELCOME TO OUR LUXURY CAFE
        </h2>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          The scallops were perfectly cooked, tender, and flavorful, paired
          beautifully with a creamy risotto and seasonal vegetables. The
          presentation was artful, showcasing the chef’s attention to detail.
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
              HOTLINE 24/7
            </p>
            <span className="text-sm font-medium">9940241501</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeTo;
