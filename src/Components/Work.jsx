// import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

import Navbar from "./Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
function Work() {
  const style={textDecoration:"none"}
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
                  <a className="nav-link active" aria-current="page">
                    Education
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <Link to="/portfolio/work">
                  <a className="nav-link" href="/portfolio/work">
                    Work
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <br />
        <VerticalTimeline lineColor="gray">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July-10-2024 - August-10-2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase size={24} />}
          >
            <h3 className="vertical-timeline-element-title text-secondary">
             
              <a href="https://www.linkedin.com/company/bharat-intern/posts/?feedView=all" style={style}> Bharat Intern</a>
            </h3>
            <p className="text-danger">
              <b> WEB DEVELOPMENT</b>
              {/* <span className="text-secondary">(Bangalore)</span> */}
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July-20-2024 - August -29- 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase size={24} />}
          >
            <h5 className="text-secondary"><a href="https://www.linkedin.com/company/codsoft/posts/?feedView=all" style={style}>CodeSoft</a></h5>
            <p className="vertical-timeline-element-title  text-danger">
              <b> UI/UX DESIGN </b>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August-02-2024 - Sep-02-2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase size={24} />}
          >
            <h3 className="vertical-timeline-element-title"><a href="/https://www.linkedin.com/company/encryptixofficial/posts/?feedView=all" className="" style={style}>Encryptix</a></h3>
            <p className="vertical-timeline-element-subtitle text-danger">
              {" "}
              <b> UI/UX DESIGN </b>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August-15-2024 - September-15-2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase size={24} />}
          >
            <h3 className="vertical-timeline-element-title"><a href="https://motioncut.shop/internships/" className="" style={style}>MotionCut</a></h3>
            <p className="vertical-timeline-element-subtitle text-danger">
              {" "}
              <b> UI/UX DESIGN </b>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Work;
