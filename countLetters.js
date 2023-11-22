const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:${actual} !== ${expected}`);
  }

};
const countLetters = function(string) {
  const letterCount = {};

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    // RegExp to check the character is a letter (a-z or A-Z)
    if (character.match(/[a-z]/i)) {
      // Convert to lowercase
      let lowerCaseLetter = character.toLowerCase();
  
      if (letterCount[lowerCaseLetter]) {
        // If the letter exists in the object, increment the count
        letterCount[lowerCaseLetter] += 1;
      } else {
        // If the letter doesn't exist in the object, initialize the count to 1
        letterCount[lowerCaseLetter] = 1;
      }
    }
  }
  return letterCount;
};
console.log(countLetters('Lighthouse in the house'));