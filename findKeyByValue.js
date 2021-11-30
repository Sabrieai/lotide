const findKeyByValue = function(ourObject,value) {
  for (const key in ourObject) {
    if (ourObject[key] === value) {
      return key;
    }
  }
};
module.exports = findKeyByValue;