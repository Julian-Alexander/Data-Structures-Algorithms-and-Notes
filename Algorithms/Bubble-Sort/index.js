/* Bubble Sort
Find the largest element in the given array and
move it to the far right of the array until the array
is sorted. Return the sorted array.
Example: [50, -10, 0, -5, 20, 10, 1] = [-10, -5, 0, 1, 10, 20, 50];
Testing: `jest Bubble-Sort/test.js`
*/

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let lesser = arr[j + 1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;