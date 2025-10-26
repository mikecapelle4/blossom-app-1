import React, { useState } from 'react';
import './nav-bar.css';
import { logo } from '../../images';

interface NavBarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

function NavBar({ onPageChange, currentPage }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageClick = (page: string) => {
    onPageChange(page);
    setIsMenuOpen(false); // Close menu when item is clicked
    setIsServicesDropdownOpen(false); // Close services dropdown when item is clicked
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const isServicesActive = currentPage === 'services' || 
                          currentPage === 'semi-permanent-brows' || 
                          currentPage === 'bespoke-facials' || 
                          currentPage === 'fine-line-tattoos';

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Blossom Advanced Beauty" className="logo-image" />
          <h2>Blossom Advanced Beauty</h2>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Navigation Menu */}
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                onClick={() => handlePageClick('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item nav-item-dropdown">
              <button 
                className={`nav-link ${isServicesActive ? 'active' : ''}`}
                onClick={toggleServicesDropdown}
                aria-expanded={isServicesDropdownOpen}
              >
                Services
                <span className={`dropdown-arrow ${isServicesDropdownOpen ? 'dropdown-arrow-open' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`dropdown-menu ${isServicesDropdownOpen ? 'dropdown-menu-open' : ''}`}>
                <button 
                  className={`dropdown-link ${currentPage === 'services' ? 'active' : ''}`}
                  onClick={() => handlePageClick('services')}
                >
                  All Services
                </button>
                <button 
                  className={`dropdown-link ${currentPage === 'semi-permanent-brows' ? 'active' : ''}`}
                  onClick={() => handlePageClick('semi-permanent-brows')}
                >
                  Semi-Permanent Brows
                </button>
                <button 
                  className={`dropdown-link ${currentPage === 'bespoke-facials' ? 'active' : ''}`}
                  onClick={() => handlePageClick('bespoke-facials')}
                >
                  Bespoke Facials
                </button>
                <button 
                  className={`dropdown-link ${currentPage === 'fine-line-tattoos' ? 'active' : ''}`}
                  onClick={() => handlePageClick('fine-line-tattoos')}
                >
                  Fine Line Tattoos
                </button>
              </div>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                onClick={() => handlePageClick('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                onClick={() => handlePageClick('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
          
          {/* Book Now Button */}
          <div className="book-now-container">
            <button className="book-now-btn">
              Book Now
            </button>
          </div>
          
          {/* Social Media Buttons */}
          <div className="social-buttons">
            <a 
              href="https://www.instagram.com/blossomadvancedbeauty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn instagram"
              aria-label="Follow us on Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/Blossomadvancedbeauty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn facebook"
              aria-label="Like us on Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
