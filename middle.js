const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`❌❌❌ Assertion Failed:${array1} !== ${array2}`);
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`❌❌❌ Assertion Failed:${array1} !== ${array2}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed:${array1} === ${array2}`);
  return true;
};
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const middle = function(array) {
  const length = array.length;

  if (length <= 2) {
    // For arrays with one or two elements, return an empty array
    return [];
  }

  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // For arrays with an even number of elements, return the two middle elements
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    // For arrays with an odd number of elements, return the single middle element
    return [array[middleIndex]];
  }
};

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
