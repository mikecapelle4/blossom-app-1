import React from 'react';
import './Pages.css';

function ServicesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive beauty and wellness treatments tailored for you</p>
      </div>
      
      <div className="page-content">
        <div className="services-categories">
          <div className="category-card">
            <h2>Facial Treatments</h2>
            <div className="service-placeholder">
              <span>Service Image Placeholder</span>
            </div>
            <ul>
              <li>Deep Cleansing Facial</li>
              <li>Anti-Aging Treatment</li>
              <li>Hydrating Facial</li>
              <li>Acne Treatment</li>
            </ul>
            <p>Coming Soon - Detailed service descriptions and pricing</p>
          </div>

          <div className="category-card">
            <h2>Beauty Therapy</h2>
            <div className="service-placeholder">
              <span>Service Image Placeholder</span>
            </div>
            <ul>
              <li>Eyebrow Shaping</li>
              <li>Eyelash Extensions</li>
              <li>Makeup Application</li>
              <li>Hair Styling</li>
            </ul>
            <p>Coming Soon - Detailed service descriptions and pricing</p>
          </div>

          <div className="category-card">
            <h2>Wellness & Spa</h2>
            <div className="service-placeholder">
              <span>Service Image Placeholder</span>
            </div>
            <ul>
              <li>Relaxing Massage</li>
              <li>Body Treatments</li>
              <li>Aromatherapy</li>
              <li>Stress Relief Sessions</li>
            </ul>
            <p>Coming Soon - Detailed service descriptions and pricing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;