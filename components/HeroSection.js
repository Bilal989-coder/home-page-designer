import React from "react";

const HeroSection = () => {
  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  const promotions = [
    {
      bgColor: "bg-orange-600",
      text: "Get US $10 off with a new supplier",
    },
    {
      bgColor: "bg-green-300",
      text: "Send quotes with supplier preferences",
    },
  ];

  return (
    <section className="bg-gray-100 shadow-md">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12  py-8">
        {/* Left Sidebar: Categories */}
        <div className="md:col-span-3 bg-white p-4 rounded shadow-md">
          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`${
                  index === 0 ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content: Banner */}
        <div
          className="md:col-span-6 p-6 shadow-md rounded relative flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('/background.jpg')`,
          }}
        >
          {/* Overlay for Better Text Visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded"></div>

          {/* Banner Text Content */}
          <div className="relative text-white text-center">
            <h1 className="text-xl md:text-2xl">
              Latest trending <br />
              <span className="font-semibold">Electronic items</span>
            </h1>
            <button className="mt-4 bg-white text-black py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Sidebar: User Actions */}
        <div className="md:col-span-3 space-y-4 pl-4">
          {/* User Greeting Section */}
          <div className="bg-blue-200 p-4 shadow-md rounded text-center">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="/avatar.jpg"
                alt="User Avatar"
                className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-4 md:mb-0 md:mr-4"
              />
              <p className="text-gray-600 font-mono text-lg">
                <b>Hi, user <br />let's get started</b>
              </p>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600 w-full transition duration-300">
              Join now
            </button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded mt-2 w-full hover:bg-gray-300 transition duration-300">
              Log in
            </button>
          </div>

          {/* Promotional Cards */}
          {promotions.map((promo, index) => (
            <div
              key={index}
              className={`${promo.bgColor} p-4 shadow-md rounded text-center`}
            >
              <p className="text-white">{promo.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
