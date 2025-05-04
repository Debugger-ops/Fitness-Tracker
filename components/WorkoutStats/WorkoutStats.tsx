// components/WorkoutStats/WorkoutStats.tsx
import React from 'react';
import './WorkoutStats.css';  // Regular CSS import

interface WorkoutStatsProps {
  stats: {
    totalWorkouts: number;
    totalExercises: number;
    averageExercisesPerWorkout: number;
  }
}

const WorkoutStats: React.FC<WorkoutStatsProps> = ({ stats }) => {
  return (
    <div className="statsContainer">
      <div className="statsCard">
        <div className="statValue">{stats.totalWorkouts}</div>
        <div className="statLabel">Workouts This Week</div>
      </div>
      
      <div className="statsCard">
        <div className="statValue">{stats.totalExercises}</div>
        <div className="statLabel">Total Exercises</div>
      </div>
      
      <div className="statsCard">
        <div className="statValue">
          {stats.averageExercisesPerWorkout.toFixed(1)}
        </div>
        <div className="statLabel">Avg. Exercises Per Workout</div>
      </div>
    </div>
  );
};

export default WorkoutStats;
