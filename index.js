  const assertArraysEqual = require('./middle');
  const assertEqual= require('./assertEqual');
  const assertObjectsEqual = require('./middle');
  const countLetters= require('./middle');
  const countOnly= require('./middle');
  const eqArrays= require('./middle');
  const eqObjects= require('./middle');
  const findKey= require('./middle');
  const findKeyByValue= require('./middle');
  const head = require('./head');
  const letterPositions = require('./middle');
  const map = require('./middle');
 const middle = require('./middle');
 const tail = require('./tail');
const takeUntil = require('./middle');
const without = require('./middle');



const assertEqual = require('./assertEqual');

module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  head: head,
  letterPositions:letterPositions,
  map:map,
  middle: middle,
  tail:   tail,
  takeUntil:takeUntil,
  without:without
};