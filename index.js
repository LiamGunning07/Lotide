const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require(`./assertArraysEqual`);
const assertEqual = require('./assertEqual');
const eqArrays = require(`./eqArrays`);
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head :   head,
  tail :   tail,
  middle : middle,
  assertArraysEqual : assertArraysEqual,
  assertEqual : assertEqual,
  eqArrays : eqArrays,
  assertObjectsEqual : assertObjectsEqual,
  countLetters : countLetters,
  eqObjects : eqObjects,
  findKey : findKey,
  findKeyByValue : findKeyByValue,
  flatten : flatten,
  letterPositions : letterPositions,
  takeUntil : takeUntil,
  without : without
};