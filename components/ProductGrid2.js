import React from "react";

const ProductGrid2 = () => {
  // Data for the grid
  const mainBanner = {
    title: "Consumer electronics and gadgets",
    background: "/background.jpg",
    buttonText: "Source now",
  };

  const products = [
    { id: 1, name: "Soft Chair", price: "USD 19", img: "/technology/1.jpg" },
    { id: 2, name: "Smart Watch", price: "USD 29", img: "/technology/3.jpg" },
    { id: 3, name: "Desk Lamp", price: "USD 15", img: "/technology/4.jpg" },
    { id: 4, name: "Bluetooth Speaker", price: "USD 45", img: "/technology/6.jpg" },
    { id: 5, name: "Modern Sofa", price: "USD 99", img: "/technology/10.jpg" },
    { id: 6, name: "Gaming Chair", price: "USD 149", img: "/technology/9.jpg" },
    { id: 7, name: "Desk Organizer", price: "USD 19", img: "/technology/5.jpg" },
    { id: 8, name: "Office Chair", price: "USD 79", img: "/technology/2.jpg" },
  ];

  return (
    <section className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
          {/* Main Banner */}
          <div
            className="row-span-2 bg-cover bg-center rounded-md shadow-md p-4 flex flex-col justify-between"
            style={{ backgroundImage: `url(${mainBanner.background})` }}
          >
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              {mainBanner.title.split("<br />").map((line, index) => (
                <span key={index}>{line} <br /></span>
              ))}
            </h2>
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
              {mainBanner.buttonText}
            </button>
          </div>

          {/* Product Columns */}
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
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid2;
