import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { BsDownload } from "react-icons/bs";
import Footer from "./Footer";

function About() {
  return (
    <>
      {/* Using a div instead of body for styling */}
      <div style={{ backgroundColor: "aliceblue", minHeight: "100vh" }}>
        <Navbar />
        <div className="container mt-5">
          <center>
            <h3 className="text-primary">About Me</h3>
          </center>
          <div className="intro mt-4">
            <center>
              <p className="text-secondary">My introduction</p>
            </center>
            <p
              className="text-center text-md-start mx-auto text-secondary"
              style={{
                maxWidth: "600px",
                color: "purple",
                // fontFamily: "cursive",
                fontFamily:"monospace"
              }}
            >
              Im a third-year student currently pursuing my bachelors of technology in the CSE domain. Im a tech enthusiast and an avid learner. Im searching for <b className="text-danger"> new opportunities</b> if you believe I may be of assistance, feel free to
              <Link
                to="/portfolio/Contact"
                className="btn btn-outline-success mt-3 d-block"
                title="Contact me"
              >
                contact me
              </Link>
            </p>
          </div>

          <div className="company mt-5">
            <div
              className="row text-center"
              style={{
                cursor: "pointer",
              }}
            >
              <div className="col-md-4">
                <h5>
                  <b>01</b>
                </h5>
                <p>Months experience</p>
              </div>
              <div className="col-md-4">
                <h5>
                  <b>02+</b>
                </h5>
                <p>Completed certifications</p>
              </div>
              <div className="col-md-4">
                <h5>
                  <b>02+</b>
                </h5>
                <p>Companies worked</p>
              </div>
            </div>
          </div>

          <center>
            <button
              className="btn btn-outline-primary mt-4"
              title="Download My CV"
            >
              Download CV <BsDownload style={{ marginTop: "-5px" }} />
            </button>
          </center>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
