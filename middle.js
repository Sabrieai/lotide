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

const assertArraysEqual = function(array1, array2) {
  console.log(eqArrays(array1, array2) === true ? "😃" : "🤢");
};

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

console.log(middle([1,7,3,5]));