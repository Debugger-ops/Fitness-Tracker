// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import './home.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fitness Tracker - Track Your Workouts</title>
        <meta name="description" content="Track your workouts and fitness progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Welcome to <span className="highlight">Fitness Tracker</span>
        </h1>

        <p className="description">
          Keep track of your workouts, monitor your progress, and reach your fitness goals
        </p>

        <div className="features">
          <div className="featureCard">
            <h3>Track Workouts</h3>
            <p>Log your exercises, sets, reps, and weights with ease</p>
          </div>

          <div className="featureCard">
            <h3>Monitor Progress</h3>
            <p>See your improvement over time with detailed statistics</p>
          </div>

          <div className="featureCard">
            <h3>Set Goals</h3>
            <p>Define your fitness objectives and track your journey</p>
          </div>
        </div>

        <div className="buttons">
          <Link href="/dashboard" className="button">
            Get Started
          </Link>

          <Link href="/history" className="secondaryButton">
            View History
          </Link>
        </div>
      </main>
    </div>
  );
}
