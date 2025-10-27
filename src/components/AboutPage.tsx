import React from 'react';
import './Pages.css';
import { shopBoth } from '../images';

function AboutPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About Blossom Advanced Beauty</h1>
        <p>Discover our story, mission, and commitment to your beauty journey</p>
      </div>
      
      <div className="page-content">
        <div className="about-sections">
          <section className="about-section">
            <div className="shop-both-image">
              <img src={shopBoth} alt="Blossom Advanced Beauty shop both" />
            </div>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <div className="mission-content">
              <p>Our mission is to provide exceptional beauty services that enhance our clients' natural beauty and boost their confidence.</p>
              <ul>
              <li>Delivering exceptional client experiences with every visit</li>
              <li>Using top-tier products and advanced beauty techniques</li>
              <li>Fostering a serene, inclusive, and luxurious atmosphere</li>
              <li>Embracing ongoing learning and professional growth</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;