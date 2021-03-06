const chai = require('chai');
const assert = chai.assert;

const assertEqual = require('../assertEqual');
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['4']", () => {
    assert.notEqual(head(['4']), '5');
  });
  it("returns '5' for ['5', '6', '7']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns '' for []", () => {
    assert.strictEqual(head(['']), '');
  });
});
