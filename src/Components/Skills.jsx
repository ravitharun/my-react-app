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
import TechSkills from "./TechSkills";

function Skills() {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, #e0f7fa, #ffffff)",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <TechSkills></TechSkills>

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
                  <Link to="" className="nav-link active">
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
