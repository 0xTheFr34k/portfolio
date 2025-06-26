import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-content">
          <div className="education-section">
            <h3 className="subsection-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Education
            </h3>
            
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
          
          <div className="certifications-section">
            <h3 className="subsection-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              Certifications
            </h3>
            
            <div className="certifications-grid">
              {portfolioData.certificates.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <div className="certification-header">
                    <div className="certification-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                  
                  <div className="certification-content">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">
                      <strong>{cert.issuer}</strong>
                      {cert.platform && <span> via {cert.platform}</span>}
                    </p>
                    {cert.description && (
                      <p className="cert-description">{cert.description}</p>
                    )}
                    
                    <div className="cert-skills">
                      {cert.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="awards-section">
            <h3 className="subsection-title">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                <path d="M4 22h16"/>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
              </svg>
              Awards & Achievements
            </h3>
            
            <div className="awards-grid">
              {portfolioData.awards.map((award) => (
                <div key={award.id} className="award-card">
                  <div className="award-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                      <path d="M4 22h16"/>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
                    </svg>
                  </div>
                  
                  <div className="award-content">
                    <h4 className="award-title">{award.title}</h4>
                    <p className="award-organization">{award.organization}</p>
                    <p className="award-description">{award.description}</p>
                    <div className="award-meta">
                      <span className="award-year">{award.year}</span>
                      <span className="award-type">{award.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Education;
