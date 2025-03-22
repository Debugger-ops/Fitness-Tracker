// types/index.ts
export interface Exercise {
    id: string;
    name: string;
    sets: number;
    reps: number;
    weight: number;
    date: string;
    notes?: string;
}

export interface WorkoutDay {
    id: string;
    date: string;
    exercises: Exercise[];
}

export interface User {
    id: string;
    name: string;
    weight: number;
    height: number;
    goals: {
        weeklyWorkouts: number;
        weightGoal?: number;
    };
}