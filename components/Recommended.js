import React from "react";

const Recommended = () => {
  // Data for recommended items
  const recommendedItems = [
    { id: 1, img: "/cloth/2.jpg", price: "$69.99", description: "Good Quality in Fabric Blue, color" },
    { id: 2, img: "/cloth/1.jpg", price: "$30.99", description: "Good Quality in Fabric Blue, color" },
    { id: 3, img: "/cloth/4.jpg", price: "$40.25", description: "Good Quality in Fabric Blue, color" },
    { id: 4, img: "/technology/2.jpg", price: "$44.50", description: "Good Quality in Fabric Blue, color" },
    { id: 5, img: "/cloth/3.jpg", price: "$35.67", description: "Good Quality in Fabric Blue, color" },
    { id: 6, img: "/technology/1.jpg", price: "$65.90", description: "Good Quality in Fabric Blue, color" },
    { id: 7, img: "/cloth/5.jpg", price: "$8.99", description: "Good Quality in Fabric Blue, color" },
    { id: 8, img: "/technology/7.jpg", price: "$10.30", description: "Good Quality in Fabric Blue, color" },
    { id: 9, img: "/cloth/6.jpg", price: "$10.30", description: "Good Quality in Fabric Blue, color" },
    { id: 10, img: "/interior/8.jpg", price: "$80.95", description: "Good Quality in Fabric Blue, color" },
  ];

  return (
    <section className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold pb-1">Recommended Items</h1>
        {/* Grid of Recommended Items */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 py-3">
          {recommendedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-md shadow-md p-4">
              <img
                src={item.img}
                alt={`Item ${item.id}`}
                className="w-full h-50 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold">{item.price}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommended;
