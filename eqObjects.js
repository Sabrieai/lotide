//back at it again with the assertEqual 👟👟👟
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function that will iterate through keys then itearate through the values
// must === or it will return 🤢🤢🤢

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





