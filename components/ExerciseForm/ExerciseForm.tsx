// components/ExerciseForm/ExerciseForm.tsx
import React, { useState } from 'react';
import './ExerciseForm.css';  // Regular CSS import
import { Exercise } from '../../types';
import { v4 as uuidv4 } from 'uuid';

interface ExerciseFormProps {
  onSave: (exercise: Exercise) => void;
  initialData?: Exercise;
}

const ExerciseForm: React.FC<ExerciseFormProps> = ({ onSave, initialData }) => {
  const [formData, setFormData] = useState<Omit<Exercise, 'id'>>({
    name: initialData?.name || '',
    sets: initialData?.sets || 3,
    reps: initialData?.reps || 10,
    weight: initialData?.weight || 0,
    date: initialData?.date || new Date().toISOString().split('T')[0],
    notes: initialData?.notes || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Exercise name is required';
    }
    
    if (formData.sets <= 0) {
      newErrors.sets = 'Sets must be greater than 0';
    }
    
    if (formData.reps <= 0) {
      newErrors.reps = 'Reps must be greater than 0';
    }
    
    if (formData.weight < 0) {
      newErrors.weight = 'Weight cannot be negative';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const parsedValue = type === 'number' ? parseFloat(value) : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const exercise: Exercise = {
        id: initialData?.id || uuidv4(),
        ...formData
      };
      
      onSave(exercise);
      
      if (!initialData) {
        // Clear form if it's a new exercise
        setFormData({
          name: '',
          sets: 3,
          reps: 10,
          weight: 0,
          date: new Date().toISOString().split('T')[0],
          notes: '',
        });
      }
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>{initialData ? 'Edit Exercise' : 'Add New Exercise'}</h2>
      
      <div className='formGroup'>
        <label htmlFor="name">Exercise Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'inputError' : ''}
        />
        {errors.name && <span className='errorMessage'>{errors.name}</span>}
      </div>
      
      <div className='formRow'>
        <div className='formGroup'>
          <label htmlFor="sets">Sets</label>
          <input
            type="number"
            id="sets"
            name="sets"
            value={formData.sets}
            onChange={handleChange}
            min="1"
            className={errors.sets ? 'inputError' : ''}
          />
          {errors.sets && <span className='errorMessage'>{errors.sets}</span>}
        </div>
        
        <div className='formGroup'>
          <label htmlFor="reps">Reps</label>
          <input
            type="number"
            id="reps"
            name="reps"
            value={formData.reps}
            onChange={handleChange}
            min="1"
            className={errors.reps ? 'inputError' : ''}
          />
          {errors.reps && <span className='errorMessage'>{errors.reps}</span>}
        </div>
        
        <div className='formGroup'>
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            min="0"
            step="0.5"
            className={errors.weight ? 'inputError' : ''}
          />
          {errors.weight && <span className='errorMessage'>{errors.weight}</span>}
        </div>
      </div>
      
      <div className='formGroup'>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      
      <div className='formGroup'>
        <label htmlFor="notes">Notes (optional)</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
        />
      </div>
      
      <button type="submit" className='submitButton'>
        {initialData ? 'Update Exercise' : 'Add Exercise'}
      </button>
    </form>
  );
};

export default ExerciseForm;
