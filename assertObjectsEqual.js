// here comes the copy-paste gang
// the founder
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
  }
};

// The first recruit and right-hand-man
const eqArrays = function(array1, array2) {
  if (array2.length !== array1.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// newwest addition to the gang!
const eqObjects = function(object1, object2) {
  const onesKeys = Object.keys(object1);
  const twosKeys = Object.keys(object2);
  if (onesKeys.length === twosKeys.length) {
    for (const key of onesKeys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return (eqArrays(object1[key],object2[key]));
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};


// Rebirth of the founder through the newest member

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😃😃😃Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🤢🤢🤢Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//Test the new recruits loyalty
// Tester code to see if the function works

assertObjectsEqual({ a: "hey", b: "2" },{ a: "hey", b: "2" }); // pass
assertObjectsEqual({ c: true, d: "2" },{ d: 2, c: true }); // fail b/c type
assertObjectsEqual({ c: "1", d: "2", f: [null] },{ d: "2", c: "1", f: null}); // failed becasue type


