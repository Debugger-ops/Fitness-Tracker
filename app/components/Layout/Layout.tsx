// components/Layout/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header/Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Fitness Tracker' }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title} | Fitness Tracker</title>
        <meta name="description" content="Track your fitness progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Fitness Tracker</p>
      </footer>
    </div>
  );
};

export default Layout;