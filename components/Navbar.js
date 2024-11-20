import React from "react";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-3">
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
    </nav>
  );
};

export default Navbar;
