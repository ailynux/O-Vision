// src/sortingAlgorithms/bogoSort.js
export const bogoSort = (array) => {
    const animations = [];
    const MAX_SHUFFLES = 1000; // Maximum shuffles to prevent freezing
    const isSorted = (arr) => arr.every((val, i, arr) => !i || arr[i - 1] <= val);

    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            animations.push([i, arr[j], "swap"]); // Log swap animation
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    };

    let shuffleCount = 0;
    
    // Perform sorting until sorted or maximum shuffle limit reached
    while (!isSorted(array) && shuffleCount < MAX_SHUFFLES) {
        shuffle(array);
        animations.push([...array, "compare"]); // Log current state after shuffling
        shuffleCount++;
    }

    if (shuffleCount === MAX_SHUFFLES) {
        console.warn("Bogo Sort reached the maximum shuffle limit, stopping to prevent freezing.");
    }

    return animations;
};
