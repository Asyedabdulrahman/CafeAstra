// import React, { useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";

// const InteriorSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   const scrollContainerRef = useRef(null);

//   const startCountUp = (el, count) => {
//     let currentCount = 0;
//     const speed = 20;
//     const increment = Math.ceil(count / (500 / speed));

//     const interval = setInterval(() => {
//       currentCount += increment;
//       if (currentCount >= count) {
//         clearInterval(interval);
//         currentCount = count;
//       }
//       el.innerText = currentCount + "+";
//     }, speed);
//   };

//   useEffect(() => {
//     if (inView) {
//       document.querySelectorAll(".count-up").forEach((el) => {
//         const count = parseInt(el.getAttribute("data-count"));
//         startCountUp(el, count);
//       });
//     }
//   }, [inView]);

//   // Scroll function
//   const handleScroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = container.offsetWidth; // Scroll by container width
//       if (direction === "left") {
//         container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//       } else {
//         container.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <section
//       ref={ref}
//       className="bg-black text-white py-16 relative overflow-hidden"
//     >
//       {/* Top Stats */}
//       <div className="w-[70vw] mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-8">
//         {[
//           { number: "20", label: "Categories" },
//           { number: "100", label: "Food Items" },
//           { number: "35", label: "Combos" },
//           { number: "20", label: "Special Items" },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-1 text-center md:text-left"
//           >
//             <h2
//               className="text-3xl font-extrabold count-up"
//               data-count={parseInt(item.number)}
//             >
//               {0}+
//             </h2>
//             <p className="uppercase text-sm font-medium mt-1 tracking-wide">
//               {item.label}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Divider Line */}
//       <div className="border-t border-gray-700 my-10 w-[70vw] mx-auto"></div>

//       {/* Our Interiors Title + Arrows */}
//       <div className="w-[70vw] mx-auto px-4 flex items-center justify-between mb-10">
//         <div>
//           <button className="bg-[#CB3A1AD6] text-xs jost-700 rounded-sm px-4 py-1 mb-2">
//             VIEW
//           </button>
//           <h2 className="text-3xl md:text-4xl font-extrabold jost-900">
//             OUR INTERIORS
//           </h2>
//         </div>

//         {/* Arrows - hidden on mobile */}
//         <div className="hidden sm:flex gap-2">
//           <button
//             onClick={() => handleScroll("left")}
//             className="w-10 h-10 flex items-center justify-center border border-white hover:bg-white hover:text-black transition"
//           >
//             ←
//           </button>
//           <button
//             onClick={() => handleScroll("right")}
//             className="w-10 h-10 flex items-center justify-center border border-white hover:bg-white hover:text-black transition"
//           >
//             →
//           </button>
//         </div>
//       </div>

//       {/* Interiors Cards */}
//       <div
//         ref={scrollContainerRef}
//         className="flex overflow-x-auto scrollbar-hide scroll-smooth px-4 max-w-7xl mx-auto gap-4"
//       >
//         {[...Array(20)].map((_, idx) => (
//           <div
//             key={idx}
//             className="flex-shrink-0 w-60 md:w-64 h-64 bg-gray-300 group relative overflow-hidden rounded-sm"
//           >
//             {/* Red Hover */}
//             <div className="absolute inset-0 bg-[#CB3A1AD6] opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//               <div className="bg-white p-3 rounded-full">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-[#CB3A1AD6]"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default InteriorSection;

import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import useIsMobile from "./UseIsMobile";

const InteriorSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const isMobile = useIsMobile();
  const scrollContainerRef = useRef(null);

  const startCountUp = (el, count) => {
    let currentCount = 0;
    const speed = 20;
    const increment = Math.ceil(count / (500 / speed));

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= count) {
        clearInterval(interval);
        currentCount = count;
      }
      el.innerText = currentCount + "+";
    }, speed);
  };

  useEffect(() => {
    if (inView && !isMobile) {
      document.querySelectorAll(".count-up").forEach((el) => {
        const count = parseInt(el.getAttribute("data-count"));
        startCountUp(el, count);
      });
    }
  }, [inView, isMobile]);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth;
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={ref}
      className="bg-black text-white py-10 pb-16 relative overflow-hidden"
    >
      {/* Top Stats */}
      {isMobile ? (
        <div
          className="slider"
          style={{
            "--width": "200px",
            "--height": "100px",
            "--quantity": 4,
          }}
        >
          <div className="list">
            {[
              { number: "20", label: "Categories" },
              { number: "100", label: "Food Items" },
              { number: "35", label: "Combos" },
              { number: "20", label: "Special Items" },
            ].map((item, index) => (
              <div
                key={index}
                className="item flex flex-col items-center justify-center text-center"
                style={{ "--position": index + 1 }}
              >
                <h2 className="text-5xl font-extrabold">{item.number}+</h2>
                <p className="uppercase text-lg font-medium mt-1 tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-[70vw] mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-8">
          {[
            { number: "20", label: "Categories" },
            { number: "100", label: "Food Items" },
            { number: "35", label: "Combos" },
            { number: "20", label: "Special Items" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-center md:text-left"
            >
              <h2
                className="text-4xl font-extrabold count-up"
                data-count={parseInt(item.number)}
              >
                0+
              </h2>
              <p className="uppercase text-xl font-medium mt-1 tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Divider Line */}
      <div className="border-t border-gray-700 my-10 w-[70vw] mx-auto"></div>

      {/* Our Interiors Title + Arrows */}
      <div className="md:w-[70vw] w-[95vw] mx-auto px-4 flex items-center justify-between md:mb-10 mb-5">
        <div>
          <button className="bg-[#CB3A1AD6] text-xs jost-700 rounded-sm px-4 py-1 mb-2">
            VIEW
          </button>
          <h2 className="text-3xl md:text-4xl font-extrabold jost-900">
            OUR INTERIORS
          </h2>
        </div>

        {/* Arrows - hidden on mobile */}
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => handleScroll("left")}
            className="w-10 h-10 flex items-center justify-center border border-white hover:bg-white hover:text-black transition"
          >
            ←
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-10 h-10 flex items-center justify-center border border-white hover:bg-white hover:text-black transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Interiors Cards */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth px-4 max-w-7xl mx-auto gap-4"
      >
        {[...Array(20)].map((_, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-60 md:w-64 h-64 bg-gray-300 group relative overflow-hidden rounded-sm"
          >
            {/* Red Hover */}
            <div className="absolute inset-0 bg-[#CB3A1AD6] opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <div className="bg-white p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#CB3A1AD6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteriorSection;
