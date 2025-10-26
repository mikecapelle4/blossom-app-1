import React from 'react';
import './Pages.css';

function SemiPermanentBrowsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Semi-Permanent Brows</h1>
        <p>Perfect, natural-looking eyebrows that last</p>
      </div>
      
      <div className="page-content">
        <div className="service-detail">
          <div className="service-placeholder">
            <span>Semi-Permanent Brows Image Placeholder</span>
          </div>
          
          <div className="service-description">
            <h2>Transform Your Look</h2>
            <p>
              Natural Semi-Permanent Brows Wake up with effortlessly beautiful brows that look soft, full, and perfectly shaped — no pencil required. Our Natural Semi-Permanent Brows are created using a digital tattoo machine, designed for gentle, precise pigment application. This advanced technique allows us to craft hyper-realistic “nano” hair strokes or a soft shaded finish that blends seamlessly with your natural brows. Unlike traditional microblading, this method is less invasive, more comfortable, and ideal for all skin types. The results are beautifully natural — enhancing your features while keeping your brows looking like your brows, only better. Enjoy fresh, low-maintenance brows that last up to 12–24 months, with a look that fades softly over time.
            </p>
            
            <h3>Services Include:</h3>
            <ul>
              <li>Microblading</li>
              <li>Powder Brows</li>
              <li>Combination Brows</li>
              <li>Brow Mapping & Design</li>
              <li>Touch-up Sessions</li>
            </ul>
            
            <h3>Benefits:</h3>
            <ul>
              <li>Save time on daily makeup routine</li>
              <li>Natural, hair-like strokes</li>
              <li>Lasts 12-18 months</li>
              <li>Custom color matching</li>
              <li>Professional consultation included</li>
            </ul>
            
            <div className="service-info">
              <h3>Treatment Information</h3>
              <p><strong>Duration:</strong> 2-3 hours</p>
              <p><strong>Healing Time:</strong> 7-14 days</p>
              <p><strong>Touch-up Required:</strong> 4-6 weeks after initial treatment</p>
              <p><strong>Pricing:</strong> Contact us for detailed pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SemiPermanentBrowsPage;