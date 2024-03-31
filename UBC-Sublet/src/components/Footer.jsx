import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.linkedin.com/in/parth-patel-433703266/" className="developer-link">
                Parth Patel
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rythem-shah-423114266/" className="developer-link">
                Rythem Shah
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>contact.ubcsublet@gmail.com</p>
          <p>+1 (236) 995-2972</p>
          <p>+1 (604) 773-6394</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 UBC Sublet. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;