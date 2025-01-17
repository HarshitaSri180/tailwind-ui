import React, { useState } from "react";

export default function Navbar() {
  // State to handle hamburger menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#3B5D50]">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center text-white py-6 w-full">
          {/* Left section - Logo */}
          <div className="flex items-center">
            <a className="text-3xl font-bold" href="#">
              Logo Here
            </a>
          </div>

          {/* Right section - Nav items and icons */}
          <div className="hidden xl:flex items-center space-x-5">
            <ul className="flex space-x-12 font-semibold ">
              <li className="hover:underline transition: .3s all ease  origin-right duration-150	">
                <a className="hover:text-gray-400" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Category
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Collections
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Icons */}
            <a className="hover:text-gray-400" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </a>
            <a className="hover:text-gray-400" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </a>
            <a className="hover:text-gray-400" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>

          {/* Hamburger menu button */}
          <button
            className="xl:hidden flex items-center text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden">
            <ul className="flex flex-col items-center space-y-6 mt-4">
              <li>
                <a className="text-white hover:text-white-400" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-400" href="#">
                  Category
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-400" href="#">
                  Collections
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-400" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
