// utils/localStorage.ts
import { Exercise, User } from '../types';

export const saveExercises = (exercises: Exercise[]): void => {
  try {
    localStorage.setItem('fitnessTrackerExercises', JSON.stringify(exercises));
  } catch (error) {
    console.error('Failed to save exercises to localStorage:', error);
  }
};

export const getExercises = (): Exercise[] => {
  try {
    const exercises = localStorage.getItem('fitnessTrackerExercises');
    return exercises ? JSON.parse(exercises) : [];
  } catch (error) {
    console.error('Failed to get exercises from localStorage:', error);
    return [];
  }
};

export const saveUserProfile = (user: User): void => {
  try {
    localStorage.setItem('fitnessTrackerUser', JSON.stringify(user));
  } catch (error) {
    console.error('Failed to save user profile to localStorage:', error);
  }
};

export const getUserProfile = (): User | null => {
  try {
    const user = localStorage.getItem('fitnessTrackerUser');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Failed to get user profile from localStorage:', error);
    return null;
  }
};

export const clearAllData = (): void => {
  try {
    localStorage.removeItem('fitnessTrackerExercises');
    localStorage.removeItem('fitnessTrackerUser');
  } catch (error) {
    console.error('Failed to clear data from localStorage:', error);
  }
};