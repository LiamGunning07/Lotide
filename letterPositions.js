const assertArraysEqual = require('./assertArraysEqual');

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

moodule.exports = letterPosition;