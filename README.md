# Fitness Tracker - Next.js Application

A comprehensive fitness tracking application built with Next.js, TypeScript, and CSS Modules.

## Features

- **Dashboard**: View your recent workouts and quick statistics
- **Exercise Tracking**: Add, edit, and delete exercises with details like sets, reps, and weight
- **Workout History**: Filter and search through your past workouts
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Local Storage**: Save your workout data in the browser

## Tech Stack

- **Next.js**: React framework for building the application
- **TypeScript**: For type safety and better developer experience
- **CSS Modules**: For component-scoped styling
- **Local Storage**: For persisting user data

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fitness-tracker.git
   cd fitness-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

The project is structured as follows:

- `/app`: Next.js application directory
  - `/components`: React components organized by feature
  - `/pages`: Next.js pages
  - `/styles`: Global and page-specific CSS
  - `/types`: TypeScript type definitions
  - `/utils`: Utility functions

## Usage

1. **Adding a Workout**: Click "Add Exercise" on the dashboard, fill out the form, and submit.
2. **Viewing History**: Navigate to the History page to see all your past workouts.
3. **Filtering**: Use the filters on the History page to find specific workouts or exercises.
4. **Editing/Deleting**: Expand any exercise entry to edit or delete it.

## Future Enhancements

- User authentication
- Workout plans and routines
- Progress charts and analytics
- Social sharing features
- Export/import functionality for backup

## License

This project is licensed under the MIT License - see the LICENSE file for details.
