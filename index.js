const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require(`./assertArraysEqual`);
const assertEqual = require('./assertEqual');
const eqArrays = require(`./eqArrays`);

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual : assertArraysEqual,
  assertEqual : assertEqual,
  eqArrays : eqArrays,
};