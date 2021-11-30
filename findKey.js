const findKey = function(ourObject,callback) {
  for (const obj in ourObject) {
    if (callback(ourObject[obj])) {
      return obj;
    }
  }
};

module.exports = findKey;