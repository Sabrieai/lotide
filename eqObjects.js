const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const onesKeys = Object.keys(object1);
  const twosKeys = Object.keys(object2);
  if (onesKeys.length === twosKeys.length) {
    for (const key of onesKeys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

        return (eqArrays(object1[key],object2[key]));
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  return false;
};

module.exports = eqObjects;

