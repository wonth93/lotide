const eqArrays = require('./eqArrays');

const correctEmoji = String.fromCodePoint(0x2705);
const wrongEmoji = String.fromCodePoint(0x274C);

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`${correctEmoji}${correctEmoji}${correctEmoji} Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${wrongEmoji}${wrongEmoji}${wrongEmoji} Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;