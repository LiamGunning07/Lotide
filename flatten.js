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