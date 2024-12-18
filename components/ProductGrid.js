import React from "react";

const ProductGrid = () => {
  // Main Banner Data
  const mainBanner = {
    title: "Home and Outdoor",
    background: "/a.jpg",
    buttonText: "Source now",
  };

  // Products Data
  const products = [
    { id: 1, name: "Soft Chair", price: "USD 19", img: "/interior/1.jpg" },
    { id: 2, name: "Smart Watch", price: "USD 29", img: "/interior/3.jpg" },
    { id: 3, name: "Desk Lamp", price: "USD 15", img: "/interior/4.jpg" },
    { id: 4, name: "Bluetooth Speaker", price: "USD 45", img: "/interior/6.jpg" },
    { id: 5, name: "Modern Sofa", price: "USD 99", img: "/interior/10.jpg" },
    { id: 6, name: "Gaming Chair", price: "USD 149", img: "/interior/9.jpg" },
    { id: 7, name: "Desk Organizer", price: "USD 19", img: "/interior/5.jpg" },
    { id: 8, name: "Office Chair", price: "USD 79", img: "/interior/2.jpg" },
  ];

  return (
    <><section className="bg-gray-100 md:block hidden shadow-md">
      <div className="container mx-auto px-4 py-4">
        {/* Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-1 ">
          {/* Main Banner */}
          <div
            className="row-span-2 bg-cover bg-center rounded-md shadow-md p-4 flex flex-col justify-between"
            style={{ backgroundImage: `url(${mainBanner.background})` }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              {mainBanner.title.split("<br />").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
              {mainBanner.buttonText}
            </button>
          </div>

          {/* Products */}
          <div className="md:col-span-4 grid grid-cols-4 gap-1">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-md cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-md p-4 flex items-center justify-between"
              >
                <div>
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-600">From <br />{product.price}</p>
                </div>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section><div className="md:hidden m-0 bg-white">
        {/* Deal Overview in a Row */}
        <div className="block justify-between items-center bg-white rounded-md shadow-md p-4">
          <div className="block flex-col">
            <h2 className="text-xl font-bold">Home and Outdoor</h2>
          </div>
        </div>
        {/* 3 Cards per Row */}
        <div className="grid grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-md cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-md p-2 block items-center justify-between"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-20 h-18 object-cover rounded-md" />
              <div>
                <h2 className="text-md font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm">From {product.price}</p>
              </div>

            </div>
          ))}
        </div>
        <div className="block container justify-between items-center bg-white rounded-md shadow-md p-4">
          <a href="#" className="flex items-center space-x-2 font-semibold text-blue-500">
            <span>Source now</span>
            <span className="material-icons mt-0.5">arrow_forward</span>
          </a>
        </div>
      </div></>
      
  );
};

export default ProductGrid;
