"use client"

import React, { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        className="p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-1 bg-gray-700 mb-1"></div>
        <div className="w-6 h-1 bg-gray-700 mb-1"></div>
        <div className="w-6 h-1 bg-gray-700"></div>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          ✕
        </button>

        {/* User Section */}
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="text-gray-700">
              <p>Sign in | Register</p>
            </div>
          </div>
        </div>

        {/* Menu Links */}
        <nav className="p-4">
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
                <i className="fas fa-list"></i>
                <span>Categories</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
                <i className="fas fa-heart"></i>
                <span>Favorites</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
                <i className="fas fa-shopping-bag"></i>
                <span>My Orders</span>
              </a>
            </li>
          </ul>

          {/* Language & Currency */}
          <div className="mt-6">
            <p className="text-gray-700">English | USD</p>
          </div>

          {/* Additional Links */}
          <ul className="mt-6 space-y-4 text-gray-700">
            <li>
              <a href="#" className="hover:text-gray-900">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">User Agreement</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Partnership</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
