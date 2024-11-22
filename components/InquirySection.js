import React from "react";

const InquirySection = () => {
  return (
    <><section className="bg-gray-100 md:block hidden py-10">
      {/* Background Container */}
      <div
        className="rounded-md shadow-lg hidden md:flex flex-col justify-between bg-center bg-cover p-6"
        style={{
          backgroundImage: "url('/back.jpg')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "450px",
        }}
      >
        {/* Content Container */}
        <div className="container mx-auto px-4 hidden md:flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side: Welcome Message */}
          <div className="lg:w-2/3 text-white text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-bold">
              Welcome to Our Website
            </h2>
            <p className="text-lg leading-relaxed">
              Discover high-quality products tailored to your needs.
              Share your inquiry and let us help you find exactly what you’re looking for!
            </p>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            {/* Form: Item Name */}
            <div className="mb-4">
              <label
                htmlFor="item"
                className="block text-gray-700 font-semibold mb-2"
              >
                Which Item Do You Need?
              </label>
              <input
                type="text"
                id="item"
                placeholder="Enter the item name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>

            {/* Form: Details */}
            <div className="mb-4">
              <label
                htmlFor="details"
                className="block text-gray-700 font-semibold mb-2"
              >
                Type More Details
              </label>
              <textarea
                id="details"
                placeholder="Provide additional details about your inquiry"
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Form: Quantity and Units */}
            <div className="flex gap-4 mb-4">
              {/* Quantity */}
              <div className="w-1/2">
                <label
                  htmlFor="quantity"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  placeholder="Enter quantity"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>

              {/* Units Dropdown */}
              <div className="w-1/2">
                <label
                  htmlFor="units"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Units
                </label>
                <select
                  id="units"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="pieces">Pieces</option>
                  <option value="boxes">Boxes</option>
                  <option value="kg">Kilograms</option>
                  <option value="liters">Liters</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-600 transition">
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-100">
      <div className="block md:hidden rounded-md shadow-lg flex-col justify-between bg-cover p-6"
        style={{
          backgroundImage: "url('/back.jpg')",
          backgroundSize: "100%",
          minHeight: "300px",
        }}
      >
        <div className=" text-white text-center">
          <div className="items-center justify-items-center mt-10 mb-3">
            <h2 className="text-xl font-bold ">
              An easy way to send <br/>requests to all suppliers
            </h2>
          </div>
          <button className="w-50 bg-blue-500 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-600 transition">
              Send Inquiry
          </button>
          </div>
      </div>
    </section></>
  );
};

export default InquirySection;
