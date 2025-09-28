import React from "react";

function Courses() {
  const courses = [
    {
      icon: "🎓",
      title: "IELTS Academic",
      price: "₹15,999",
      duration: "8 Weeks",
      features: [
        "40+ hours of live training",
        "8 full mock tests",
        "Writing task evaluation",
        "Speaking practice sessions",
        "Personalized feedback",
        "Study material included",
      ],
    },
    {
      icon: "🌍",
      title: "IELTS General Training",
      price: "₹12,999",
      duration: "6 Weeks",
      features: [
        "35+ hours of live training",
        "6 full mock tests",
        "Focus on practical English",
        "Everyday communication skills",
        "Writing for general purposes",
        "Study material included",
      ],
    },
    {
      icon: "⚡",
      title: "IELTS Crash Course",
      price: "₹8,999",
      duration: "4 Weeks",
      features: [
        "20 hours intensive training",
        "4 mock tests with analysis",
        "Exam strategies and tips",
        "Time management skills",
        "Quick result improvement",
        "Study material included",
      ],
    },
  ];

  return (
    <section id="courses" className="courses">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Our Courses</div>
          <h2 className="section-title">Choose Your IELTS Program</h2>
          <p className="section-subtitle">
            Comprehensive IELTS preparation programs designed for different
            needs and timelines
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-header">
                <div className="course-icon">{course.icon}</div>
                <h3>{course.title}</h3>
                <div className="course-price">{course.price}</div>
                <div className="course-duration">{course.duration} Program</div>
              </div>
              <div className="course-content">
                <ul className="course-features">
                  {course.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="course-button">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
