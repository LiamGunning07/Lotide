const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:${actual} !== ${expected}`);
  }

};

// TEST CODE MOVED UNDER TEST/ASSERTEQUALTEST.JS

module.exports = assertEqual;