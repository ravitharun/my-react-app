import { useState } from "react";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Footer from "./Footer";

function Services() {
  const [show, setShow] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const dataset = [
    {
      id: "0",
      tittle: "WEB DEVELOPMENT",
      text: [
        "Front-end Development",
        "Back-end Development",
        "Database Connectivity",
        "API Integration",
      ],
    },
    {
      id: "1",
      tittle: "UI/UX DESIGNER",
      text: [
        "Fully Functional UX/UI.",
        "Mobile and Web User Interface Design.",
        "Concept Presentation.",
        "Market Research & Analysis.",
      ],
    },
    {
      id: "2",
      tittle: "Front-End Development",
      text: [
        "Fully Functional UI.",
        "Mobile and Web User Interface Design.",
        "RESPONSIVE DESIGNING",
      ],
    },
  ];

  const handleClose = () => setShow(false);

  const handleShow = (service) => {
    setActiveService(service);
    setShow(true);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <center>
          <h4>
            <b>Services</b>
          </h4>
          <p className="text-secondary">What I offer</p>
        </center>
        <div className="row mt-4">
          {dataset.map((data, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex justify-content-center">
              <Button
                className="w-100"
                onClick={() => handleShow(data)}
                style={{ height: "100px" }}
              >
                {data.tittle}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal to display the active service */}
      {activeService && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{activeService.tittle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <nav>
              <ol>
                {activeService.text.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </nav>
          </Modal.Body>
        </Modal>
      )}
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}

export default Services;
