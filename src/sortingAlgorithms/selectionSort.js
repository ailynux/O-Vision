// src/sortingAlgorithms/selectionSort.js

export const selectionSort = (array) => {
    const animations = [];
    let n = array.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            animations.push([j, minIndex, "compare"]); // Compare animation
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            animations.push([i, array[minIndex], "swap"]); // Swap animation
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }
    return animations;
};
