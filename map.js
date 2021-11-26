//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

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

// checks if 2 arrays are equal usinf eqArrays
const assertArraysEqual = function(array1, array2) {
  console.log(eqArrays(array1, array2) === true ? "😃" : "🤢");
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// testcase 1: we expect to see 😃 becuase map returns an array of word[0] and this is what the terminal returned when I ran map
const words = [ "We", "finna", "see", "if", "this", "badboy", "works"];
const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1,['W', 'f', 's', 'i', 't', 'b', 'w']));

// testcase 2: Angela claims that Becky stole her famous peach cobbler recipe word for word. <= where map comes in
//It has been in her family for generations and Becky says it came to her in a dream.
//The following arrays are sniippets of Angela and Becky's recipe card.
//Use assertArraysEqual to determine if Angela is a kook or Becky is a crooke. */
// expect it to return 🤢 becuase Becky is coniving and she read your code so she changed her recipe order 😈
const angelaRecipe = ["7🍑", "sugar", "love", "milk", "lard"];
const beckyRecipe = ["u", "i","🍑","o", "a"];
const recipeOrderCheker = map(angelaRecipe, word => word[1]);

console.log(assertArraysEqual(recipeOrderCheker , beckyRecipe));

//test case 3 : Mrs.Park, the school principal, has created an object containing all the lockers in the school.
// She has already filtered out the full lockers, leaving an array of empty lockers.
// A new student arrives at the school and Mrs. Clarke can finally use her filtered array!
// Use assertArraysEqual to see if there are any lockers left.
// expect 🤢 which is actually good news! Locker a7 has new kid written all over it!
const emptyLockers = ["1a7", "2a35", "2b14", "3b49"];
const floorLockerIsOn = map(emptyLockers, locker => locker[0]);

console.log(assertArraysEqual(floorLockerIsOn , []));