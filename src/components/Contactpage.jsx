import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false); // Loading state to manage button state

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure the fields are filled out
    if (!name || !email || !phone) {
      alert("Please fill out all fields.");
      return;
    }

    // Log the data to ensure it's being captured
    console.log("Form Data:", { name, email, phone });

    // Set loading state to true to show the user that the form is being submitted
    setLoading(true);

    // Template parameters
    const templateParams = {
      user_name: name, // Matches the {{user_name}} in your EmailJS template
      user_email: email, // Matches the {{user_email}} in your EmailJS template
      user_phone: phone, // Matches the {{user_phone}} in your EmailJS template
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_eqh3zep",  // Your EmailJS service ID
        "template_yx83cnc",  // Your template ID
        templateParams,      // Template parameters with the filled values
        "fOTUerzLvS2IH25YY" // Your Public API Key
      )
      .then(
        (response) => {
          console.log("Email successfully sent", response);
          alert("Your message has been sent successfully!");

          // Reset form fields after submission
          setName("");
          setEmail("");
          setPhone("");

          // Set loading state back to false
          setLoading(false);
        },
        (error) => {
          console.error("Failed to send email", error);
          alert("Oops! Something went wrong, please try again.");

          // Set loading state back to false even if email sending fails
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 text-white">
      {/* Navbar */}
      <nav className="bg-purple-900 p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">Contact Me</h1>
        <div>
          <Link
            to="/"
            className="text-lg font-semibold bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-500 transition-all"
          >
            Home
          </Link>
        </div>
      </nav>

      {/* Form Section */}
      <div className="flex items-center justify-center h-[calc(100vh-4rem)] px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black rounded-lg shadow-lg w-full max-w-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">
            Get in Touch
          </h2>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 text-white font-bold py-3 rounded-lg hover:bg-purple-600 transition-all"
            disabled={loading} // Disable the button while submitting
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
