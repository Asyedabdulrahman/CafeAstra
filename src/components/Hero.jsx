import heroCoffeeImage from "../assets/heroCoffeeImage.jpg";

const HeroComponent = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}

      <img
        src={heroCoffeeImage}
        alt="Coffee Background"
        className="absolute w-full md:h-full h-[85vh] object-cover"
      />

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 mt-16 md:mt-4">
        <p className="md:text-4xl text-2xl tracking-widest md:jost-700">THE GREAT</p>
        <h1 className="text-2xl md:text-6xl jost-700 mt-2">
          TASTE AT EVERY SIP
        </h1>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-px w-12 bg-white"></div>
          <p className="md:text-4xl tracking-wider font-medium md:jost-600">
            PART OF US
          </p>
          <div className="h-px w-12 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
