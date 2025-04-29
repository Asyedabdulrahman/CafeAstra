import React from "react";

const OurMenuCategories = () => {
  const categories = [
    { name: "Coffee", items: "20" },
    { name: "Pastries", items: "25" },
    { name: "Sandwiches", items: "10" },
    { name: "Combos", items: "35" },
    { name: "Desserts", items: "15" },
    { name: "Soups", items: "20" },
  ];

  return (
    <section className="md:w-[70vw] w-[90vw] mx-auto px-4 md:px-0 py-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <button className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
          MENU
        </button>
        {/* <button className="border border-red-600 text-red-600 text-xs font-semibold px-4 py-2 rounded hover:bg-red-50 transition">
          ITEMS
        </button> */}
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
        OUR MENU CATEGORIES
      </h2>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/3 bg-gray-100 rounded overflow-hidden">
          <div className="h-48 bg-gray-300"></div> {/* Placeholder Image */}
          <div className="p-4">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="border-b py-4 flex justify-between items-start"
              >
                <div>
                  <h3 className="font-bold">{category.name}</h3>
                  <p className="text-xs text-gray-500">
                    Non nisi est sit amet facilisis magna
                  </p>
                </div>
                <div>
                  <span className="text-red-600 font-bold">
                    {category.items}
                  </span>
                  <span className="text-red-600 inline-block">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Grid */}
        <div className="w-full lg:w-2/3 md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 hidden ">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded overflow-hidden shadow-sm"
            >
              <div className="h-40 bg-gray-300"></div> {/* Placeholder Image */}
              <div className="p-4 text-center">
                {/* Stars */}
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-red-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.64 12.545 1 8.91l6.09-.885L10 2.5l2.91 5.525 6.09.885-4.64 3.636 1.518 5.545z" />
                    </svg>
                  ))}
                </div>
                <h4 className="font-semibold">{category.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMenuCategories;
