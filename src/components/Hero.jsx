import React from "react";
import profile from "../assets/my1.png"; // add your image here

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#1e1b4b]  text-white relative overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50  bg-transparent backdrop-blur-md">
        <div className="flex justify-between items-center px-8 py-6">
          <h1 className="text-xl font-semibold text-purple-400">Portfolio</h1>

          <ul className="hidden md:flex gap-8 text-gray-300">
            <li>
              <a href="#home" className="hover:text-purple-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-purple-400">
                Experience
              </a>
            </li>
            <li>
              <a href="#connect" className="hover:text-purple-400">
                Connect
              </a>
            </li>
          </ul>
        </div>
      </nav> 

      {/* Hero Section */}
      <div className="container mx-auto px-15 flex flex-col md:flex-row items-center justify-between mt-40">
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="text-gray-400 mb-2">This is</p>

          <h2 className="text-5xl font-bold mb-3">Vivek Kumar</h2>

          <h3 className="text-2xl font-semibold text-purple-400 mb-6">
            Full Stack Developer
          </h3>

          <p className="text-gray-400 mb-8">
            I build highly interactive, modern, and responsive web applications.
            Passionate about learning new technologies and creating sleek user
            experiences.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => window.open("/Resume.pdf", "_blank")}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500  hover:scale-105 transition duration-300"
            >
              View Resume
            </button>

            <button className="px-6 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition duration-300">
              <a href="#connect">
               Contact Me
              </a>
              
            </button>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="mt-12 md:mt-0 relative">
          <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-40"></div>

          <img
            src={profile}
            alt="profile"
            className="relative w-72 h-72 object-cover rounded-full border-4 border-purple-500 shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute w-2 h-2 bg-purple-500 rounded-full top-20 left-20 animate-pulse"></div>
      <div className="absolute w-1 h-1 bg-pink-400 rounded-full bottom-32 right-40 animate-ping"></div>
      <div className="absolute w-2 h-2 bg-indigo-400 rounded-full top-40 right-20 animate-bounce"></div>
    </div>
  );
};

export default Hero;
