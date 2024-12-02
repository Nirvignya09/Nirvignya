import React from "react";
import Navbar from "./components/Navbar";  // Importing Navbar component
import Hero from "./components/Hero";  // Importing Hero component
import About from "./components/About";  // Importing About component
import Skills from "./components/Skills";  // Importing Skills component
import Projects from "./components/Projects";  // Importing Projects component
import Contact from "./components/Contact";  // Importing Contact component
import Footer from "./components/Footer";  // Importing Footer component
// import Gana from "./assets/gana.jpg";
function App() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="h-screen bg-blue-800">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="h-screen bg-green-800">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="hscreen bg-red-800">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen bg-purple-800">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="hscreen bg-yellow-800">
        <Contact />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
