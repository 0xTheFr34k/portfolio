import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Testimonials.css';

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCards, setExpandedCards] = useState(new Set());
  
  // Get unique categories from testimonials
  const categories = ['All', ...new Set(portfolioData.testimonials.map(t => t.projectCategory))];
  
  // Filter testimonials based on selected category
  const filteredTestimonials = selectedCategory === 'All' 
    ? portfolioData.testimonials 
    : portfolioData.testimonials.filter(t => t.projectCategory === selectedCategory);

  // Calculate overall stats
  const totalReviews = portfolioData.testimonials.length;
  const averageRating = portfolioData.testimonials.reduce((sum, t) => sum + t.rating, 0) / totalReviews;
  const fiveStarReviews = portfolioData.testimonials.filter(t => t.rating === 5).length;
  const satisfactionRate = Math.round((fiveStarReviews / totalReviews) * 100);
  const repeatClients = portfolioData.testimonials.filter(t => t.isRepeatClient).length;
  const uniqueCountries = new Set(portfolioData.testimonials.map(t => t.clientCountry)).size;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        ★
      </span>
    ));
  };

  const getInitials = (name) => {
    return name.split('_')[0].substring(0, 2).toUpperCase();
  };

  const toggleExpanded = (testimonialId) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(testimonialId)) {
        newSet.delete(testimonialId);
      } else {
        newSet.add(testimonialId);
      }
      return newSet;
    });
  };

  const isExpanded = (testimonialId) => expandedCards.has(testimonialId);

  const shouldShowExpandButton = (text) => text.length > 150;

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Clients Feedback</h2>



        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {filteredTestimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-top">
                <div className="testimonial-header">
                  <div className="client-info">
                    <div className="client-avatar">
                      {getInitials(testimonial.clientName)}
                    </div>
                    <div className="client-details">
                      <div className="client-name-row">
                        <h4 className="client-name">{testimonial.clientName}</h4>
                        {testimonial.isRepeatClient && (
                          <span className="repeat-client-badge">Repeat Client</span>
                        )}
                      </div>
                      <div className="client-location">
                        <span className="flag">{testimonial.clientFlag}</span>
                        <span className="country">{testimonial.clientCountry}</span>
                      </div>
                    </div>
                  </div>
                  <div className="review-meta">
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                      <span className="rating-number">{testimonial.rating}</span>
                    </div>
                    <div className="review-date">{testimonial.reviewDate}</div>
                  </div>
                </div>

                <div className="project-category">
                  <span className="category-tag">{testimonial.projectCategory}</span>
                  {testimonial.verified && (
                    <span className="verified-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4"/>
                        <circle cx="12" cy="12" r="9"/>
                      </svg>
                      Verified
                    </span>
                  )}
                </div>

                <div className="review-text-container">
                  <p className={`review-text ${!isExpanded(testimonial.id) && shouldShowExpandButton(testimonial.reviewText) ? 'collapsed' : ''}`}>
                    "{testimonial.reviewText}"
                  </p>
                  {shouldShowExpandButton(testimonial.reviewText) && (
                    <button
                      className="expand-btn"
                      onClick={() => toggleExpanded(testimonial.id)}
                    >
                      {isExpanded(testimonial.id) ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>
              </div>

              <div className="testimonial-bottom">
                <div className="project-details">
                  <strong>Project:</strong> {testimonial.projectDetails}
                </div>

                {(testimonial.helpful.yes > 0 || testimonial.helpful.no > 0) && (
                  <div className="helpful-section">
                    <span className="helpful-text">
                      Helpful? {testimonial.helpful.yes} Yes • {testimonial.helpful.no} No
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="testimonials-cta">
          <h3>Ready to Work Together?</h3>
          <p>Join these satisfied clients and let's build something amazing together!</p>
          <div className="cta-buttons">
            <a 
              href={portfolioData.personal.fiverr} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-btn primary"
            >
              Hire Me on Fiverr
            </a>
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="cta-btn secondary"
            >
              Contact Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
