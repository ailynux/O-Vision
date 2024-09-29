// src/sortingAlgorithms/heapSort.js

export const heapSort = (array) => {
    const animations = [];
    const n = array.length;

    const heapify = (arr, n, i) => {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;

        if (largest !== i) {
            animations.push([i, arr[largest], "swap"]); // Swap animation
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    };

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        animations.push([0, array[i], "swap"]); // Swap animation
        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, i, 0);
    }
    return animations;
};
