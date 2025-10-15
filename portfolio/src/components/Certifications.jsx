import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-content">
          <div className="certifications-grid">
            {portfolioData.certificates.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="certification-header">
                  <div className="certification-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          
          {portfolioData.awards && portfolioData.awards.length > 0 && (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
