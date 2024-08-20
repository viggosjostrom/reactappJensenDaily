import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Läs från localStorage för att initiera state
    return localStorage.getItem('darkMode') === 'enabled';
  });

  useEffect(() => {
    // Sätt dark mode baserat på state
    document.body.classList.toggle('dark-mode', isDarkMode);
    // Spara inställningen i localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  }, [isDarkMode]); // Körs när isDarkMode ändras

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <nav className="navbar">
      <div className="header-container">
        <div className="navbar-brand-wrapper">
          <Link to="/" className="navbar-brand">The Jensens Daily</Link>
          <div className="dropdown">
            <button className="dropdown-button">
              <span className="hamburger-icon"></span>
              <span className="hamburger-icon"></span>
              <span className="hamburger-icon"></span>
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item"><Link to="/">Home</Link></li>
              <li className="dropdown-item"><Link to="/articles">Articles</Link></li>
              <li className="dropdown-item"><Link to="/contact">Contact</Link></li>
              <li className="dropdown-item"><Link to="/subscription">Subscription</Link></li>
            </ul>
          </div>
        </div>
        <button 
          id="dark-mode-button" 
          className="btn btn-secondary"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;