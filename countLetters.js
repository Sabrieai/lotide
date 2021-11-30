const countLetters = function(sentence) {
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

module.exports = countLetters;
