const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual([2, 2, 3], [2, 2, 3]));

const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));