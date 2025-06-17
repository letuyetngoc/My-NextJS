import React from "react";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Tech from "./components/Tech";
// import Works from "./components/Works";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Contact from "./components/Contact";
// import StartCanvas from "./components/StartCanvas";
import "./index.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";

export default function Portfolio() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      {About}

      {Experience}
      {/* <Works /> */}
      {Tech}
      {/* <Contact /> */}
      {/* <Tech />
      
      <Contact />
      <StartCanvas /> */}
    </div>
  );
}
