// Visualizer.js
// src/components/Visualizer.js

import React, { useState, useEffect } from "react";
import { insertionSort } from '../sortingAlgorithms/insertionSort';
import { selectionSort } from '../sortingAlgorithms/selectionSort';
import { bubbleSort } from '../sortingAlgorithms/bubbleSort';
import { cocktailSort } from '../sortingAlgorithms/cocktailSort';
import { countingSort } from '../sortingAlgorithms/countingSort';
import { gnomeSort } from '../sortingAlgorithms/gnomeSort';
import { quickSort } from '../sortingAlgorithms/quickSort';
import { heapSort } from '../sortingAlgorithms/heapSort';
import { bogoSort } from '../sortingAlgorithms/bogoSort';

import "../styles/Visualizer.css";

const algorithms = {
    InsertionSort: insertionSort,
    SelectionSort: selectionSort,
    CountingSort: countingSort,
    CocktailSort: cocktailSort,
    BubbleSort: bubbleSort,
    GnomeSort: gnomeSort,
    QuickSort: quickSort,
    HeapSort: heapSort,
    BogoSort: bogoSort
};

const Visualizer = () => {
    const [array, setArray] = useState([]);
    const [algorithm, setAlgorithm] = useState("InsertionSort");

    useEffect(() => {
        generateNewArray();
    }, []);

    const generateNewArray = () => {
        const newArray = Array.from({ length: 30 }, () =>
            Math.floor(Math.random() * 50) + 1 // Generate numbers between 1 and 50
        );
        console.log("Generated array:", newArray); // Log the generated array
        setArray(newArray);
    };

    const handleSort = () => {
        const animations = algorithms[algorithm](array.slice());
        console.log("Animations:", animations); // Log the animations
        animateSorting(animations);
    };

    const animateSorting = (animations) => {
        animations.forEach((animation, index) => {
            const [barIndex, newValue, action] = animation;
    
            // Ensure barIndex is valid before accessing the element
            setTimeout(() => {
                const arrayBars = document.getElementsByClassName("array-bar");
                if (barIndex < arrayBars.length) {
                    const barStyle = arrayBars[barIndex].style;
    
                    // Assign a vibrant color based on the action
                    if (action === "swap" || action === "insert") {
                        barStyle.height = `${newValue * 10}px`; // Update height
                        barStyle.backgroundColor = getRandomColor(); // Highlight for swaps
                    } else if (action === "compare") {
                        barStyle.backgroundColor = "#ffcc00"; // Highlight for comparison
                    }
    
                    // Reset color after a short time
                    setTimeout(() => {
                        barStyle.backgroundColor = "#66bb6a"; // Reset to green (main color)
                    }, 100); // Reset after 100ms
                }
            }, index * 100); // Delay between animations
        });
    };
    
    // Function to generate random colors
    const getRandomColor = () => {
        const colors = ["#ff5252", "#42a5f5", "#66bb6a", "#ab47bc", "#ffeb3b"]; // Red, Blue, Green, Purple, Yellow
        return colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
    };
    

    return (
        <div className="visualizer-container">
            <div className="array-container">
                {array.length > 0 ? (
                    array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{ height: `${value * 10}px` }} // Adjust height for clarity
                        >
                            <span className="bar-number">{value}</span> {/* Styled number */}
                        </div>
                    ))
                ) : (
                    <div>No data to display.</div> // Fallback message
                )}
            </div>
            <div className="controls futuristic-controls"> {/* Added futuristic-controls class */}
                <button className="interactive-button" onClick={generateNewArray}>Generate New Array</button>
                <button className="interactive-button" onClick={handleSort}>Sort</button>
                <select className="algorithm-select" onChange={(e) => setAlgorithm(e.target.value)}>
                    {Object.keys(algorithms).map((algo) => (
                        <option key={algo} value={algo}>
                            {algo}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
    
};

export default Visualizer;
