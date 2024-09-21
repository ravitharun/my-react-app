import { FaGraduationCap } from "react-icons/fa";
import Navbar from "./Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
function Eduction() {
  // const style={tex}
  return (
    <>
      <Navbar />
      <div className="text-center mt-4">
        <h3>
          <b>Skills</b>
        </h3>
        <p className="text-secondary">My technical level</p>
      </div>

      <div className="text-center mt-4">
        <h3 className="Qualifications">
          <b>Qualification</b>
        </h3>
        <p className="text-secondary">My personal journey</p>
        <br />
        <nav className="navbar navbar-expand-lg text-outline-primary mx-auto">
          <div className="container-fluid">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <Link to="/portfolio/education">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    style={{ textDecoration: "none" }}
                  >
                    Education
                  </a>
                </li>
              </Link>
              <Link to="/portfolio/work">
                <li className="nav-item">
                  <a className="nav-link">Work</a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
        <br />
        <br />
        <VerticalTimeline lineColor="gray">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2026"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap size={24} />}
          >
            <h3 className="vertical-timeline-element-title text-primary">
              B.Tech C.S.E.
            </h3>
            <p>
              Dayananda Sagar University{" "}
              <span className="text-secondary">(Bangalore)</span>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap size={24} />}
          >
            <h5 className="text-secondary">Intermediate</h5>
            <h3 className="vertical-timeline-element-title text-primary">
              Sri Chaitanya Junior College
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tirupati <span className="text-secondary">(Andhra Pradesh)</span>
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap size={24} />}
          >
            <h3 className="vertical-timeline-element-title text-primary">
              Sri Chaitanya School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kadapa <span className="text-secondary">(Andhra Pradesh)</span>
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Eduction;
