const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([1, 2, 3], [1, 1, 1,]));// => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true));