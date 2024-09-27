import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function Home() {
  const socialIcons = {
    display: "flex",
    flexDirection: "column", // Change direction to column for vertical alignment
    alignItems: "center", // Align items in the center
    marginTop: "10px",
    gap: "20px", // Add gap between icons
  };


  const iconStyle = {
    background: "blue",
    fontSize: "24px",
    color: "#fff",
    transition: "color 0.3s",
  };

  return (
    <>
      <Navbar />
      <div
        className="hero-section"
        style={{
          background: "linear-gradient(to right, #e0f7fa, #ffffff)",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
          padding: "20px",
        }}
      >
        <div
          className="hero-content"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "30px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {/* Text Content */}
          <div style={socialIcons}>
            <a
              href="https://www.linkedin.com/in/ravitharun07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={iconStyle} className="shadow" />
            </a>
            <a
              href="https://github.com/ravitharun/project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={iconStyle} className="shadow" />
            </a>
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter style={iconStyle} className="shadow" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={iconStyle} className="shadow" />
            </a>
          </div>
          <br />
          <div className="text-content" style={{ flex: 1 }}>
            <h1 className="hero-title">Welcome to My Portfolio</h1>
            <p>
              <h2>Hello! 👋 Im Ravi Tharun,</h2>{" "}
              <TypeAnimation
                sequence={[
                  "I am a UI/UX designer.",
                  1000,
                  "I am a Full-stack Web Developer.",
                  2000,
                  "I am a UI Developer.",
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "2em", display: "inline-block" }}
              />
            </p>
            <Link to="Users/Dell/Downloads/resume.pdf">
              <button className="btn btn-primary">View My Resume</button>
            </Link>
          </div>
          <br />
          <br />
          <br />
          <br />

          {/* Image on the right */}
          <div
            className="hero-image h-100"
            style={{ flex: 1, textAlign: "center" }}
          >
            <img
              src="/Myimage.jpg"
              className="shadow"
              alt="Portfolio Banner"
              style={{
                borderRadius: "100%",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                maxWidth: "100%",
                width: "70%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}

      <style>{`
        .hero-section {
          background-image: url('https://source.unsplash.com/1600x900/?technology,web');
          background-size: cover;
          background-position: center;
          color: black;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
        }

        .hero-content h2 {
          font-size: 1.5rem;
        }

        .btn {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 1.2rem;
          background-color: #007bff;
          border: none;
          color: white;
          transition: background-color 0.3s ease;
        }

        .btn:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-content h2 {
            font-size: 1.2rem;
          }

          .btn {
            font-size: 1rem;
          }

          .hero-image img {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.5rem;
          }

          .hero-content h2 {
            font-size: 1rem;
          }

          .btn {
            font-size: 0.9rem;
          }

          .hero-image img {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
