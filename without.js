const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  // Use filter to create a new array with only elements not present in itemsToRemove
  return source.filter(item => !itemsToRemove.includes(item));
};

// Example usage:
console.log(without([1, 2, 3], [1])); // Output: [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // Output: ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;