"use client";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // Track the active link

  // Toggle dark mode and save preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Sync dark mode preference with localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Set active link on click
  const handleClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <nav className="transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            Muhammad Asghar
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <ul className="flex space-x-10 text-gray-600 dark:text-gray-300">
              {["Blog", "Project", "About", "Newsletter"].map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer relative group hover:text-purple-600 transition-all duration-300 ${
                    activeIndex === index ? "text-purple-600" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {/* Use Link for the Blog Page */}
                  <Link
                    href={item === "Blog" ? "/" : `/${item.toLowerCase()}`}
                    passHref
                  >
                    {item}
                  </Link>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-1 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      activeIndex === index ? "scale-x-100" : ""
                    }`}
                  ></span>
                  <style jsx>{`
                    .group:hover {
                      transform: scale(1.1);
                    }
                  `}</style>
                </li>
              ))}
            </ul>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? (
              <MdDarkMode className="text-xl text-gray-800 dark:text-white" />
            ) : (
              <MdOutlineLightMode className="text-xl text-gray-800 dark:text-white" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden mt-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg`}
        >
          <ul className="space-y-4 px-6 py-4">
            {["Blog", "Project", "About", "Newsletter"].map((item, index) => (
              <li
                key={index}
                className={`text-gray-800 dark:text-white hover:text-purple-600 transition-all duration-300`}
              >
                <Link
                  href={item === "Blog" ? "/blog" : `/${item.toLowerCase()}`}
                  passHref
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
