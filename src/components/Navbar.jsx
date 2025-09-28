import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="#home" className="logo">
            <div className="logo-icon">IELTS</div>
            <div className="logo-text">
              UA<span>Institue</span>
            </div>
          </a>

          <ul className="nav-links">
            <li>
              <a href="#home" className="active">
                Home
              </a>
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

          <a href="#contact" className="nav-cta">
            Free Demo
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
