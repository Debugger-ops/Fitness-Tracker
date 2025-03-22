// components/WorkoutStats/WorkoutStats.tsx
import React from 'react';
import styles from './WorkoutStats.module.css';

interface WorkoutStatsProps {
  stats: {
    totalWorkouts: number;
    totalExercises: number;
    averageExercisesPerWorkout: number;
  }
}

const WorkoutStats: React.FC<WorkoutStatsProps> = ({ stats }) => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsCard}>
        <div className={styles.statValue}>{stats.totalWorkouts}</div>
        <div className={styles.statLabel}>Workouts This Week</div>
      </div>
      
      <div className={styles.statsCard}>
        <div className={styles.statValue}>{stats.totalExercises}</div>
        <div className={styles.statLabel}>Total Exercises</div>
      </div>
      
      <div className={styles.statsCard}>
        <div className={styles.statValue}>
          {stats.averageExercisesPerWorkout.toFixed(1)}
        </div>
        <div className={styles.statLabel}>Avg. Exercises Per Workout</div>
      </div>
    </div>
  );
};

export default WorkoutStats;