const assertArraysEqual = require(`../assertArraysEqual`);
const eqArrays = require(`../eqArrays`);
const middle = require(`../middle`);

// Example usage:
console.log(middle([1, 2, 3]));      // Output: [2]
console.log(middle([1, 2, 3, 4, 5])); // Output: [3]
console.log(middle([1, 2, 3, 4]));    // Output: [2, 3]
console.log(middle([1]));             // Output: []
console.log(middle([1, 2]));          // Output: []
// Example usage:
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);