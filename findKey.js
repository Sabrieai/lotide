// for the test cases
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
  }
};

// update findKeyByValue but let it work on objects within objects
// using callback in conditional instead of value
//return key of ourObject which also is an object

const findKey = function(ourObject,callback) {
  for (const obj in ourObject) {
    if (callback(ourObject[obj])) {
      return obj;
    }
  }
};

// test case 1 : checking to see if noma has 2 stars
assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma");

// test case 2 : Mrs.Park is checking her object of lockers to return the first empty locker in her school.
// the findkey returned 1a3, she wants to check it agaist her assertEquals for good measure

assertEqual((findKey({
  "1a1": { locker: "full"},
  "1a2": { locker: "full"},
  "1a3": { locker: "empty"},
  "1a4": { locker: "full"},
  "1a5": { locker: "broken"},
  "1a6": { locker: "full" }
}, x => x.locker === "empty")), "1a3");

