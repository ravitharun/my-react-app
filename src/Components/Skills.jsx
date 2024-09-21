import { FaGraduationCap } from "react-icons/fa";
import Navbar from "./Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function Skills() {
  // Grouping skills into categories
  const frontendSkills = [
    { id: "0", skill: "Reactjs", level: "50%", color: "#007bff" },
    { id: "1", skill: "UI/UX", level: "70%", color: "#28a745" },
    { id: "2", skill: "Frontend Technologies", level: "80%", color: "#ffc107" },
    { id: "3", skill: "Git And Github", level: "60%", color: "#6f42c1" },
  ];

  const backendSkills = [
    { id: "0", skill: "Nodejs", level: "50%", color: "#dc3545" },
    { id: "1", skill: "Expressjs", level: "60%", color: "#17a2b8" },
  ];

  const databaseSkills = [
    { id: "0", skill: "MySQL", level: "60%", color: "#343a40" },
    { id: "1", skill: "MongoDB", level: "60%", color: "#20c997" },
  ];

  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, #e0f7fa, #ffffff)",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div className="container text-center mt-5">
          <h3 className="display-6">
            <b>Skills</b>
          </h3>
          <p className="text-secondary">My technical level</p>

          <div className="container">
            {/* Frontend Skills Dropdown */}
            <div className="mb-3">
              <button
                className="btn btn-primary w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#frontendSkills"
                aria-expanded="false"
                aria-controls="frontendSkills"
              >
                Frontend Technologies
              </button>
              <div className="collapse" id="frontendSkills">
                {frontendSkills.map((data, index) => (
                  <div key={index} className="my-3">
                    <div className="d-flex justify-content-between">
                      <span>{data.skill}</span>
                      <span>{data.level}</span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow={parseInt(data.level)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar"
                        style={{
                          width: `${data.level}`,
                          backgroundColor: `${data.color}`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills Dropdown */}
            <div className="mb-3">
              <button
                className="btn btn-success w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#backendSkills"
                aria-expanded="false"
                aria-controls="backendSkills"
              >
                Backend Technologies
              </button>
              <div className="collapse" id="backendSkills">
                {backendSkills.map((data, index) => (
                  <div key={index} className="my-3">
                    <div className="d-flex justify-content-between">
                      <span>{data.skill}</span>
                      <span>{data.level}</span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow={parseInt(data.level)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar"
                        style={{
                          width: `${data.level}`,
                          backgroundColor: `${data.color}`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database Skills Dropdown */}
            <div className="mb-3">
              <button
                className="btn btn-info w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#databaseSkills"
                aria-expanded="false"
                aria-controls="databaseSkills"
              >
                Database Technologies
              </button>
              <div className="collapse" id="databaseSkills">
                {databaseSkills.map((data, index) => (
                  <div key={index} className="my-3">
                    <div className="d-flex justify-content-between">
                      <span>{data.skill}</span>
                      <span>{data.level}</span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow={parseInt(data.level)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar"
                        style={{
                          width: `${data.level}`,
                          backgroundColor: `${data.color}`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Qualification Section */}
        <div className="container text-center mt-5">
          <h3 className="display-6">
            <b>Qualification</b>
          </h3>
          <p className="text-secondary">My personal journey</p>
          <nav className="navbar navbar-expand-lg text-primary mx-auto">
            <div className="container-fluid">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/portfolio/education" className="nav-link active">
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio/work" className="nav-link">
                    Work
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <VerticalTimeline lineColor="gray" className="mt-4">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2022 - 2026"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaGraduationCap size={24} />}
            >
              <h4 className="vertical-timeline-element-title text-secondary">
                B.Tech C.S.E.
              </h4>
              <p>
                Dayananda Sagar University{" "}
                <span className="text-secondary">(Bangalore)</span>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2020 - 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaGraduationCap size={24} />}
            >
              <h5 className="text-secondary">Intermediate</h5>
              <h4 className="vertical-timeline-element-title">
                Sri Chaitanya Junior College
              </h4>
              <p className="text-secondary">Tirupati, Andhra Pradesh</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2019 - 2020"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaGraduationCap size={24} />}
            >
              <h4 className="vertical-timeline-element-title">
                Sri Chaitanya School
              </h4>
              <p className="text-secondary">Kadapa, Andhra Pradesh</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        <Footer className="mt-5" />
      </div>
    </>
  );
}

export default Skills;
