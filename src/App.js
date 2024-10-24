import React from 'react';
import { FaRobot, FaRocket, FaCode } from 'react-icons/fa';
import Visualizer from './components/Visualizer'; // Original Visualizer component
import NavBar from './components/NavBar'; // Navbar component
import MatrixBackground from './components/MatrixBackground'; // Import the MatrixBackground component
import './App.css'; // Import the CSS styles

const App = () => {
  return (
    <div className="App">
      <MatrixBackground /> {/* Matrix Background component */}
      <NavBar /> {/* Navbar component */}

      {/* Crazy Interactive Header */}
      <header className="App-header">
        <h1>
          <span className="neon-text">O-Vision</span> 
          <FaRocket className="header-icon" />
        </h1>
        <h2>
          <FaRobot className="header-icon" /> Sorting Algorithm Visualizer{' '}
          <FaCode className="header-icon" />
        </h2>
      </header>

      {/* Main Content */}
      <main>

     {/* About Section */}
<section id="about" className="about-section">
    <div className="about-card">
        <div className="about-card-header">
            <h2>About O-Vision</h2>
            <p>
                O-Vision is a platform that helps you visualize complex sorting algorithms.
                Explore how different algorithms work step by step in a futuristic and intuitive environment!
            </p>
        </div>
        <div className="about-card-content">
            <div className="feature">
                <i className="fas fa-chart-line"></i> {/* New icon */}
                <h3>Big O Notation</h3>
                <p>Understand the time complexity and performance of algorithms with visual breakdowns.</p>
            </div>
            <div className="feature">
                <i className="fas fa-laptop-code"></i>
                <h3>Code Examples</h3>
                <p>Get access to interactive code snippets for each algorithm and experiment with them in real-time.</p>
            </div>
            <div className="feature">
                <i className="fas fa-cogs"></i>
                <h3>Algorithm Visualizer</h3>
                <p>Watch algorithms in action, step by step, and see how they sort and manage data efficiently.</p>
            </div>
            <div className="feature">
                <i className="fas fa-user-astronaut"></i>
                <h3>Meet the Creator</h3>
                <p>Hi! I'm [Your Name], the creator of O-Vision. I love building cool apps and simplifying complex concepts!</p>
            </div>
        </div>
    </div>
</section>




        <Visualizer /> {/* Main visualizer for sorting algorithms */}

      
        {/* Algorithms Section */}
        <section id="algorithms" className="algorithms-section">
          <h2>Sorting Algorithms</h2>
          <p>
            Experience visualizations of popular sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, and more — all with a cyberpunk twist!
          </p>
        </section>

      </main>

      {/* Footer */}
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
