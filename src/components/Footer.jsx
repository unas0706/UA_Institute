import React from "react";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>UA Institue IELTS</h3>
            <p>
              Your trusted partner for IELTS preparation. We help students
              achieve their dream scores with expert guidance and proven
              methodologies.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span>📞</span>
                <span>+91 95022 64332</span>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <span>sk.unas123@gmail.com</span>
              </div>
              <div className="contact-item">
                <span>📍</span>
                <span>Nimmatotha, Narasaraopet, Palnadu, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>IELTS Programs</h4>
            <ul className="footer-links">
              <li>
                <a href="#courses">IELTS Academic</a>
              </li>
              <li>
                <a href="#courses">IELTS General</a>
              </li>
              <li>
                <a href="#courses">Crash Course</a>
              </li>
              <li>
                <a href="#courses">Speaking Module</a>
              </li>
              <li>
                <a href="#courses">Writing Module</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Study Materials</a>
              </li>
              <li>
                <a href="#">Practice Tests</a>
              </li>
              <li>
                <a href="#">Band Score Calculator</a>
              </li>
              <li>
                <a href="#">IELTS Tips</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; UA Institue IELTS. All rights reserved. | Designed for IELTS
            Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
