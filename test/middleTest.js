const chai = require('chai');
const assert = chai.assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [7, 3] for [1, 7, 3, 5]", () => {
    assert.deepEqual(middle([1, 7,3, 5]), [7, 3]);
  });

  it("returns [7] for [1, 7, 3]", () => {
    assert.deepEqual(middle([1, 7,3]), [7]);
  });

  it("returns [] for [8]", () => {
    assert.deepEqual(middle([8]), []);
  });

  it("returns [] for ['dont', 'print']", () => {
    assert.deepEqual(middle(['dont', 'print']), []);
  });
});

console.log(middle([1,7,3,5,]));
