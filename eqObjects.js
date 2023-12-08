const eqArrays = require(`./eqArrays`);

const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key]))
        return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;