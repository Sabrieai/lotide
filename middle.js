const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//Implement middle which will take in an array and return the middle-most element(s) of the given array.
// be able to count the elements and push the middle one
//one or two elements: Return an empty array.

const middle = function(arr) {
  const results = [];
  if (arr.length <= 2) {
    return results;
  }
  if (arr.length % 2 === 0) {
    // code for when length is even
    let value1 = Math.floor(Number(arr.length / 2));
    results.push(arr[value1 - 1]);
    results.push(arr[value1]);
  } else {
    let value = Math.ceil(Number(arr.length / 2));
    results.push(arr[value - 1]);
  }
  return results;
};

module.exports = middle;
