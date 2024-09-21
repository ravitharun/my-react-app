import { useState } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  // Define your items array with dummy data (replace with your actual data)
  const projecttype_01 = "frontend Projects ";
  const projecttype_02 = "ui ux design";
  const projecttype_03 = "Full stack projects";
  const items = [
    {
      id: 1,
      title: "Weather App",
      subtitle: "Displays real-time weather data",
      img: "/project1pics.jpg",
      description:
        "A weather application built with React that allows users to check real-time weather details of a city. The app fetches data from the OpenWeather API and displays information such as longitude, latitude, sunrise/sunset times, wind speed, weather description, temperature, humidity, and country code.",
      features: [
        "Responsive design",
        "Smooth scrolling",
        "Dynamic project display",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      live_link: "https://weather-react-5c13e7.netlify.app/",
    },
    {
      id: 2,
      title: "github repo website",
      subtitle: " A Github repo finder",
      description:
        "A github-repo finder application built with React that allows users to check real-time displaying  github-repo finder details ",
      img: "/public/project2pics.png",
      technologies: ["React"],
      features: ["Responsive design", "Dynamic project display"],
      live_link: "https://wonderful-pixie-06f7cf.netlify.app/",
    },
    { id: 3, title: "Project Three", subtitle: "Subtitle Three" },
    { id: 4, title: "Project Four", subtitle: "Subtitle Four" },
    { id: 5, title: "Project Five", subtitle: "Subtitle Five" },
    { id: 6, title: "Project Five", subtitle: "Subtitle Six" },
  ];

  return (
    <>
      <body style={{ backgroundColor: "aliceblue", minHeight: "100vh" }}>
        <Navbar />
        <h3 className="text-primary mt-4 text-center">My Projects</h3>
        <h4 className="mt-4 text-success p-2 container">
          {projecttype_01.toUpperCase()}
        </h4>
        <div className="container mt-4">
          <div className="row">
            {items.map((item) => (
              <div
                className="col-md-4 mb-4"
                style={{ cursor: "pointer", boxShadow: "-6px green" }}
                key={item.id}
              >
                <motion.div
                  style={{
                    border: "1px solid #4A148C",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  layoutId={item.id.toString()}
                  onClick={() => setSelectedId(item.id)}
                  className="text-secondary"
                >
                  <div className="card-body cursor-pointer">
                    <motion.h5 className="card-subtitle mb-2 text-muted">
                      {item.subtitle}
                    </motion.h5>
                    <motion.h2 className="card-title">
                      <span>{item.title.toUpperCase()}</span>
                    </motion.h2>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={selectedId.toString()}
                className="card mt-4"
              >
                {items
                  .filter((item) => item.id === selectedId)
                  .map((item) => (
                    <div key={item.id} className="card-body  ">
                      <motion.h5 className="card-subtitle mb-2 text-muted">
                        {item.subtitle}
                      </motion.h5>
                      <motion.h2 className="card-title">{item.title}</motion.h2>
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{ width: "100%" }}
                      />
                      <br />
                      <p className="text-primary">
                        <strong>Description: </strong> {item.description}
                      </p>
                      <nav>
                        <ol>
                          <strong>Features:</strong>
                          {item.features.map((feature, index) => (
                            <li key={index}>{feature} </li>
                          ))}
                        </ol>
                      </nav>
                      <nav>
                        <ol>
                          <strong>Technologies:</strong>
                          {item.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                          ))}
                        </ol>
                      </nav>
                      <nav>
                        <ul>
                          <li style={{ listStyle: "none" }}>
                            <a
                              href={item.live_link}
                              style={{ textDecoration: "none" }}
                              className="btn btn-outline-success"
                            >
                              Click here to see live preview{" "}
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <motion.button
                        className="btn btn-outline-success mt-3"
                        onClick={() => setSelectedId(null)}
                      >
                        Close
                      </motion.button>
                    </div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* <br /> */}
        <div>
          <h4 className="mt-4 text-success p-2 container">
            {projecttype_02.toUpperCase()}{" "}
          </h4>
          <center>
            <h5 className="text-danger">updating soon</h5>
          </center>
        </div>
        <div>
          <h4 className="mt-4 text-success p-2 container">
            {projecttype_03.toUpperCase()}{" "}
          </h4>
          <center>
            <h5 className="text-danger">updating soon</h5>
          </center>
        </div>

        <Footer></Footer>
      </body>
    </>
  );
}
