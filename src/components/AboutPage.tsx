import React from 'react';
import './Pages.css';
import { shopFront } from '../images';

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
            <h2>Our Story</h2>
            <div className="content-with-placeholder">
              <div className="text-content">
                <p>This is a placeholder for our salon's story. Here we will share:</p>
                <ul>
                  <li>How Blossom Advanced Beauty was founded</li>
                  <li>Our journey in the beauty industry</li>
                  <li>What makes us unique</li>
                  <li>Our commitment to excellence</li>
                </ul>
              </div>
              <div className="shop-front-image">
                <img src={shopFront} alt="Blossom Advanced Beauty shop front" />
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <div className="mission-content">
              <p>Coming Soon - Our mission statement and values will be detailed here, including:</p>
              <ul>
                <li>Commitment to client satisfaction</li>
                <li>Use of premium products and techniques</li>
                <li>Creating a relaxing and welcoming environment</li>
                <li>Continuous education and improvement</li>
              </ul>
            </div>
          </section>

          <section className="about-section">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-photo-placeholder">
                  <span>Team Photo 1</span>
                </div>
                <h3>Team Member Name</h3>
                <p>Position/Specialty</p>
                <p>Coming Soon - Bio and qualifications</p>
              </div>
              
              <div className="team-member">
                <div className="team-photo-placeholder">
                  <span>Team Photo 2</span>
                </div>
                <h3>Team Member Name</h3>
                <p>Position/Specialty</p>
                <p>Coming Soon - Bio and qualifications</p>
              </div>
              
              <div className="team-member">
                <div className="team-photo-placeholder">
                  <span>Team Photo 3</span>
                </div>
                <h3>Team Member Name</h3>
                <p>Position/Specialty</p>
                <p>Coming Soon - Bio and qualifications</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;