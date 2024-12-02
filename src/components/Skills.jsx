import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaJava, FaPython, FaFigma } from "react-icons/fa"; // Importing react-icons

function Skills() {
  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-20 px-6 lg:px-12">
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold text-yellow-400 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technologies
      </motion.h2>

      {/* Skills Icons */}
      <div className="container mx-auto flex flex-wrap justify-center gap-12">
        {/* HTML */}
        <motion.div
          className="text-center text-white hover:text-yellow-400 transition relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 mb-6 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <FaHtml5 size={40} />
          </div>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 text-lg">
            HTML
          </p>
        </motion.div>

        {/* CSS */}
        <motion.div
          className="text-center text-white hover:text-yellow-400 transition relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 mb-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <FaCss3Alt size={40} />
          </div>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 text-lg">
            CSS
          </p>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          className="text-center text-white hover:text-yellow-400 transition relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-20 h-20 mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <FaJs size={40} />
          </div>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 text-lg">
            JavaScript
          </p>
        </motion.div>

        {/* React */}
        <motion.div
          className="text-center text-white hover:text-yellow-400 transition relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="w-20 h-20 mb-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <FaReact size={40} />
          </div>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 text-lg">
            React
          </p>
        </motion.div>

        {/* PHP */}
        <motion.div
          className="text-center text-white hover:text-yellow-400 transition relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <div className="w-20 h-20 mb-6 bg-gradient-to-r from-gray-600 to-gray-900 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <FaPhp size={40} />
          </div>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 text-lg">
            PHP
          </p>
        </motion.div>

        {/* Java */}
        <motion.div
          className="text-center text-white hover:text-yellow-400 transition relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6 }}
        >
          <div className="w-20 h-20 mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <FaJava size={40} />
          </div>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 text-lg">
            Java
          </p>
        </motion.div>

        {/* Python */}
        <motion.div
          className="text-center text-white hover:text-yellow-400 transition relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8 }}
        >
          <div className="w-20 h-20 mb-6 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <FaPython size={40} />
          </div>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 text-lg">
            Python
          </p>
        </motion.div>

        {/* Figma */}
        <motion.div
          className="text-center text-white hover:text-yellow-400 transition relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="w-20 h-20 mb-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
            <FaFigma size={40} />
          </div>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 text-lg">
            Figma
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
