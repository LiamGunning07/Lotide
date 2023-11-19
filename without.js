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

function without(source, itemsToRemove) {
  // Use filter to create a new array with only elements not present in itemsToRemove
  return source.filter(item => !itemsToRemove.includes(item));
}

// Example usage:
console.log(without([1, 2, 3], [1])); // Output: [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // Output: ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);