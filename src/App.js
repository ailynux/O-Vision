import React from 'react';
import { FaRobot, FaRocket, FaCode } from 'react-icons/fa';
import Visualizer from './components/Visualizer'; // Original Visualizer component
import NavBar from './components/NavBar'; // Navbar component
import MatrixBackground from './components/MatrixBackground'; // Import the MatrixBackground component
import AlgorithmsSection from './components/AlgorithmsSection';
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
            
            {/* New Cards */}
            <div className="feature">
                <i className="fas fa-lightbulb"></i> {/* Icon for Innovation */}
                <h3>Innovative Solutions</h3>
                <p>Discover creative and modern solutions to algorithm challenges with cutting-edge visual tools.</p>
            </div>
            <div className="feature">
              <i className="fas fa-user-astronaut"></i>
              <h3>Meet the Creator</h3>
              <p>
                Hi! I'm Ailyn Diaz, the creator of O-Vision. I'm passionate about building innovative apps and bringing ideas to life. With a love for full-stack development and a knack for problem-solving, I strive to simplify complex concepts and make technology accessible to everyone.
              </p>
            </div>
            <div className="feature">
                <i className="fas fa-users"></i> {/* Icon for Community */}
                <h3>Join the Community</h3>
                <p>Connect with a community of learners and developers who are exploring the world of algorithms.</p>
            </div>
        </div>
    </div>
</section>



        <Visualizer /> {/* Main visualizer for sorting algorithms */}

      
        {/* Algorithms Section */}
        <AlgorithmsSection />
      </main>

  {/* Footer */}
<footer className="App-footer">
  <div className="footer-container">
    <div className="footer-content">
      <h2>Ailyn Diaz - Software Developer</h2>
      <p>💻 Dive into more of my projects and connect with me!</p>
      <a className="App-link" href="https://github.com/ailynux" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i> Explore My GitHub
      </a>
    </div>

    <div className="footer-media-links">
      <h3>Connect with Me</h3>
      <ul>
        <li>
          <a href="https://linkedin.com/in/ailyndiaz01" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/ailynux" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-code"></i> LeetCode
          </a>
        </li>
        <li>
          <a href="https://exercism.org/profiles/ailynux" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-dumbbell"></i> Exercism
          </a>
        </li>
        <li>
          <a href="https://github.com/ailynux" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Ailyn Diaz. All Rights Reserved.</p>
    <a href="https://ailynux.github.io" target="_blank" rel="noopener noreferrer" className="portfolio-link">
        Check out my Portfolio!
      </a>
  </div>
</footer>


    </div>
  );
}

export default App;
