const assertEqual = require('../assertEqual');
const tail = require(`../tail`);

console.log(tail([1,2,3,4]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const words = ['hi', 'john', 'deere'];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);