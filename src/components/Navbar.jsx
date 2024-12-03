import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">Portfolio</h1>

        {/* Links */}
        <ul className="flex space-x-8 items-center text-lg font-medium">
          <li>
            <button
              onClick={scrollToTop}
              className="hover:text-yellow-400 transition"
            >
              Home
            </button>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact Page
            </Link>
          </li>

          {/* Social Media Icons */}
          <li>
            <a
              href="https://github.com/Nirvignya09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-all"
            >
              <FaGithub size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-110 transform transition"
              style={{ color: "#0077b5" }}
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:scale-110 transform transition"
              style={{ color: "#e1306c" }}
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
