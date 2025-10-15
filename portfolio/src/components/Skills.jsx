import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icons';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programmingLanguages');

  const skillCategories = {
    programmingLanguages: {
      title: 'Programming Languages',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
      skills: portfolioData.skills.programmingLanguages
    },
    backendDevelopment: {
      title: 'Backend Development',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      skills: portfolioData.skills.backendDevelopment
    },
    cloudPlatforms: {
      title: 'Cloud Platforms',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ),
      skills: portfolioData.skills.cloudPlatforms
    },
    dataProcessing: {
      title: 'Data Processing',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      skills: portfolioData.skills.dataProcessing
    },
    monitoringSecurity: {
      title: 'Monitoring & Security',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      skills: portfolioData.skills.monitoringSecurity
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return '#22c55e';
      case 'Intermediate':
        return '#f59e0b';
      case 'Beginner':
        return '#ef4444';
      default:
        return '#64748b';
    }
  };

  const getLevelPercentage = (level) => {
    switch (level) {
      case 'Advanced':
        return 90;
      case 'Intermediate':
        return 70;
      case 'Beginner':
        return 40;
      default:
        return 50;
    }
  };

  const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase();
    if (name.includes('python')) return 'python';
    if (name.includes('javascript')) return 'javascript';
    if (name.includes('typescript')) return 'typescript';
    if (name.includes('go')) return 'go';
    if (name.includes('c++') || name.includes('cpp')) return 'cpp';
    if (name.includes('c/c++')) return 'c';
    if (name.includes('php')) return 'php';
    if (name.includes('bash')) return 'bash';
    if (name.includes('aws')) return 'aws';
    if (name.includes('docker')) return 'docker';
    if (name.includes('kubernetes')) return 'kubernetes';
    if (name.includes('mongodb')) return 'mongodb';
    if (name.includes('node')) return 'nodejs';
    if (name.includes('rest') || name.includes('api')) return 'api';
    if (name.includes('microservices')) return 'microservices';
    if (name.includes('distributed')) return 'server';
    if (name.includes('airflow')) return 'code';
    if (name.includes('rabbitmq')) return 'server';
    if (name.includes('elk')) return 'elasticsearch';
    if (name.includes('prometheus')) return 'prometheus';
    if (name.includes('ids') || name.includes('siem') || name.includes('suricata')) return 'security';
    return 'code'; // default icon
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-content">
          <div className="skills-categories">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                <div className="category-icon">
                  {category.icon}
                </div>
                <span className="category-title">{category.title}</span>
              </button>
            ))}
          </div>
          
          <div className="skills-display">
            <div className="skills-header">
              <h3 className="skills-category-title">
                {skillCategories[activeCategory].title}
              </h3>
              <p className="skills-description">
                Here are the technologies and tools I work with in this category.
              </p>
            </div>
            
            <div className="skills-grid">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <div className="skill-info">
                      <Icon name={getSkillIcon(skill.name)} size={32} className="skill-icon" />
                      <h4 className="skill-name">{skill.name}</h4>
                    </div>
                    {skill.level && (
                      <span
                        className="skill-level"
                        style={{ color: getLevelColor(skill.level) }}
                      >
                        {skill.level}
                      </span>
                    )}
                  </div>
                  
                  {skill.level && (
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ 
                            width: `${getLevelPercentage(skill.level)}%`,
                            backgroundColor: getLevelColor(skill.level)
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {skill.years && (
                    <div className="skill-experience">
                      <span className="experience-text">
                        {skill.years} year{skill.years > 1 ? 's' : ''} experience
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
