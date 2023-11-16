const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  let result = array.slice(1);
  return result;
};
console.log(tail([1,2,3,4]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const words = [];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);