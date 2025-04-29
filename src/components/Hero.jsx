// import heroCoffeeImage from "../assets/heroCoffeeImage.jpg";

// const HeroComponent = () => {
//   return (
//     <div>
//       {/* hero image placement */}
//       <div className="w-full bg-center h-[80vh] bg-cover bg-no-repeat flex flex-col justify-center items-center text-white ">
//         <img src={heroCoffeeImage} alt="heroCoffeeImage" />
//       </div>
//     </div>
//   );
// };

// export default HeroComponent;

import heroCoffeeImage from "../assets/heroCoffeeImage.jpg";

const HeroComponent = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroCoffeeImage}
        alt="Coffee Background"
        className="absolute w-full h-full object-cover"
      />

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-4xl tracking-widest jost-700">THE GREAT</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">
          TASTE AT EVERY SIP
        </h1>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-px w-12 bg-white"></div>
          <p className="text-4xl tracking-wider font-medium jost-600">
            PART OF US
          </p>
          <div className="h-px w-12 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
