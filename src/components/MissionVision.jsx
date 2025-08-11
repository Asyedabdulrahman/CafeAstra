import React, { useEffect, useState } from "react";
import ourMissionTopLeft from "../assets/ourMissionTopLeft.png";
import ourMissionTopRight from "../assets/ourMissionTopRight.png";
import shopImage from "../assets/shopImage2.jpg";

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
          <button className="bg-[#CB3A1A] text-lg text-white font-semibold px-3 py-1 mb-2">
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
          <div className="border border-[#CB3A1A] p-6 text-left py-8">
            <h3 className="font-bold mb-4">MISSION</h3>
            <p
              className="text-sm text-gray-600 ml-2"
              style={{ textAlign: "justify" }}
            >
              To be a leading café chain recognized for excellence in quality,
              innovation, and customer experience.
            </p>
          </div>
          <div
            className="border border-[#CB3A1A] p-6 py-8"
            style={{ textAlign: "justify" }}
          >
            <h3 className="font-bold mb-4">VISION</h3>
            <p className="text-sm text-gray-600 ml-2">
              To serve high-quality, delicious food and beverages with fast,
              friendly service in a cozy, inviting atmosphere while continuously
              innovating and expanding our offerings to meet every craving.
            </p>
          </div>
        </div>

        {/* Franchise Details */}
        <div className="flex flex-col md:flex-row items-center text-center bg-[#d8d5d5] p-6 sm:p-10 lg:p-16 rounded-lg shadow-md min-h-[70vh] space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          {/* TEXT CONTENT CONTAINER */}
          {/* - flex-1 allows this container to grow and fill available space. */}
          {/* - Order set to 2 on mobile (order-2) and 1 on desktop (md:order-1) to ensure text is below the image on small screens. */}
          <div className="flex-1 flex flex-col items-center">
            <button className="bg-[#CB3A1A] text-xs text-white font-semibold px-3 py-1 m-4   mb-3">
              ABOUT
            </button>

            {/* Responsive font size for the heading */}
            <h2 className="text-3xl sm:text-4xl mb-4 jost-600">
              FRANCHISE DETAILS
            </h2>

            {/* The decorative line and dots now align left on desktop */}
            <div className="w-12 h-px bg-[#CB3A1A] my-2 mx-auto md:mx-0"></div>
            <div className="flex justify-center md:justify-start gap-1.5 mb-6 pt-2">
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
              <div className="w-2 h-2 bg-[#CB3A1A] rounded-full"></div>
            </div>

            <p className="text-base text-gray-700 mb-8 w-full mx-auto md:mx-0">
              <span className="block max-w-xl mx-auto text-center">
                With over 20 years of experience in the fast food industry,
                including international,
              </span>
              <span className="block max-w-lg mx-auto text-center">
                The founder of <span className="font-bold">CafeAstra</span>{" "}
                brought his passion and knowledge back home to launch a thriving
                café.
              </span>
              <span className="block max-w-md mx-auto text-center">
                Today, <span className="font-bold">CafeAstra</span> is a growing
                and successful franchise,
              </span>
              <span className="block max-w-sm mx-auto text-center">
                known for quality, flavor, and a commitment to great service.
              </span>
            </p>

            <a href="#contactus" className="w-full md:w-auto">
              {/* Button takes full width on mobile and auto width on desktop */}
              <button className="px-8 py-3 bg-[#CB3A1A] hover:bg-white hover:text-[#CB3A1A] text-white transition  rounded-md w-full md:w-auto">
                CONTACT US
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default MissionVision;

{
  /* IMAGE CONTAINER */
}
{
  /* - Now visible on all screen sizes. */
}
{
  /* - Has a fixed height on mobile and takes the full container height on desktop. */
}
{
  /* - Order set to 1 on mobile (order-1) and 2 on desktop (md:order-2) to appear on top on small screens. */
}
{
  /* <div className="w-full md:w-2/5 h-80 md:h-[60vh] order-1 md:order-2">
            <img
              src={shopImage}
              alt="CafeAstra franchise interior"
              className={`object-cover w-full h-full transition-opacity duration-700 ease-in-out rounded-lg ${
                isImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div> */
}
