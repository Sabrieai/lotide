const chai = require('chai');
const assert = chai.assert;

const tail = require('../tail');

describe("#tail", () => {
  it("returns [1, 2] for [0, 1, 2]", () => {
    assert.deepEqual(tail([0, 1, 2]), [1, 2]);
  });
  
  it("returns [] for [2] ", () => {
    assert.deepEqual(tail([2]), []);
  });
  
  it("returns ['it', 'works!'] for [' I dont know if', 'it', 'works!'] ", () => {
    assert.deepEqual(tail([' I dont know if', 'it', 'works!']), ['it', 'works!']);
  });

});



