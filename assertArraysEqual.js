const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  console.log(eqArrays(array1, array2) === true ? "😃" : "🤢");
};

module.exports = assertArraysEqual;

