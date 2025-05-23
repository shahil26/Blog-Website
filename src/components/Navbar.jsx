import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Moon } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  )
  const location = useLocation()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <nav className="bg-white dark:bg-gray-900 py-4 px-6 lg:px-16 fixed w-full z-50 shadow-sm transition-colors">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="font-bold text-xl text-gray-800 dark:text-white"
        >
          Kumar Shahil
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "text-blue-600 font-semibold"
                : "text-gray-600 dark:text-gray-300"
            } hover:text-blue-600`}
          >
            Blog
          </Link>
          <Link
            to="/projects"
            className={`${
              location.pathname === "/projects"
                ? "text-blue-600 font-semibold"
                : "text-gray-600 dark:text-gray-300"
            } hover:text-blue-600`}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={`${
              location.pathname === "/about"
                ? "text-blue-600 font-semibold"
                : "text-gray-600 dark:text-gray-300"
            } hover:text-blue-600`}
          >
            About
          </Link>
          <Link
            to="/newsletter"
            className={`${
              location.pathname === "/newsletter"
                ? "text-blue-600 font-semibold"
                : "text-gray-600 dark:text-gray-300"
            } hover:text-blue-600`}
          >
            Newsletter
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
            <Moon className="absolute right-1 top-1 w-4 h-4 text-gray-800 dark:text-yellow-300 pointer-events-none" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-8 px-6 shadow-md absolute w-full z-50">
          <div className="flex flex-col items-center justify-center space-y-6">
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              } hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              to="/projects"
              className={`${
                location.pathname === "/projects"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              } hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>

            <Link
              to="/about"
              className={`${
                location.pathname === "/about"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              } hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            <Link
              to="/newsletter"
              className={`${
                location.pathname === "/newsletter"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              } hover:text-blue-600`}
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletter
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => {
                setDarkMode(!darkMode)
                setIsMenuOpen(false)
              }}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                darkMode ? "bg-gray-700" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                  darkMode ? "translate-x-6" : ""
                }`}
              />
              <Moon className="absolute right-1 top-1 w-4 h-4 text-gray-800 dark:text-yellow-300 pointer-events-none" />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
