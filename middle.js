
const middle = function(arr) {
  const results = [];
  if (arr.length <= 2) {
    return results;
  }
  if (arr.length % 2 === 0) {
    let value1 = Math.floor(Number(arr.length / 2));
    results.push(arr[value1 - 1]);
    results.push(arr[value1]);
  } else {
    let value = Math.ceil(Number(arr.length / 2));
    results.push(arr[value - 1]);
  }
  return results;
};

module.exports = middle;
