import React, { useState, useEffect } from "react";
import hero2 from "../assets/hero2.jpg";
import cafeAstra3 from "../assets/logo4.svg";

const HeroComponent = React.memo(() => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Handle image loading state
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    // Preload the hero image to make sure it loads quickly
    const image = new Image();
    image.src = hero2;
    image.onload = handleImageLoad;
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-center bg-cover flex items-center justify-center "
      // style={{ backgroundImage: `url(${hero2})` }}
    >
      <img
        src={hero2}
        className={`absolute transition-all w-full h-full object-cover duration-300 ease-in-out ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        }`}
        alt="heroImage"
        loading="eager"
      />
      {/* Optional overlay to darken image if needed */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text/logo */}
      <div className="relative z-10 text-center text-white px-4 mt-16 md:mt-0">
        <img
          src={cafeAstra3}
          alt="Cafe Astra Logo"
          className="w-[90dvw] h-[70dvh] md:w-[50dvw] md:h-[50dvh]"
        />
      </div>
    </div>
  );
});

export default HeroComponent;