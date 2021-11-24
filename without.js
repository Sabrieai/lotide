//carrying over assertArraysEqual
const assertArraysEqual = function(array1, array2) {
  console.log(eqArrays(array1, array2) === true ? "😃" : "🤢");
};

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


/*This function should take in a source array and a itemsToRemove array.
It should return a new array with only those elements from source that are not present in the itemsToRemove array.*/
const without = function(source,itemsToRemove) {
  const goodStuff = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      goodStuff.push(source[i]);
    }
  }
  return goodStuff;
};

console.log(without(['twix', 'razor', 'kitkat', 'almondjoy','licorice'], ['razor','licorice','almondjoy']));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));