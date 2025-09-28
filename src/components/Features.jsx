import React from "react";

function Features() {
  const features = [
    {
      icon: "👨‍🏫",
      title: "Expert Faculty",
      description:
        "Learn from IELTS experts with 10+ years of experience and proven track records of student success.",
    },
    {
      icon: "📊",
      title: "Personalized Coaching",
      description:
        "Customized study plans and one-on-one feedback sessions tailored to your specific needs.",
    },
    {
      icon: "📚",
      title: "Comprehensive Study Material",
      description:
        "Access to exclusive study materials, practice tests, and updated question banks.",
    },
    {
      icon: "💻",
      title: "Online & Offline Classes",
      description:
        "Flexible learning options with both classroom and online batch availability.",
    },
    {
      icon: "🎯",
      title: "Regular Mock Tests",
      description:
        "Weekly full-length mock tests with detailed performance analysis and improvement tips.",
    },
    {
      icon: "🏆",
      title: "Guaranteed Results",
      description:
        "Our proven methodology ensures you achieve your target band score with confidence.",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Why Choose Us</div>
          <h2 className="section-title">What Makes Us Different</h2>
          <p className="section-subtitle">
            We provide the perfect environment and resources to help you achieve
            your desired IELTS score
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
