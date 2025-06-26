import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="timeline">
          {portfolioData.experience.map((job, index) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < portfolioData.experience.length - 1 && (
                  <div className="timeline-line"></div>
                )}
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3 className="position">{job.position}</h3>
                    <h4 className="company">{job.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="duration">{job.duration}</span>
                    <span className="location">{job.location}</span>
                    <span className={`job-type ${job.type.toLowerCase()}`}>
                      {job.type}
                    </span>
                  </div>
                </div>
                
                <div className="experience-content">
                  <ul className="achievements">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="technologies">
                    <span className="tech-label">Technologies:</span>
                    <div className="tech-tags">
                      {job.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
