import React from "react";
import "../css/About.css"; // we'll create this CSS file

export default function About() {
 const achievements = [
    {
      icon: "👑",
      title: "Trusted by Thousands",
      desc: "Our focused, career-ready courses have helped students upskill and transition into high-demand fields."
    },
    {
      icon: "🏅",
      title: "Award-Winning Courses",
      desc: "Each course is built with input from industry professionals and aligns with global certification standards."
    },
    {
      icon: "🎭",
      title: "Positive Student Feedback",
      desc: "Students consistently praise our practical, hands-on approach and real-world relevance."
    },
    {
      icon: "⚡",
      title: "Industry Partnerships",
      desc: "We collaborate with top companies and experts to keep our curriculum aligned with job market needs."
    }
  ];
    const goals = [
    {
      icon: "🔒",
      title: "Provide Practical Skills",
      desc: "We focus on real-world training that meets today’s job market demands. Our courses equip learners with hands-on experience, tools, and techniques they can immediately apply in their careers."
    },
    {
      icon: "📘",
      title: "Foster Creative Problem-Solving",
      desc: "We don’t just teach tools — we teach how to think. Our approach encourages critical thinking and innovative solutions, empowering students to tackle real-world challenges with clarity and confidence."
    },
    {
      icon: "🧩",
      title: "Promote Collaboration and Community",
      desc: "Learning thrives in a connected environment. Our platform fosters a supportive, interactive community where learners exchange ideas, collaborate on projects, and grow together."
    },
    {
      icon: "✨",
      title: "Stay Ahead of the Curve",
      desc: "Technology and industry needs are evolving — and so are we. We continuously update our content to ensure our students stay current with the latest trends, tools, and practices in the field."
    }
  ];
  return (
    <dev>
    <section className="about-section">
      <div className="about-container">
        {/* Left title */}
        <h2 className="about-title">About EdTech</h2>

        {/* Right description */}
        <p className="about-text">
          Welcome to EdTech, your trusted partner in mastering industry-driven
          skills. We specialize in offering high-quality online courses in SAP,
          Data Analytics, and CAD/CAE — empowering learners to build strong
          careers in today’s competitive digital and engineering landscape.
        </p>
      </div>

      {/* Divider line */}
      <hr className="about-divider" />
    </section>

    <section className="achievements">
       <div className="">
      <div className="achievements-header">
        <h2>Achievements</h2>
        <p>
          We take pride in delivering quality education and have accomplished some key milestones:
        </p>
      </div>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      </div>
    </section>

     <section className="goals">
      <div className="goals-header">
        <h2>Our Goals</h2>
        <p>
          At EdTech, our mission is to empower learners from all walks of life to succeed in today’s digital and industrial world.
        </p>
      </div>

      <div className="goals-grid">
        {goals.map((item, index) => (
          <div className="goal-card" key={index}>
            <div className="goal-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

     <section className="cta-section">
      <div className="cta-content">
        <div className="cta-text">
          <h2>
            <span className="highlight">Together</span>, Let’s Shape the Future of Innovation
          </h2>
          <p>
            Whether you're aspiring to become a data analyst, SAP consultant, or design engineer — EdTech is here to guide your journey.
          </p>
        </div>

        <div className="cta-action">
          <button className="cta-btn">Join Now</button>
        </div>
      </div>
    </section>
    </dev>
  );
}
