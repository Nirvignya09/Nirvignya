import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Google Clone",
      description: "A Google search page clone made with HTML, CSS, and JavaScript.",
      imageUrl: "/images/google.png", // Replace with your project image URLs
      link: "https://nirvignya09.github.io/google-clone/", // Replace with the link to the project
      tech: "HTML, CSS"
    },
    {
      title: "Netflix Clone",
      description: "A Netflix-like UI clone made using React and Tailwind CSS.",
      imageUrl: "/images/about.png", // Replace with your project image URLs
      link: "#", // Replace with the link to the project
      tech: "HTML, CSS, BOOTSTRAP"
    },
    {
      title: "Cafe Website",
      description: "A fully responsive Cafe website built with HTML, CSS, and Bootstrap.",
      imageUrl: "/images/cafe.png", // Replace with your project image URLs
      link: "https://nirvignya09.github.io/Localcafe/", // Replace with the link to the project
      tech: "HTML, CSS, Bootstrap"
    },
    {
      title: "Product Catalogue",
      description: "A Product Catalogue website with PHP as backend.",
      imageUrl: "/images/about.png", // Replace with your project image URLs
      link: "#", // Replace with the link to the project
      tech: "HTML, CSS, BOOTSTRAP, PHP"
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-20 px-6 lg:px-12">
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold text-yellow-400 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col sm:flex-row items-center sm:items-start bg-gradient-to-r ${index < 3 ? "from-gray-800 via-gray-700 to-black" : "from-gray-900 via-gray-800 to-black"} rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image */}
            <div className="w-full sm:w-1/2 h-48 sm:h-auto">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg"
              />
            </div>

            {/* Text */}
            <div className="p-6 sm:p-8 flex flex-col justify-between sm:w-1/2">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
              <div className="w-1/2"><a
                href={project.link}
                className="bg-yellow-300 text-gray-800 px-4 py-1 rounded-full hover:bg-yellow-500 transition-all w-25"
              >
                View Project
              </a></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
