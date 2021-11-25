const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢Assertion Failed: ${actual} !== ${expected}`);
  }
};

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function(sentence) {
// code to retrieve count of each letter of a string
  const results = {};
  const better = sentence.replace(/\s+/g, '').split('');
  for (const letter of better) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return console.log(results);
};

countLetters("lighthouse in the house"); // should return {l:2, h:1}
