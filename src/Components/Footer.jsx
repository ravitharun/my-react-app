
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; // Import more social icons if needed

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContainer}>
        {/* About Me Section */}
        <div style={footerSection}>
          <h4>About Me</h4>
          <p>
            I am a passionate web developer and UI/UX designer, creating engaging and dynamic web experiences.
            Feel free to reach out through my social media links or via email.
          </p>
        </div>

        {/* Social Media Links */}
        <div style={footerSection}>
          <h4>Follow Me</h4>
          <div style={socialIcons}>
            <a href="https://www.linkedin.com/in/ravitharun07/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={iconStyle} />
            </a>
            <a href="https://github.com/ravitharun/project" target="_blank" rel="noopener noreferrer">
              <FaGithub style={iconStyle} />
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
              <FaTwitter style={iconStyle} />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={iconStyle} />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div style={footerSection}>
          <h4>Contact Info</h4>
          <a href="mailto:tr565003@gmail.com">tr565003@gmail.com</a>
          <p>Phone: +917396994383</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={footerBottom}>
        <p>&copy; {new Date().getFullYear()} RAVI THARUN . Designed & Developed by <b>RAVI THARUN </b></p>
      </div>
    </footer>
  );
}

// Inline Styles
const footerStyle = {
  backgroundColor: "#0d0d0d",
  color: "#fff",
  padding: "40px 0",
  marginTop: "50px",
};

const footerContainer = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  textAlign: "left",
};

const footerSection = {
//  margin: "",
  flex: "1",
  minWidth: "250px",
  margin: "15px 15px",
};


const socialIcons = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
  width: "180px",
};

const iconStyle = {
  fontSize: "24px",
  color: "#fff",
  transition: "color 0.3s",
};

const footerBottom = {
  textAlign: "center",
  borderTop: "1px solid #444",
  paddingTop: "20px",
  marginTop: "20px",
  fontSize: "14px",
};

export default Footer;
