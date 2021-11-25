//back at it again with the assertEqual 👟👟👟
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// function that will iterate through keys then itearate through the values
// must === or it will return 🤢
// going to comment out my primitive code to make way for the array code
/*
const eqObjects = function(object1, object2) {
// first see if they have the same length
  const onesKeys = Object.keys(object1);
  const twosKeys = Object.keys(object2);
  if (onesKeys.length !== twosKeys.length) {
    return false;
  } else {
    for (const key in object1) {
      if (object1[key] === object2[key]) {
        return true;
      } else {
        return false;
      }
    }
  }


};

const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {a:1, b:2, c: 3};

assertEqual(eqObjects(obj1,obj2), true);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
*/

const eqObjects = function(object1, object2) {
  const onesKeys = Object.keys(object1);
  const twosKeys = Object.keys(object2);
  if (onesKeys.length === twosKeys.length) {
    for (const key of onesKeys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // if it returns true cool if it returns false thats cool too
        return (eqArrays(object1[key],object2[key]));
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  return false;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), false); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


