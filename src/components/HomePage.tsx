import React from 'react';
import './HomePage.css';
import { image1, image2, image3, image4 } from '../images/index';

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Blossom Advanced Beauty</h1>
          <p>
            Founded by Lucy and Hannah, Blossom Advanced Beauty was created to offer a welcoming, 
            home-from-home salon experience. With over 30 years of combined expertise, they have 
            expanded their treatments and skills to bring you the very best in advanced beauty.
          </p>
          <p>
            Their focus is on enhancing your natural features while addressing your individual 
            concerns — helping you feel confident, refreshed, and truly yourself.
          </p>
          <button className="book-now-btn" onClick={() => window.open("https://www.fresha.com/a/blossom-advanced-beauty-selby-22-finkle-street-ktszw6h1/booking?allOffer=true&cartId=e84887c7-f33b-49f1-b7fb-f92c0562ce91t", "_blank")}>Book Now</button>
        </div>
        <div className="hero-image">
          <img src={image2} alt="Blossom Advanced Beauty Salon" />
        </div>
      </section>

      {/* Meet Our Founders Section */}
      <section className="founders-section">
        <div className="founders-container">
          <div className="founder">
            <div className="founder-image">
              <img src={image1} alt="Lucy" />
            </div>
            <div className="founder-content">
              <h2>Meet Lucy - TEXT NEEDS UPDATING</h2>
              <p>
                With over 15 years of experience in the beauty industry, Lucy brings a wealth of 
                knowledge and passion to Blossom Advanced Beauty. Specialising in advanced skincare 
                treatments and aesthetic procedures, she is dedicated to helping clients achieve 
                their beauty goals with personalized care and attention.
              </p>
              <p>
                Lucy's expertise includes facial treatments, anti-aging procedures, and skin rejuvenation 
                techniques. She believes in enhancing natural beauty while maintaining the highest 
                standards of safety and professionalism.
              </p>
            </div>
          </div>
          
          <div className="founder">
            <div className="founder-content">
              <h2>Meet Hannah - TEXT NEEDS UPDATING</h2>
              <p>
                Hannah brings her extensive background in beauty therapy and cosmetic treatments to 
                create a truly exceptional salon experience. With a keen eye for detail and a 
                commitment to continuous learning, she stays at the forefront of the latest beauty 
                innovations and techniques.
              </p>
              <p>
                Specialising in lash extensions, brow treatments, and nail artistry, Hannah ensures 
                every client leaves feeling pampered and confident. Her warm personality and 
                professional approach make every visit a delightful experience.
              </p>
            </div>
            <div className="founder-image">
              <img src={image4} alt="Hannah" />
            </div>
          </div>
        </div>
      </section>

      {/* Location and Contact Section */}
      <section className="location-contact">
        <div className="location-info">
          <h2>Visit Our Salon</h2>
          <div className="google-map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.2691301468294!2d-1.0713215223979557!3d53.78469737241961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48793df0097b3bbd%3A0x937cf4edd6f72605!2sBlossom%20Advanced%20Beauty!5e0!3m2!1sen!2suk!4v1760463893723!5m2!1sen!2suk" width="600" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        
        <div className="contact-info">
          <h2>Contact Details</h2>
          <div className="contact-details">
            <div className="contact-item">
             <strong>📍 Address:</strong>
             <p>22 Finkle Street <br />
              Selby <br />
              YO8 4DS</p>
            </div>
            <div className="contact-item">
              <strong>📞 Phone:</strong>
              <p>01757 428005</p>
            </div>
            <div className="contact-item">
              <strong>✉️ Email:</strong>
              <p>blossomadvancedbeauty@gmail.com</p>
            </div>
            <div className="contact-item">
              <strong>🕒 Hours:</strong>
              <div className="hours-list">
                <div className="hour-item">
                  <span className="day">Monday:</span>
                  <span className="time">9:00 AM - 3:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Tuesday:</span>
                  <span className="time">9:00 AM - 7:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Wednesday:</span>
                  <span className="time">9:00 AM - 7:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Thursday:</span>
                  <span className="time">9:00 AM - 7:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Friday:</span>
                  <span className="time">9:00 AM - 7:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Saturday:</span>
                  <span className="time">8:00 AM - 3:00 PM</span>
                </div>
                <div className="hour-item">
                  <span className="day">Sunday:</span>
                  <span className="time">Closed</span>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Experience Blossom Advanced Beauty?</h2>
        <p>Book your appointment today and let our experts take care of you</p>
        <button className="book-now-btn large">Book Your Appointment</button>
      </section>
    </div>
  );
}

export default HomePage;