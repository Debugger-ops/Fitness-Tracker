
import React, { useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine if a link is active
  const isActive = (path: string) => {
    return router.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navContainer">
          <Link href="/" className="logoContainer">
            <div className="logo">
              <svg className="logoIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20V14M4 14V8M4 14H12M4 8V2M4 8H8M12 14H20M12 14V8M12 14V20M20 14V8M20 14V20M20 8V2M20 8H16"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="logoText">FitTrack</span>
            </div>
          </Link>
          
          <div className="menuToggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className={`navLinks ${isMenuOpen ? 'active' : ''}`}>
            <Link 
              href="/" 
              className={`navLink ${isActive('/')}`}
            >
              Home
            </Link>
            <Link 
              href="/dashboard" 
              className={`navLink ${isActive('/dashboard')}`}
            >
              Dashboard
            </Link>
            <Link 
              href="/history" 
              className={`navLink ${isActive('/history')}`}
            >
              History
            </Link>
            <Link 
              href="/features" 
              className={`navLink ${isActive('/features')}`}
            >
              Features
            </Link>
            <Link 
              href="/about" 
              className={`navLink ${isActive('/about')}`}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;