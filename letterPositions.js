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



// similar to countingLetters except instead of returning value we return an array of positions
// swutched to for loop instead of for..of so there was easy acces to the index
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

//testing

assertArraysEqual(letterPositions("hello")["l"], [1]); // returns 🤢
