import React, { useState, useEffect } from "react";
import heroCoffeeImage from "../assets/heroCoffeeImage.jpg";

const HeroComponent = React.memo(() => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Handle image loading state
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    // Preload the hero image to make sure it loads quickly
    const image = new Image();
    image.src = heroCoffeeImage;
    image.onload = handleImageLoad;
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroCoffeeImage}
        alt="Coffee Background"
        className={`absolute w-full h-full object-cover transition-all duration-300 ease-in-out ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="eager" // Set high priority for hero image
      />

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 mt-16 md:mt-4">
        <p className="text-2xl md:text-4xl tracking-widest font-bold">
          THE GREAT
        </p>
        <h1 className="text-2xl md:text-6xl font-bold mt-2">
          TASTE AT EVERY SIP
        </h1>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-px w-12 bg-white"></div>
          <p className="text-xl md:text-4xl tracking-wider font-medium">
            PART OF US
          </p>
          <div className="h-px w-12 bg-white"></div>
        </div>
      </div>
    </div>
  );
});

export default HeroComponent;
