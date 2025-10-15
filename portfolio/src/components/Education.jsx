import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-content">
          <div className="education-grid">
            {portfolioData.education.map((edu) => (
              <div key={edu.id} className="education-card">
                <div className="education-header">
                  <div className="education-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <div className="education-status">
                    <span className={`status-badge ${edu.status.toLowerCase().replace(' ', '-')}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                <div className="education-info">
                  <h4 className="degree">{edu.degree}</h4>
                  <h5 className="institution">{edu.institution}</h5>
                  <div className="education-meta">
                    <span className="duration">{edu.duration}</span>
                    <span className="location">{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
