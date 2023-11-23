const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`❌❌❌ Assertion Failed:${array1} !== ${array2}`);
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`❌❌❌ Assertion Failed:${array1} !== ${array2}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed:${array1} === ${array2}`);
  return true;
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if(!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
}
const results = takeUntil(data, x => x > 6);
console.log(results);

assertArraysEqual([ 1, 2, 3, 4, 5, 6 ],results);
assertArraysEqual([ 1, 2, 3, 4, 5 ],results);