"use client";

import React, { useState, useEffect, useRef } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu if the user clicks outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className="p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-700"></div>
      </button>

      {/* Sidebar Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* User Section */}
        <div className="p-4 bg-gray-300 py-4 container mx-auto">
          <div className=" items-center space-x-2 py-2">
            <img
                src="/avatar.jpg"
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
            <div className="flex text-gray-700 pt-1">
              <p>Sign in | Register</p>
            </div>
          </div>
        </div>

        {/* Menu Links */}
        <nav className="container p-4  bg-white rounded-md shadow-md gap-2">
          <ul className=" space-y-4 text-gray-700">
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
                <span className="material-icons ">home</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
              <span className="material-icons">list</span>
                <span>Categories</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
                <span className="material-icons">favorite</span>
                <span>Favorites</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
                <span className="material-icons">inventory_2</span>
                <span>My Orders</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="container p-4  bg-white rounded-md shadow-md my-2 gap-2">
          <ul className=" space-y-4 text-gray-700">
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
              <span className="material-icons">language</span>
                <span>English | USD</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
                <span className="material-icons">headset_mic</span>
                <span>Contact Us</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
                <span className="material-icons">domain</span>
                <span>About</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="container p-6  bg-white rounded-md bg-cover shadow-md">
          <ul className=" space-y-4 text-gray-700">
            <li>
              <a href="#" className="hover:text-gray-900 px-7">User Agreement</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 px-7">Partnership</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 px-7">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
