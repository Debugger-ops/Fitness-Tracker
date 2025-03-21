// pages/index.tsx
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fitness Tracker - Track Your Workouts</title>
        <meta name="description" content="Track your workouts and fitness progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Fitness Tracker</span>
        </h1>
        
        <p className={styles.description}>
          Keep track of your workouts, monitor your progress, and reach your fitness goals
        </p>
        
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3>Track Workouts</h3>
            <p>Log your exercises, sets, reps, and weights with ease</p>
          </div>
          
          <div className={styles.featureCard}>
            <h3>Monitor Progress</h3>
            <p>See your improvement over time with detailed statistics</p>
          </div>
          
          <div className={styles.featureCard}>
            <h3>Set Goals</h3>
            <p>Define your fitness objectives and track your journey</p>
          </div>
        </div>
        
        <div className={styles.buttons}>
          <Link href="/dashboard" className={styles.button}>
            Get Started
          </Link>
          
          <Link href="/history" className={styles.secondaryButton}>
            View History
          </Link>
        </div>
      </main>
    </div>
  );
}