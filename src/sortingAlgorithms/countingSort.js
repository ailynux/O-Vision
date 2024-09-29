// src/sortingAlgorithms/countingSort.js

export const countingSort = (array) => {
    const animations = [];
    const max = Math.max(...array);
    const min = Math.min(...array);
    const count = new Array(max - min + 1).fill(0);
    const output = new Array(array.length);

    array.forEach(num => count[num - min]++);
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        animations.push([count[array[i] - min] - 1, array[i], "insert"]); // Insert animation
        output[count[array[i] - min] - 1] = array[i];
        count[array[i] - min]--;
    }
    return animations;
};
