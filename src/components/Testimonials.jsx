import React from "react";

function Testimonials() {
  const testimonials = [
    {
      text: "I never thought I could achieve Band 8.0 in my first attempt. The faculty at AcharyaPro provided personalized guidance that helped me identify and work on my weak areas. The mock tests were extremely helpful!",
      author: "Unas",
      initial: "SK",
      score: "Band 8.0 Overall",
      course: "IELTS Academic",
    },
    {
      text: "The writing evaluation sessions were a game-changer for me. My writing improved from Band 6.0 to 7.5 in just 6 weeks. The teachers are incredibly supportive and knowledgeable.",
      author: "Akhil",
      initial: "M",
      score: "Band 7.5 Overall",
      course: "IELTS General",
    },
    {
      text: "Excellent teaching methodology! The crash course was perfect for my busy schedule. I improved my score by 1.5 bands in just 4 weeks. Highly recommended for working professionals.",
      author: "Charan",
      initial: "K",
      score: "Band 7.5 Overall",
      course: "IELTS Crash Course",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Success Stories</div>
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Join thousands of successful students who achieved their dream IELTS
            scores with us
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.initial}</div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.score}</p>
                  <p>{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
