import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">#1 IELTS Institute in India</div>
            <h1>Achieve Your Dream IELTS Score with Expert Guidance</h1>
            <p>
              Join 10,000+ successful students who achieved Band 7.5+ with our
              proven teaching methodology and personalized coaching.
            </p>

            <div className="cta-buttons">
              <a href="#courses" className="cta-button">
                <span>Explore Courses</span>
                <span>→</span>
              </a>
              <a href="#contact" className="cta-button secondary">
                <span>Free Demo Class</span>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Students Trained</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7.5</span>
                <span className="stat-label">Average Band Score</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-card">
              <h3>Free IELTS Assessment</h3>
              <p>
                Get a detailed analysis of your current level and personalized
                study plan
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href="#contact"
                  className="cta-button"
                  style={{ padding: "10px 20px", fontSize: "1rem" }}
                >
                  Book Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
