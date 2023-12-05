const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array.length >= 0) {
    return array[0];
  } else {
    console.log(undefined);
  }
};
module.exports = head;
// tests moved under test directory