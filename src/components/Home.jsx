import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";

function Home() {
  return (
    <section id="home" className="flex flex-col justify-center items-center text-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-extrabold mb-4 animate-fadeIn">Hi, I'm Nirvignya Ageer</h1>
      <p className="text-lg font-light mb-8 animate-slideInUp">A Passionate Web Developer and UI/UX Designer</p>
      <a href="#about" className="text-2xl flex items-center gap-2 hover:text-gray-300 transition duration-300">
        Learn More <BsArrowDownCircle className="animate-bounce" />
      </a>
    </section>
  );
}

export default Home;
