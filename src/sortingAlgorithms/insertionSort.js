// src/sortingAlgorithms/insertionSort.js

export const insertionSort = (array) => {
    const animations = [];
    let n = array.length;

    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;

        animations.push([i, key, "highlight"]); // Highlight key

        while (j >= 0 && array[j] > key) {
            animations.push([j, j + 1, "compare"]); // Compare
            animations.push([j + 1, array[j], "swap"]); // Swap
            array[j + 1] = array[j];
            j--;
        }
        animations.push([j + 1, key, "insert"]); // Insert key
        array[j + 1] = key;

        animations.push([i, key, "reset"]); // Reset highlight
    }
    return animations;
};
