const without = function(source,itemsToRemove) {
  const goodStuff = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      goodStuff.push(source[i]);
    }
  }
  return goodStuff;
};

module.exports = without;