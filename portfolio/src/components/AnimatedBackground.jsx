import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating code elements
    const codeSnippets = [
      'const developer = new SoftwareEngineer();',
      'function buildAmazingThings() { return innovation; }',
      'class Problem { solve() { return solution; } }',
      'npm install creativity',
      'git commit -m "Building the future"',
      'docker run --name innovation',
      'SELECT * FROM possibilities;',
      'import { passion } from "coding";',
      'while(learning) { grow(); }',
      'async function createMagic() { await inspiration; }'
    ];

    // Create floating code blocks
    const createCodeBlock = (text, delay = 0) => {
      const codeBlock = document.createElement('div');
      codeBlock.className = 'floating-code';
      codeBlock.textContent = text;
      codeBlock.style.left = Math.random() * 100 + '%';
      codeBlock.style.animationDelay = delay + 's';
      codeBlock.style.animationDuration = (15 + Math.random() * 10) + 's';
      container.appendChild(codeBlock);

      // Remove element after animation
      setTimeout(() => {
        if (codeBlock.parentNode) {
          codeBlock.parentNode.removeChild(codeBlock);
        }
      }, 25000);
    };

    // Create geometric shapes
    const createGeometricShape = (type, delay = 0) => {
      const shape = document.createElement('div');
      shape.className = `geometric-shape ${type}`;
      shape.style.left = Math.random() * 100 + '%';
      shape.style.animationDelay = delay + 's';
      shape.style.animationDuration = (20 + Math.random() * 15) + 's';
      container.appendChild(shape);

      setTimeout(() => {
        if (shape.parentNode) {
          shape.parentNode.removeChild(shape);
        }
      }, 35000);
    };

    // Create binary particles
    const createBinaryParticle = (delay = 0) => {
      const particle = document.createElement('div');
      particle.className = 'binary-particle';
      particle.textContent = Math.random() > 0.5 ? '1' : '0';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = delay + 's';
      particle.style.animationDuration = (10 + Math.random() * 8) + 's';
      particle.style.fontSize = (12 + Math.random() * 8) + 'px';
      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 18000);
    };

    // Create circuit lines
    const createCircuitLine = (delay = 0) => {
      const line = document.createElement('div');
      line.className = 'circuit-line';
      line.style.left = Math.random() * 100 + '%';
      line.style.animationDelay = delay + 's';
      line.style.animationDuration = (12 + Math.random() * 8) + 's';
      line.style.width = (50 + Math.random() * 100) + 'px';
      container.appendChild(line);

      setTimeout(() => {
        if (line.parentNode) {
          line.parentNode.removeChild(line);
        }
      }, 20000);
    };

    // Animation intervals
    const codeInterval = setInterval(() => {
      const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      createCodeBlock(randomSnippet, Math.random() * 2);
    }, 3000);

    const shapeInterval = setInterval(() => {
      const shapes = ['cube', 'pyramid', 'sphere', 'hexagon'];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      createGeometricShape(randomShape, Math.random() * 3);
    }, 4000);

    const binaryInterval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        createBinaryParticle(Math.random() * 2);
      }
    }, 2000);

    const circuitInterval = setInterval(() => {
      createCircuitLine(Math.random() * 1);
    }, 5000);

    // Initial elements
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        createCodeBlock(codeSnippets[i], i * 0.5);
        createGeometricShape(['cube', 'pyramid', 'sphere'][i % 3], i * 0.8);
        createBinaryParticle(i * 0.3);
        createCircuitLine(i * 0.6);
      }
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(codeInterval);
      clearInterval(shapeInterval);
      clearInterval(binaryInterval);
      clearInterval(circuitInterval);
    };
  }, []);

  return (
    <div className="animated-background" ref={containerRef}>
      {/* Static background elements */}
      <div className="grid-overlay"></div>
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      
      {/* Pulsing tech icons */}
      <div className="tech-icon icon-1">{'{ }'}</div>
      <div className="tech-icon icon-2">{'< />'}</div>
      <div className="tech-icon icon-3">{'λ'}</div>
      <div className="tech-icon icon-4">{'∞'}</div>
      <div className="tech-icon icon-5">{'⚡'}</div>
    </div>
  );
};

export default AnimatedBackground;
