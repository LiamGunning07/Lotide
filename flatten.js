const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

function flatten(arr) {
  let flattenedArray = [];

  arr.forEach(element => {
    if (Array.isArray(element)) {
      // If the element is an array, recursively flatten it
      flattenedArray = flattenedArray.concat(flatten(element));
    } else {
      // If the element is not an array, add it to the flattenedArray
      flattenedArray.push(element);
    }
  });

  return flattenedArray;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedResult = flatten(nestedArray);

console.log(flattenedResult);
// Output: [1, 2, 3, 4, 5, 6]
assertArraysEqual(flattenedResult, [1, 2, 3, 4, 5, 6]);

module.exports = flatten;