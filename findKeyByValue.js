const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  for (const key in object) {
    // Check if the current key's value is equal to the given value
    if (object[key] === value) {
      // If found, return the key
      return key;
    }
  }
  // If no key with the given value is found, return undefined
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
module.exports = findKeyByValue;