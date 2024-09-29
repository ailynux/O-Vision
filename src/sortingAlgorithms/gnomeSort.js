// src/sortingAlgorithms/gnomeSort.js

export const gnomeSort = (array) => {
    const animations = [];
    let index = 0;

    while (index < array.length) {
        if (index === 0 || array[index] >= array[index - 1]) {
            index++;
        } else {
            animations.push([index, index - 1, "swap"]); // Swap animation
            [array[index], array[index - 1]] = [array[index - 1], array[index]];
            index--;
        }
    }
    return animations;
};
