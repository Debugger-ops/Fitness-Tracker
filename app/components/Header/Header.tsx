// components/Header/Header.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h1>Fitness Tracker</h1>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/dashboard" className={styles.navLink}>
            Dashboard
          </Link>
          <Link href="/history" className={styles.navLink}>
            History
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;