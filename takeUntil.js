// decided not to include the test cases/ tester functions because it looked too bulky
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


