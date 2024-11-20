import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-md">
            <span className="material-icons">shopping_bag</span>
          </div>
          <span className="text-xl font-bold text-blue-600">Brand</span>
        </div>

        {/* Middle Section */}
        <div className="flex items-center space-x-4 flex-1 mt-4 md:mt-0 md:ml-4 w-full md:w-auto">
          {/* Search Form */}
          <div className="flex items-center w-full md:w-auto flex-grow">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="p-2 border-t border-b border-gray-300 focus:outline-none"
              defaultValue="all"
            >
              <option value="all">All category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">
              Search
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 pl-2 mt-4 md:mt-0">
          {/* Profile */}
          <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-600">
            <span className="material-icons">person</span>
            <span className="text-sm">Profile</span>
          </div>
          {/* Message */}
          <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-600">
            <span className="material-icons">message</span>
            <span className="text-sm">Message</span>
          </div>
          {/* Orders */}
          <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-600">
            <span className="material-icons">favorite</span>
            <span className="text-sm">Orders</span>
          </div>
          {/* My Cart */}
          <div className="flex flex-col items-center text-gray-500 cursor-pointer hover:text-blue-600">
            <span className="material-icons">shopping_cart</span>
            <span className="text-sm">My Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
