import React from 'react';
import './Pages.css';

function BespokeFacialsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Bespoke Facials</h1>
        <p>Customized skincare treatments tailored to your unique needs</p>
      </div>
      
      <div className="page-content">
        <div className="service-detail">
          <div className="service-placeholder">
            <span>Bespoke Facials Image Placeholder</span>
          </div>
          
          <div className="service-description">
            <h2>Personalized Skincare Experience</h2>
            <p>
                 We offer a wide range of bespoke facial treatments, from advanced anti-ageing solutions to targeted care for rosacea and acne-prone skin. Using cutting-edge technology and professional-grade techniques, each facial is tailor-made to suit your individual skin needs. Every client begins with a comprehensive skin consultation, ensuring your treatment plan is perfectly matched to your skin’s condition and goals — so you can achieve a healthier, clearer, and more radiant complexion.
            </p>
            
            <h3>Treatment Options:</h3>
            <ul>
              <li>Deep Cleansing & Purifying Facial</li>
              <li>Anti-Aging & Firming Treatment</li>
              <li>Hydrating & Nourishing Facial</li>
              <li>Acne & Problem Skin Treatment</li>
              <li>Brightening & Radiance Boost</li>
              <li>Sensitive Skin Care</li>
            </ul>
            
            <h3>What's Included:</h3>
            <ul>
              <li>Professional skin consultation</li>
              <li>Custom product selection</li>
              <li>Advanced skincare techniques</li>
              <li>Relaxing facial massage</li>
              <li>Take-home skincare recommendations</li>
            </ul>
            
            <h3>Key Benefits:</h3>
            <ul>
              <li>Improved skin texture and tone</li>
              <li>Reduced signs of aging</li>
              <li>Deep cleansing and hydration</li>
              <li>Stress relief and relaxation</li>
              <li>Personalized skincare advice</li>
            </ul>
            
            <div className="service-info">
              <h3>Treatment Information</h3>
              <p><strong>Duration:</strong> 60-90 minutes</p>
              <p><strong>Recommended Frequency:</strong> Every 4-6 weeks</p>
              <p><strong>Suitable For:</strong> All skin types</p>
              <p><strong>Pricing:</strong> Contact us for detailed pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BespokeFacialsPage;