const assertEqual = require('./assertEqual');

const tail = function(array) {
  let result = array.slice(1);
  return result;
};

module.exports = tail;