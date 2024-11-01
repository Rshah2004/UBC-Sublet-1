import "./styles/Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/about");
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li>
              <div onClick={() => handleChange()}>About Us</div>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/parth-patel-433703266/"
                className="developer-link"
              >
                Parth Patel
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rythem-shah-423114266/"
                className="developer-link"
              >
                Rythem Shah
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.linkedin.com/in/shikha-rajesh-a22b5020a/"
                className="developer-link"
              >
                Shikha Rajesh
              </a>
            </li> */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>contact.ubcsublet@gmail.com</p>
          <p>+1 (236) 995-2972</p>
          {/* <p>+1 (604) 773-6394</p> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 UBC Sublet. All Rights Reserved. (Not affiliated with UBC)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
