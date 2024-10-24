import React from 'react';
import "../styles/AlgorithmsSection.css"; // Ensure your CSS is applied

const AlgorithmsSection = () => {
  return (
    <section id="algorithms" className="algorithms-section">
      <div className="algorithms-header">
        <h2>Sorting Algorithms</h2>
        <p>
          Experience visualizations of popular sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, and more — all with a cyberpunk twist!
        </p>
      </div>

      <div className="algorithms-cards">
        <div className="algorithm-card">
          <i className="fas fa-sort-numeric-up-alt"></i>
          <h3>Bubble Sort</h3>
          <p>A step-by-step, simple sorting algorithm visualized with colorful bars and smooth animations.</p>
        </div>

        <div className="algorithm-card">
          <i className="fas fa-sort-amount-up"></i>
          <h3>Merge Sort</h3>
          <p>Watch this efficient, divide-and-conquer sorting algorithm in real time.</p>
        </div>

        <div className="algorithm-card">
          <i className="fas fa-sort-alpha-down"></i>
          <h3>Quick Sort</h3>
          <p>Experience the speed and efficiency of Quick Sort with its recursive steps and pivoting elements.</p>
        </div>

        <div className="algorithm-card">
          <i className="fas fa-random"></i>
          <h3>Heap Sort</h3>
          <p>Visualize the heap structure and how it’s used to efficiently sort elements.</p>
        </div>
      </div>
    </section>
  );
};

export default AlgorithmsSection;
