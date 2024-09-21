// import React from 'react'
import { Link } from "react-router-dom";
// Import CSS if needed (currently not used)

function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg bg-light-subtle sticky-top">
      <div className="container-fluid">
        <Link to="/">
          {/* <b className="navbar-brand text-danger " style={{fontFamily:"monospace"}}>RaviTharun</b> */}
          <h1 className="navbar-brand text-danger ">
            RaviTharun
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/portfolio/about"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/portfolio/skills"
                aria-current="page"
              >
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/portfolio/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio/WorkExperience">
                Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
