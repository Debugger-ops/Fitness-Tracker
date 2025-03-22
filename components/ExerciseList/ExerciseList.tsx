// components/ExerciseList/ExerciseList.tsx
import React, { useState } from 'react';
import { Exercise } from '../../types';
import styles from './ExerciseList.module.css';

interface ExerciseListProps {
  exercises: Exercise[];
  onEdit: (exercise: Exercise) => void;
  onDelete: (id: string) => void;
}

const ExerciseList: React.FC<ExerciseListProps> = ({ exercises, onEdit, onDelete }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prevId => prevId === id ? null : id);
  };

  // Group exercises by date
  const groupedExercises = exercises.reduce((acc, exercise) => {
    const date = exercise.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(exercise);
    return acc;
  }, {} as Record<string, Exercise[]>);

  // Sort dates in descending order
  const sortedDates = Object.keys(groupedExercises).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  );

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (exercises.length === 0) {
    return <p className={styles.emptyMessage}>No exercises recorded yet.</p>;
  }

  return (
    <div className={styles.container}>
      {sortedDates.map(date => (
        <div key={date} className={styles.dateGroup}>
          <h3 className={styles.dateHeading}>{formatDate(date)}</h3>
          <div className={styles.exerciseList}>
            {groupedExercises[date].map(exercise => (
              <div 
                key={exercise.id} 
                className={`${styles.exerciseCard} ${expandedId === exercise.id ? styles.expanded : ''}`}
              >
                <div 
                  className={styles.exerciseHeader}
                  onClick={() => toggleExpand(exercise.id)}
                >
                  <h4 className={styles.exerciseName}>{exercise.name}</h4>
                  <div className={styles.exerciseMeta}>
                    <span className={styles.exerciseDetails}>
                      {exercise.sets} sets × {exercise.reps} reps
                    </span>
                    <span className={styles.exerciseWeight}>
                      {exercise.weight > 0 ? `${exercise.weight} kg` : 'Bodyweight'}
                    </span>
                  </div>
                  <button 
                    className={styles.expandButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(exercise.id);
                    }}
                  >
                    {expandedId === exercise.id ? '−' : '+'}
                  </button>
                </div>
                
                {expandedId === exercise.id && (
                  <div className={styles.exerciseDetails}>
                    {exercise.notes && (
                      <div className={styles.exerciseNotes}>
                        <strong>Notes:</strong> {exercise.notes}
                      </div>
                    )}
                    <div className={styles.exerciseActions}>
                      <button 
                        className={styles.editButton}
                        onClick={() => onEdit(exercise)}
                      >
                        Edit
                      </button>
                      <button 
                        className={styles.deleteButton}
                        onClick={() => {
                          if (window.confirm('Are you sure you want to delete this exercise?')) {
                            onDelete(exercise.id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;