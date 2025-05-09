import React, { useEffect, useState } from "react";
import ourMissionTopLeft from "../assets/ourMissionTopLeft.png";
import ourMissionTopRight from "../assets/ourMissionTopRight.png";
import shopImage from "../assets/shopImage2.jpg";
import arunMama from "../assets/arunMama.jpg";

const MissionVision = React.memo(() => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Handle image loading state for the welcomeRestaurant image
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    // Preload welcomeRestaurant image
    const image = new Image();
    image.src = shopImage;
    image.onload = handleImageLoad;
  }, []);

  return (
    <section className="py-10 bg-white" id="franchise">
      <div className="w-[90vw] md:w-[65vw] mx-auto px-4 relative">
        {/* Mission and Vision */}
        <div className="text-center mb-12">
          <button className="bg-[#CB3A1A] text-lg text-white font-semibold px-3 py-1 rounded mb-2">
            CLIENT TESTIMONIALS
          </button>
          <h2 className="text-3xl md:text-4xl font-extrabold">
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

        <img
          src={ourMissionTopRight}
          alt="Decor1"
          className="absolute top-8 -right-28 w-20 h-20 hidden md:block object-contain"
          loading="lazy" // Lazy load this image
        />

        <img
          src={ourMissionTopLeft}
          alt="Decor1"
          className=" absolute top-8 -left-28 w-20 h-20  hidden md:block object-contain"
          loading="lazy" // Lazy load this image
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-[#CB3A1A] p-6 sm:text-left text-center py-8">
            <h3 className="font-bold mb-4">MISSION</h3>
            <p className="text-sm text-gray-600 ml-2">
              To be a leading café chain recognized for excellence in quality,
              innovation, and customer experience.
            </p>
          </div>
          <div className="border border-[#CB3A1A] p-6 sm:text-left text-center py-8">
            <h3 className="font-bold mb-4">VISION</h3>
            <p className="text-sm text-gray-600 ml-2">
              To serve high-quality, delicious food and beverages with fast,
              friendly service in a cozy, inviting atmosphere—while continuously
              innovating and expanding our offerings to meet every craving.
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
              With over 20 years of experience in the fast food industry,
              including international expertise, the founder of{" "}
              <span className="font-bold">CafeAstra </span>
              brought his passion and knowledge back home to launch a thriving
              café. Today, CafeAstra is a growing and successful franchise,
              known for quality, flavor, and a commitment to great service.
            </p>
            <a href="#contactus">
              <button className="bg-[#CB3A1A] text-white px-6 py-2 hover:bg-red-700 transition w-full max-w-md mx-auto">
                CONTACT US
              </button>
            </a>
          </div>
          <div className="h-64 md:h-full w-full md:w-[40%] hidden md:block">
            <img
              src={shopImage}
              alt="welcome"
              className={`object-cover h-full transition-all duration-500 ease-in-out rounded-lg ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy" // Lazy load this image
            />
          </div>
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
          <div className="w-full max-w-sm mx-auto h-100 sm:h-130 rounded flex flex-col justify-end overflow-hidden">
            <img
              src={arunMama}
              alt="Profile"
              className="w-full h-fit object-cover rounded-t-lg"
            />
            <div className="bg-black text-white py-4 text-center">
              <h4 className="font-bold">SK</h4>
              <p className="text-xs">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default MissionVision;
