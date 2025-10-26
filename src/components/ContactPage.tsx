import React from 'react';
import './Pages.css';

function ContactPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch to book your appointment or ask any questions</p>
      </div>
      
      <div className="page-content">
        <div className="contact-layout">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <div className="form-placeholder">
              <p>Contact form placeholder - Coming Soon</p>
              <div className="form-fields">
                <div className="field-placeholder">Name Field</div>
                <div className="field-placeholder">Email Field</div>
                <div className="field-placeholder">Phone Field</div>
                <div className="field-placeholder">Service Interest Field</div>
                <div className="field-placeholder">Message Field</div>
                <div className="field-placeholder">Submit Button</div>
              </div>
            </div>
          </div>
          
          <div className="contact-info-section">
            <h2>Visit Our Salon</h2>
            <div className="contact-details-large">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <strong>Address</strong>
                  <p>22 Finkle St, Selby, YO8 4DS</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <strong>Phone</strong>
                  <p>01757 428005</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <strong>Email</strong>
                  <p>info@blossombeauty.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <strong>Business Hours</strong>
                  <p>
                    Monday: 9:00 AM - 3:00 PM<br/>
                    Tuesday - Friday: 9:00 AM - 7:00 PM<br/>
                    Saturday: 8:00 AM - 3:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="map-section">
              <h3>Location</h3>
              <div className="large-map-placeholder">
                <span>Google Maps Embed Placeholder</span>
                <p>Interactive map with salon location</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="booking-cta">
          <h2>Ready to Book?</h2>
          <p>Call us directly or use our online booking system</p>
          <div className="cta-buttons">
            <button className="book-now-btn">Online Booking</button>
            <button className="book-now-btn secondary">Call Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;