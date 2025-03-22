// components/Header/Header.tsx
import React from 'react';
import Link from 'next/link';
import './Header.css';  // Import regular CSS

const Header: React.FC = () => {
  return (
    <header className="header">  {/* Direct className usage */}
      <div className="container">
        <Link href="/" className="logo">
          <h1>Fitness Tracker</h1>
        </Link>
        <nav className="nav">
          <Link href="/" className="navLink">
            Home
          </Link>
          <Link href="/dashboard" className="navLink">
            Dashboard
          </Link>
          <Link href="/history" className="navLink">
            History
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
