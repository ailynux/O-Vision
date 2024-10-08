// src/sortingAlgorithms/bubbleSort.js

export const bubbleSort = (array) => {
    const animations = [];
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            animations.push([j, j + 1, "compare"]); // Compare
            if (array[j] > array[j + 1]) {
                animations.push([j, array[j + 1], "swap"]); // Swap
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return animations;
};
