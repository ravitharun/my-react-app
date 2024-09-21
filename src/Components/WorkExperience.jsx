import Footer from "./Footer";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function WorkExperience() {
  const intership = [
    {
      id: 0,
      intershipcompletedcertification_linkedin_post:
        "https://www.linkedin.com/posts/ravitharun07_webdevelopment-html-css-activity-7232264790839062528-bWKW?utm_source=share&utm_medium=member_desktop",
      InternshipCompany: "Bharath Intern",
      IntershipRole: "Web Development",
      InternshipDate: "July-10-2024 - August-10-2024",
      InternshipLocation: "Bhopal, Madhya Pradesh, India",
      Githurepo: "https://github.com/ravitharun/ravitharunkumar",
      IntershiptasksGiven: 3,
      Intershiptasks: 2,
      tasks: [
        { task: "WEATHER WEBSITE USING HTML, CSS, JAVASCRIPT" },
        { task: "Netflix CLONE WEBSITE USING HTML, CSS, JAVASCRIPT" },
      ],
    },
    {
      id: 1,
      intershipcompletedcertification_linkedin_post:
        "https://www.linkedin.com/posts/ravitharun07_uiuxdesign-internship-codesoft-activity-7233017947047215106-TJT7?utm_source=share&utm_medium=member_desktop",
      InternshipCompany: "Code Soft",
      IntershipRole: "UI/UX Design",
      InternshipDate: "July-10-2024 - August-10-2024",
      InternshipLocation: "Bhopal, Madhya Pradesh, India",
      Githurepo: "https://github.com/ravitharun/CODSOFT",
      IntershiptasksGiven: 3,
      Intershiptasks: 3,
      tasks: [
        { task: "Email Template Design" },
        { task: "Restaurant Menu Design" },
        { task: "Sign-in and Sign-up Flow Design" },
      ],
    },
    {
      id: "2",
      intershipcompletedcertification_linkedin_post:"https://www.linkedin.com/posts/ravitharun07_newbeginnings-uiuxdesign-encryptix-activity-7237052584761462784-q--I?utm_source=share&utm_medium=member_desktop",
      InternshipCompany: "Encryptix",
      IntershipRole: "UI/UX Designer",
      InternshipDate: "August-02-2024 - September-02-2024",
      InternshipLocation: "New Delhi, India.",
      Githurepo: "https://github.com/ravitharun/Encryptix",
      IntershiptasksGiven: 3,
      Intershiptasks: 3,
      tasks: [
        { task: "Email Template Design" },
        { task: "Restaurant Menu Design" },
        { task: "Sign-in and Sign-up Flow Design" },
      ],
    },
    {
      id: "3",
      intershipcompletedcertification_linkedin_post:
        "https://www.linkedin.com/posts/ravitharun07_internship-frontenddevelopment-webdevelopment-activity-7241997565162913792-HT7p?utm_source=share&utm_medium=member_desktop",
      InternshipCompany: "MotionCut ",
      IntershipRole: "UI/UX Design",
      InternshipDate: "August-15-2024 - September-15-2024",
      InternshipLocation: "Mahanagar Lucknow",
      Githurepo: "https://github.com/ravitharun/MotionCut",
      IntershiptasksGiven: 3,
      Intershiptasks: 3,
      tasks: [
        { task: "Image Slider" },
        { task: "Animated Login Form" },
        { task: "Search Filter" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <center>
          <h3 className="text-primary mb-4">Internship Experience</h3>
        </center>
        <div className="row">
          {intership.map((data, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p className="card-title text-secondary ">
                    Company Name:{" "}
                    <b className="text-secondary">{data.InternshipCompany}</b>
                  </p>
                  <p>
                    {" "}
                    Role :{" "}
                    <b className="text-info">
                      {data.IntershipRole.toUpperCase()}
                    </b>
                  </p>
                  <p className="text-success">
                    {" "}
                    <CiCalendarDate size={20} /> {data.InternshipDate}
                  </p>
                  <p className="text-muted">
                    <CiLocationOn size={20} /> {data.InternshipLocation}
                  </p>
                  <h5>
                    Total Tasks:
                    <i className="text-danger">{data.IntershiptasksGiven}</i>
                  </h5>
                  <h5>
                    Completed Tasks:
                    <b className="text-danger">{data.Intershiptasks}</b>
                  </h5>

                  <div className="tasks-list mt-3 container">
                    <ol className="list-group list-group-flush container">
                      {data.tasks.map((taskData, taskIndex) => (
                        <li key={taskIndex} className="container">
                          {taskData.task}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <a
                    href={data.Githurepo}
                    className="btn btn-outline-success mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub Repository
                  </a>
                  <br />

                  <a
                    href={data.intershipcompletedcertification_linkedin_post}
                    className="btn btn-outline-secondary mt-2 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View LinkedIn Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
   
      <Footer />
    </>
  );
}

export default WorkExperience;
