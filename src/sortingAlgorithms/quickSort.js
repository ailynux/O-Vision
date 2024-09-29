// src/sortingAlgorithms/quickSort.js

export const quickSort = (array) => {
    const animations = [];
    const quickSortHelper = (arr, low, high) => {
        if (low < high) {
            let pivotIndex = partition(arr, low, high);
            quickSortHelper(arr, low, pivotIndex - 1);
            quickSortHelper(arr, pivotIndex + 1, high);
        }
    };

    const partition = (arr, low, high) => {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            animations.push([j, high, "compare"]); // Compare animation
            if (arr[j] < pivot) {
                i++;
                animations.push([i, arr[j], "swap"]); // Swap animation
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        animations.push([i + 1, arr[high], "swap"]); // Swap pivot animation
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    };

    quickSortHelper(array, 0, array.length - 1);
    return animations;
};
