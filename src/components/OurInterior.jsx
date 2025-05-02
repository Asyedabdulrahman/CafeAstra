import React, { useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import useIsMobile from "./UseIsMobile";

// Import images (you can switch these to WebP if you prefer)
import interior1 from "../assets/interior/interior1.jpg";
import interior2 from "../assets/interior/interior2.jpg";
import interior3 from "../assets/interior/interior3.jpg";
import interior4 from "../assets/interior/interior4.jpg";
import interior5 from "../assets/interior/interior5.jpg";
import interior6 from "../assets/interior/interior6.jpg";
import interior7 from "../assets/interior/interior7.jpg";

const InteriorCard = React.memo(({ src, alt }) => {
  return (
    <div className="flex-shrink-0 w-60 md:w-64 h-64 bg-gray-100 group relative overflow-hidden rounded-sm">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        fetchpriority="high" 
        width={400}
        height={400}
      />
    </div>
  );
});

const InteriorSection = () => {
  const interiorImages = [
    interior1,
    interior2,
    interior3,
    interior4,
    interior5,
    interior6,
    interior7,
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const isMobile = useIsMobile();
  const scrollContainerRef = useRef(null);

  const startCountUp = useCallback((el, count) => {
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
  }, []);

  useEffect(() => {
    if (inView && !isMobile) {
      document.querySelectorAll(".count-up").forEach((el) => {
        const count = parseInt(el.getAttribute("data-count"));
        startCountUp(el, count);
      });
    }
  }, [inView, isMobile, startCountUp]);

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
          style={{ "--width": "200px", "--height": "100px", "--quantity": 4 }}
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
        {interiorImages.map((img, idx) => (
          <InteriorCard
            key={idx}
            src={img}
            alt={`Interior ${idx + 1}`}
            idx={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default InteriorSection;
