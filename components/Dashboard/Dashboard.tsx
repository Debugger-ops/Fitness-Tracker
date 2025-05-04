// components/Dashboard/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import { Exercise, WorkoutDay } from '../../types';
import ExerciseForm from '../ExerciseForm/ExerciseForm';
import ExerciseList from '../ExerciseList/ExerciseList';
import WorkoutStats from '../WorkoutStats/WorkoutStats';
import  './Dashboard.css';
const Dashboard: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [editingExercise, setEditingExercise] = useState<Exercise | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Load exercises from localStorage
    const savedExercises = localStorage.getItem('fitnessTrackerExercises');
    if (savedExercises) {
      setExercises(JSON.parse(savedExercises));
    }
  }, []);

  useEffect(() => {
    // Save exercises to localStorage when they change
    localStorage.setItem('fitnessTrackerExercises', JSON.stringify(exercises));
  }, [exercises]);

  const handleSaveExercise = (exercise: Exercise) => {
    if (editingExercise) {
      // Update existing exercise
      setExercises(prev => 
        prev.map(ex => ex.id === exercise.id ? exercise : ex)
      );
      setEditingExercise(null);
    } else {
      // Add new exercise
      setExercises(prev => [...prev, exercise]);
    }
    setShowForm(false);
  };

  const handleEditExercise = (exercise: Exercise) => {
    setEditingExercise(exercise);
    setShowForm(true);
  };

  const handleDeleteExercise = (id: string) => {
    setExercises(prev => prev.filter(ex => ex.id !== id));
  };

  // Calculate stats
  const calculateStats = () => {
    // Get last 7 days of exercises
    const today = new Date();
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    const recentExercises = exercises.filter(ex => 
      new Date(ex.date) >= oneWeekAgo && new Date(ex.date) <= today
    );
    
    // Group by date to get workout days
    const workoutDays: WorkoutDay[] = [];
    recentExercises.forEach(exercise => {
      const existingDay = workoutDays.find(day => day.date === exercise.date);
      if (existingDay) {
        existingDay.exercises.push(exercise);
      } else {
        workoutDays.push({
          id: exercise.date,
          date: exercise.date,
          exercises: [exercise]
        });
      }
    });
    
    return {
      totalWorkouts: workoutDays.length,
      totalExercises: recentExercises.length,
      averageExercisesPerWorkout: workoutDays.length > 0 
        ? recentExercises.length / workoutDays.length 
        : 0
    };
  };

  const stats = calculateStats();

  return (
    <div className='dashboard'>
      <div className='header'>
        <h1>Workout Dashboard</h1>
        <button 
          className='addButton'
          onClick={() => {
            setEditingExercise(null);
            setShowForm(!showForm);
          }}
        >
          {showForm ? 'Cancel' : 'Add Exercise'}
        </button>
      </div>
      
      <div className='content'>
        <div className='statsSection'>
          <WorkoutStats stats={stats} />
        </div>
        
        {showForm && (
          <div className='formSection'>
            <ExerciseForm 
              onSave={handleSaveExercise}
              initialData={editingExercise || undefined}
            />
          </div>
        )}
        
        <div className='recentExercises'>
          <h2>Recent Exercises</h2>
          <ExerciseList 
            exercises={exercises}
            onEdit={handleEditExercise}
            onDelete={handleDeleteExercise}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;