const middle = function(array) {
  const length = array.length;

  if (length <= 2) {
    // For arrays with one or two elements, return an empty array
    return [];
  }

  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // For arrays with an even number of elements, return the two middle elements
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    // For arrays with an odd number of elements, return the single middle element
    return [array[middleIndex]];
  }
};
module.exports = middle;
