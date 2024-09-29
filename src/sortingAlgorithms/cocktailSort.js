// src/sortingAlgorithms/cocktailSort.js

export const cocktailSort = (array) => {
    const animations = [];
    let isSorted = true;
    let start = 0;
    let end = array.length - 1;

    while (isSorted) {
        isSorted = false;
        for (let i = start; i < end; i++) {
            animations.push([i, i + 1, "compare"]); // Compare animation
            if (array[i] > array[i + 1]) {
                animations.push([i, array[i + 1], "swap"]); // Swap animation
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                isSorted = true;
            }
        }
        if (!isSorted) break;
        isSorted = false;
        end--;
        for (let i = end - 1; i >= start; i--) {
            animations.push([i, i + 1, "compare"]); // Compare animation
            if (array[i] > array[i + 1]) {
                animations.push([i, array[i + 1], "swap"]); // Swap animation
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                isSorted = true;
            }
        }
        start++;
    }
    return animations;
};
