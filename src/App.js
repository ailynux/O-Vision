// src/App.js

import React from 'react';
import Visualizer from './components/Visualizer'; // Use the original Visualizer component
import ParticlesBackground from './components/ParticlesBackground'; // Correct path to ParticlesBackground
import './App.css'; // Import the CSS styles

const App = () => {
  return (
    <div className="App">
      <ParticlesBackground /> {/* Include the particles background here */}
      <header className="App-header">
        <h1>O-Vision</h1>
        <h2>Sorting Algorithm Visualizer</h2>
      </header>
      <main>
        <Visualizer /> {/* Main visualizer for sorting algorithms */}
      </main>
      <footer className="App-footer" style={{ backgroundImage: "url('/crypto.webp')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.85' }}>
        <div className="footer-content" style={{ backgroundColor: 'rgba(200, 200, 200, 0.7)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }}>
          <h2>Ailyn Diaz - Software Developer</h2>
          <p>💻 Dive into more of my projects!</p>
          <a className="App-link" href="https://github.com/ailynux" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" style={{ marginRight: '5px' }}></i>
            Explore My GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
