// src/components/TestVisualizer.js

// src/components/TestVisualizer.js

import React, { useState, useEffect } from "react";
import "../styles/Visualizer.css"; // Ensure your CSS is applied

const TestVisualizer = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        generateNewArray();
    }, []);

    const generateNewArray = () => {
        const newArray = Array.from({ length: 30 }, () =>
            Math.floor(Math.random() * 100)
        );
        console.log("Generated array:", newArray); // Check the generated array in console
        setArray(newArray);
    };

    return (
        <div className="visualizer-container">
            <h2>Random Array Visualizer</h2>
            <div className="array-container">
                {array.length > 0 ? (
                    array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{ height: `${value * 5}px` }} // Adjust height for clarity
                        >
                            {value} {/* Display the value on each bar */}
                        </div>
                    ))
                ) : (
                    <div>No data to display.</div> // Fallback message
                )}
            </div>
            <div className="controls">
                <button onClick={generateNewArray}>Generate New Array</button>
            </div>
        </div>
    );
};

export default TestVisualizer;
