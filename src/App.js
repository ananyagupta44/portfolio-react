import React from "react";
import { BrowserRouter as Router, Routes, Route,  useLocation } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Avatar from "./avatar/Avatar.js";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/avatar.css";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <Router>
      {/* Nav handles links internally, so no need for extra <Link> here */}
      <Nav />
      <Background />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <PlayerStats />
    </Router>
  );
};

export default App;

