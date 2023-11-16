const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array.length >= 0) {
    return array[0];
  } else {
    console.log(undefined);
  }
};
assertEqual(head([]));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");