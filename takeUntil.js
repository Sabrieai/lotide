const takeUntil = function(array, callback) {
  const newArray = [];
  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      return newArray;
    }
  }
  return newArray;
};

module.exports = takeUntil;
