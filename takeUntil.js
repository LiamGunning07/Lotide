const assertArraysEqual = require('./assertArraysEqual');

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};
const results = takeUntil(data, x => x > 6);
console.log(results);

assertArraysEqual([ 1, 2, 3, 4, 5, 6 ],results);
assertArraysEqual([ 1, 2, 3, 4, 5 ],results);

moodule.exports = takeUntil; 