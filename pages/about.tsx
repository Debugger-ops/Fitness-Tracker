import React from 'react';
import Header from '../components/Header/Header';
import './about.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="about-content">
        <section className="about-hero">
          <h1>About FitTrack</h1>
          <p>Empowering Your Fitness Journey, One Workout at a Time</p>
        </section>
        
        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            FitTrack was born from a passion for fitness and a belief that everyone 
            deserves a personalized, intuitive tool to track their health and fitness goals. 
            We aim to provide a comprehensive platform that makes fitness tracking 
            simple, insightful, and motivating.
          </p>
        </section>
        
        <section className="about-team">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h3>Sarah Johnson</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>Michael Chen</h3>
              <p>Lead Developer</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">🏋️</div>
              <h3>Alex Rodriguez</h3>
              <p>Fitness Advisor</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
