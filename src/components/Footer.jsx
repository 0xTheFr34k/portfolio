import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3 className="brand-name">{portfolioData.personal.name}</h3>
              <p className="brand-tagline">{portfolioData.personal.tagline}</p>
              <p className="brand-description">
                Building scalable backend systems and solving complex technical problems 
                with modern technologies and best practices.
              </p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    className="footer-link"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Icon name="email" size={16} />
                <a href={`mailto:${portfolioData.personal.email}`}>
                  {portfolioData.personal.email}
                </a>
              </div>

              <div className="contact-item">
                <Icon name="location" size={16} />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Follow Me</h4>
            <div className="social-links">
              {portfolioData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.platform !== 'Email' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.platform}
                >
                  {link.platform === 'LinkedIn' && (
                    <Icon name="linkedin" size={20} />
                  )}
                  {link.platform === 'GitHub' && (
                    <Icon name="github" size={20} />
                  )}
                  {link.platform === 'Fiverr' && (
                    <Icon name="fiverr" size={20} />
                  )}
                  {link.platform === 'Email' && (
                    <Icon name="email" size={20} />
                  )}
                </a>
              ))}
            </div>
            
            <button className="back-to-top" onClick={scrollToTop}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="19" x2="12" y2="5"/>
                <polyline points="5,12 12,5 19,12"/>
              </svg>
              Back to Top
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
            <p className="footer-note">
              Built with React & Vite. Designed with ❤️ for modern web experiences.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
