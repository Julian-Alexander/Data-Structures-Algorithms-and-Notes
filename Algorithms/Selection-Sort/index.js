/* Selection Sort
Write a function that assumes the first element in the array 
is also the lowest value. Then, attempt to prove this assumption
wrong. If there is a lower value, record it and place that value at the index of the first
assumed lowest value. Continue to iterate through until the entire array is sorted, lowest to highest.
Example: [50, -10, 0, -5, 20, 10, 1] = [-10, -5, 0, 1, 10, 20, 50];
Testing: `jest Selection-Sort/test.js`
*/

function selectionSort(arr) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      /* Assume that the element at index i is
         the lowest value in the array */
      let indexOfMin = i;
      // Now we'll try to find a value less than `indexOfMin`
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[indexOfMin]) { // If a lesser value exists
          indexOfMin = j; // Update `indexOfMin`
        }
      }
      /* If the index of `indexOfMin` and
         the the index of the current element
         are not the same, swap them. This way for
         each iteration, the value of `i` remains the lowest
         element in the array. Thus sorting the array from left
         to right, lowest to highest.
      */
      if (indexOfMin !== i) { // not the same?
        let lesser = arr[indexOfMin];
        arr[indexOfMin] = arr[i];
        arr[i] = lesser;
      }
    }
    // return the sorted array
    return arr;
  }

module.exports = selectionSort;
