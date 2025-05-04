// pages/dashboard.tsx
import React from 'react';
import Head from 'next/head';
import Dashboard from '../components/Dashboard/Dashboard';

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Dashboard | Fitness Tracker</title>
        <meta name="description" content="Track your workouts and monitor your progress" />
      </Head>
      <Dashboard />
    </>
  );
}