// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Projects from "./Components/Projects.jsx";
import Services from "./Components/Services.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Work from "./Components/Work.jsx";
// import Achievements from "./Components/Achievements.jsx";
import WorkExperience from "./Components/WorkExperience.jsx";
import Eduction from "./Components/Eduction.jsx";
import Contact from "./Components/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio/about" element={<About />} />
      <Route path="/portfolio/skills" element={<Skills />} />
      <Route path="/portfolio/work" element={<Work />} />
      <Route path="/portfolio/projects" element={<Projects />} />
      <Route path="/portfolio/education" element={<Eduction />} />
      <Route path="/portfolio/services" element={<Services />} />
      <Route path="/portfolio/contact" element={<Contact />} />
      <Route path="/portfolio/WorkExperience" element={<WorkExperience />} />
    </Routes>
  </Router>
);
