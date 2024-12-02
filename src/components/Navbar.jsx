import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Importing social media icons
import { Link } from "react-scroll"; // Importing the Link component from react-scroll

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-6 px-8 fixed w-full z-50 top-0 shadow-lg">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-white text-3xl font-bold">
          <a href="#">Portfolio</a>
        </div>

        {/* Navbar Links */}
        <div className="flex space-x-8 text-white">
          <Link
            to="home" // ID of the section to scroll to
            smooth={true} 
            duration={500}
            className="hover:text-yellow-400 transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about" // ID of the section to scroll to
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills" // ID of the section to scroll to
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 transition-all cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects" // ID of the section to scroll to
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 transition-all cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact" // ID of the section to scroll to
            smooth={true}
            duration={500}
            className="hover:text-yellow-400 transition-all cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-white">
          <a
            href="https://www.linkedin.com/in/nirvignya-ageer-694a65317/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-all"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Nirvignya09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-all"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-all"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
