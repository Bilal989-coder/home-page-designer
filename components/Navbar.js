import React from "react";
const Navbar = () => {
  return (
    <nav className=" bg-white shadow-md">
      {/* Mobile Screen */}
      <div className="container md:hidden mx-auto">
        {/* Search Bar Section */}
        <div className="px-4 pb-4 items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Categories Section */}
        <div className="flex flex-row mb-3 mt-1 overflow-x-auto md:overflow-visible">
          <ul className="flex gap-3 px-4 pb-2 rounded-lg">
            <li className="p-2 bg-white shadow-md rounded-md">All Category</li>
            <li className="p-2 bg-white shadow-md rounded-md">Gadgets</li>
            <li className="p-2 bg-white shadow-md rounded-md">Clothes</li>
            <li className="p-2 bg-white shadow-md rounded-md">Accessory</li>
          </ul>
        </div>
      </div>

      <div className="hidden md:flex container mx-auto  flex-wrap justify-between items-center py-3">
        {/* Left: Category and Navigation */}
        <div className="flex items-center space-x-6">
          {/* Categories Dropdown */}
          <button className="flex items-center text-gray-700 hover:text-blue-500">
            <span className="material-icons mr-2">menu</span>
            <span>All categories</span>
          </button>

          {/* Navigation Links */}
          <a href="#" className="text-gray-600 hover:text-blue-500">Hot Offers</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Gift Boxes</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Projects</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Menu Item</a>

          {/* Help Dropdown */}
          <a href="#" className="flex items-center text-gray-600 hover:text-blue-500">
            <span>Help</span>
            <span className="material-icons ml-2">arrow_drop_down</span>
          </a>
        </div>

        {/* Right: Language and Location */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          {/* Language Dropdown */}
          <div className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
            <span>English, USD</span>
            <span className="material-icons ml-2">arrow_drop_down</span>
          </div>

          {/* Shipping Location */}
          <div className="flex items-center text-gray-700 hover:text-blue-500 cursor-pointer">
            <span>Ship to</span>
            <img
              src="https://flagcdn.com/w40/de.png"
              alt="Germany"
              className="ml-2 w-5 h-5 rounded"
            />
            <span className="material-icons ml-2">arrow_drop_down</span>
          </div>
        </div>
      </div>

      <div>

      </div>
    </nav>
  );
};

export default Navbar;
