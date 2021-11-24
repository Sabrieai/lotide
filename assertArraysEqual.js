const assertArraysEqual = function(array1, array2) {
  console.log(eqArrays(array1, array2) === true ? "😃" : "🤢");
};

// Compare each element of the two arrays in order
// Determine if true or false
// If all true, return true
// If at least one is false, return false
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

console.log(assertArraysEqual([2, 2, 3], [2, 2, 3]));

