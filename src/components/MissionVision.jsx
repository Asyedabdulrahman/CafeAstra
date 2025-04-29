import React from "react";
import ourMissionTopLeft from "../assets/ourMissionTopLeft.png"; // Adjust the path as necessary
import ourMissionTopRight from "../assets/ourMissionTopRight.png"; // Adjust the path as necessary

const MissionVision = () => {
  return (
    <section className="py-10 bg-white">
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
        />

        <img
          src={ourMissionTopLeft}
          alt="Decor1"
          className=" absolute top-8 -left-28 w-20 h-20  hidden md:block object-contain"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-[#CB3A1A] p-6 sm:text-left text-center py-8">
            <h3 className="font-bold mb-4">MISSION</h3>
            <p className="text-sm text-gray-600 ml-2">
              The only minor downside was the noise level, which made
              conversation a bit challenging at times. However, this did not
              significantly detract from the overall experience. The Culinary
              Corner excels in delivering delicious food and exceptional
              service.
            </p>
          </div>
          <div className="border border-[#CB3A1A] p-6 sm:text-left text-center py-8">
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
