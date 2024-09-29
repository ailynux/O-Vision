// src/components/TestParticles.js

import React from 'react';
import ParticlesBackground from './ParticlesBackground';

const TestParticles = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <ParticlesBackground />
      <h1 style={{ position: 'relative', zIndex: 1, color: '#fff' }}>Test Particles</h1>
      <p style={{ position: 'relative', zIndex: 1, color: '#fff' }}>If you see particles behind this text, it works!</p>
    </div>
  );
};

export default TestParticles;
