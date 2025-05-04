import React from 'react';
import './features.css';

const Features: React.FC = () => {
  const featuresList = [
    {
      title: "Workout Tracking",
      description: "Log and monitor your workouts with precision. Track exercises, sets, reps, and weights.",
      icon: "🏋️",
      color: "var(--primary-color)"
    },
    {
      title: "Progress Analytics",
      description: "Visualize your fitness journey with detailed charts and progress reports.",
      icon: "📊",
      color: "var(--secondary-color)"
    },
    {
      title: "Goal Setting",
      description: "Set personalized fitness goals and track your progress towards them.",
      icon: "🎯",
      color: "var(--accent-color)"
    },
    {
      title: "Nutrition Tracking",
      description: "Monitor your daily nutrition intake and align it with your fitness objectives.",
      icon: "🥗",
      color: "var(--light-text-color)"
    }
  ];

  return (
    <div className="features-page">
      <main className="features-content">
        <h1 className="page-title">FitTrack Features</h1>
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{
                borderTop: `4px solid ${feature.color}`,
                boxShadow: 'var(--box-shadow)'
              }}
            >
              <div 
                className="feature-icon" 
                style={{ 
                  color: feature.color,
                  backgroundColor: `rgba(255, 255, 255, 0.1)` // Use a fixed light overlay instead
                }}
              >
                {feature.icon}
              </div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Features;
