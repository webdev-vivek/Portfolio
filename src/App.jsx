import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Connect from "./components/Connect";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="connect">
        <Connect />
      </div>

      <Footer />

    </>
  );
};

export default App;
