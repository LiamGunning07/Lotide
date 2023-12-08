const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(['g', 'c', 't', 'm', 't'], results1);
assertArraysEqual(['g', 'c', 'T', 'm', 't'], results1);
assertArraysEqual(['g', 'c', 't', 'm', 't', 'c'], results1,);

module.exports = map;