// pages/history.tsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Exercise } from '../types';
import ExerciseList from '../components/ExerciseList/ExerciseList';
import { getExercises } from '../utils/localStorage';
import styles from '../styles/History.module.css';

export default function HistoryPage() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const loadedExercises = getExercises();
    setExercises(loadedExercises);
  }, []);

  const handleEditExercise = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    // Redirect to dashboard with the selected exercise
    window.location.href = `/dashboard?edit=${exercise.id}`;
  };

  const handleDeleteExercise = (id: string) => {
    const updatedExercises = exercises.filter(ex => ex.id !== id);
    setExercises(updatedExercises);
    // Save to localStorage
    localStorage.setItem('fitnessTrackerExercises', JSON.stringify(updatedExercises));
  };

  // Get unique exercise names for filter
  const exerciseTypes = Array.from(new Set(exercises.map(ex => ex.name)));

  // Filter exercises based on selected type and search query
  const filteredExercises = exercises.filter(exercise => {
    const matchesType = filterType === 'all' || exercise.name === filterType;
    const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (exercise.notes && exercise.notes.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Workout History | Fitness Tracker</title>
        <meta name="description" content="View your workout history and progress" />
      </Head>
      
      <div className={styles.historyPage}>
        <h1>Workout History</h1>
        
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label htmlFor="exerciseType">Filter by Exercise:</label>
            <select 
              id="exerciseType"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className={styles.select}
            >
              <option value="all">All Exercises</option>
              {exerciseTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.filterGroup}>
            <label htmlFor="searchQuery">Search:</label>
            <input
              type="text"
              id="searchQuery"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search exercises..."
              className={styles.searchInput}
            />
          </div>
        </div>
        
        <div className={styles.results}>
          <p className={styles.resultCount}>
            Showing {filteredExercises.length} of {exercises.length} exercises
          </p>
          
          <ExerciseList
            exercises={filteredExercises}
            onEdit={handleEditExercise}
            onDelete={handleDeleteExercise}
          />
        </div>
      </div>
    </>
  );
}