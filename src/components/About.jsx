import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12 gap-8">
        {/* Left Side: Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/about.png" // Replace with your image URL
            alt="About Me"
            className=" shadow-lg w-3/4 lg:w-3/2 hover:scale-105 transition"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          className="text-white text-center lg:text-left lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg opacity-80 leading-relaxed">
            I’m <span className="text-yellow-400 font-bold">Nirvignya Ageer</span>, a dedicated Full-Stack Web Developer with a passion for creating dynamic and user-friendly websites. Skilled in HTML, CSS, JavaScript, PHP, and React.js, I focus on building responsive designs and seamless user experiences. My curiosity for modern web technologies drives me to craft solutions that merge functionality and creativity.
          </p>
          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
