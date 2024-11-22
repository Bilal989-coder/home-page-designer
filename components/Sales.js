import React from "react";
const Sale = () => {
  // Deals Data
  const deals = [
    {
      id: 1,
      title: "Clothe",
      img: "/technology/8.jpg",
      discount: "-25%",
    },
    {
      id: 2,
      title: "Headphones",
      img: "/technology/5.jpg",
      discount: "-15%",
    },
    {
      id: 3,
      title: "Laptops",
      img: "/technology/7.jpg",
      discount: "-10%",
    },
    {
      id: 4,
      title: "Cameras",
      img: "/technology/6.jpg",
      discount: "-30%",
    },
    {
      id: 5,
      title: "Canon cameras",
      img: "/technology/3.jpg",
      discount: "-20%",
    },
  ];

  return (
    <><section className="md:block hidden bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4">
        {/* Main Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-6 ">
          {/* Deal Overview */}
          <div className="bg-white rounded-md shadow-md p-4">
            <div className="justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Deals and offers</h2>
              <p className="text-gray-600">Hygiene equipments</p>
              <div className="flex items-center p-2">
                {["04 Days", "13 Hour", "34 Min", "56 Sec"].map((time, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-2 py-1 mr-2"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Individual Deals */}
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-md cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={deal.img}
                alt={deal.title}
                className="w-full h-50 object-cover rounded-md mb-4" />
              <h2 className="text-lg font-bold text-center">{deal.title}</h2>
              <button className="text-red-600 bg-red-100 px-4 py-2 mt-2 rounded-3xl">
                {deal.discount}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div className="md:hidden bg-white">
        {/* Deal Overview in a Row */}
        <div className="flex justify-between items-center bg-white rounded-md shadow-md p-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Deals and offers</h2>
            <p className="text-gray-600">Hygiene equipments</p>
          </div>

          {/* Right Side - Timer */}
          <div className="flex items-center flex-wrap">
            {["13 Hour", "34 Min", "56 Sec"].map((time, index) => {
              const [number, label] = time.split(" "); // Split into number and label
              return (
                <div
                  key={index}
                  className="bg-gray-200 text-xs px-2 py-1 mr-2 mt-1 rounded-md flex flex-col items-center"
                >
                  <span className="font-bold">{number}</span>
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>
        {/* 3 Cards per Row */}
        <div className="grid grid-cols-3">
          {deals.slice(0, 3).map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-md cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={deal.img}
                alt={deal.title}
                className="w-full h-50 object-cover rounded-md mb-4" />
              <h2 className="text-md text-center">{deal.title}</h2>
              <button className="text-red-600 bg-red-100 px-4 py-2 mt-2 rounded-3xl">
                {deal.discount}
              </button>
            </div>
          ))}
        </div>
      </div></>

  );
};

export default Sale;