import React, { useMemo, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// import menuCard from "../assets/menuCard.jpg";
import menuCard from "../assets/3.jpg";
import coffee from "../assets/coffee.jpg";
import pastries from "../assets/pastries.jpg";
import sandwiches from "../assets/sandwich.jpg";
import desserts from "../assets/desserts.jpg";
import soup from "../assets/soups.jpg";

const starIcons = new Array(5).fill(0);

const categoriesData = [
  {
    name: "Coffee",
    items: "20",
    img: coffee,
    description: "Freshly brewed coffee to energize your day.",
  },
  {
    name: "Pastries",
    items: "25",
    img: pastries,
    description: "Flaky, buttery pastries baked to perfection.",
  },
  {
    name: "Sandwiches",
    items: "10",
    img: sandwiches,
    description: "Hearty and flavorful sandwiches made with fresh.",
  },
  {
    name: "Desserts",
    items: "15",
    img: desserts,
    description: "Indulgent treats to satisfy your sweet tooth.",
  },
  {
    name: "Soups",
    items: "20",
    img: soup,
    description: "Warm, comforting soups full of rich flavor.",
  },
  {
    name: "Combos",
    items: "35",
    img: coffee,
    description: "Perfectly paired meal combos for a complete bite.",
  },
];

const OurMenuCategories = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { ref: sidebarRef, inView: sidebarInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (sidebarInView) {
      setSidebarVisible(true);
    }
  }, [sidebarInView]);

  const categories = useMemo(() => categoriesData, []);

  return (
    <section
      className="md:w-[70vw] w-[90vw] mx-auto px-4 md:px-0 py-10"
      id="menu"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <button className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
          MENU
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
        OUR MENU CATEGORIES
      </h2>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Lazy Render */}
        <div
          ref={sidebarRef}
          className="w-full lg:w-1/3 bg-gray-100 rounded overflow-hidden"
        >
          {sidebarVisible && (
            <>
              <img
                src={menuCard}
                alt="menuCardImage"
                className="rounded-lg h-60 w-full object-contain"
                loading="lazy"
              />

              <div className="p-4 flex justify-center items-center">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    "Soups",
                    "Quick Bites",
                    "Fried Chicken Starters",
                    "Garlic Bread",
                    "Momos",
                    "Maggi",
                    "Pasta",
                    "Burgers",
                    "Sandwich",
                    "Pizzas",
                    "Salad",
                    "Wraps",
                    "Bread with Spread",
                    "Milkshakes",
                    "Smoothies",
                    "Fresh Juice",
                    "Hot Beverages",
                    "Desserts",
                    "Ice Creams Scoops",
                    "Drinks",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="py-2 px-3 text-sm font-medium text-gray-700 text-center transition duration-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Grid */}
        <div className="w-full lg:w-2/3 hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div
              key={category.name + idx}
              className="h-[300px] flex flex-col rounded-lg overflow-hidden shadow hover:shadow-md transition bg-white"
            >
              <div className="w-full h-60 overflow-hidden group">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-4 text-center space-y-2">
                <div className="flex justify-center gap-1 text-red-600">
                  {starIcons.map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 15l-5.878 3.09L5.64 12.545 1 8.91l6.09-.885L10 2.5l2.91 5.525 6.09.885-4.64 3.636 1.518 5.545z" />
                    </svg>
                  ))}
                </div>

                <h4 className="font-semibold text-gray-800">{category.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMenuCategories;
