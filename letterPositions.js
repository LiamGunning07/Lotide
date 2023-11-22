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

const letterPosition = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character.match(/[a-z]/i)) {
      // Check if the character is already in the results, if not, initialize it as an array
      if (!(character in results)) {
        results[character] = [];
      }
      // Add the current position to the array
      results[character].push(i);
    }
  }
  return results;
};

console.log(letterPosition('hello'));
assertArraysEqual(letterPosition("hello").e, [1]);
