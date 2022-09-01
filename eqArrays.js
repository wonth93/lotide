const assertEqual = require('./assertEqual');

// const correctEmoji = String.fromCodePoint(0x2705);
// const wrongEmoji = String.fromCodePoint(0x274C);

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`${correctEmoji}${correctEmoji}${correctEmoji} Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`${wrongEmoji}${wrongEmoji}${wrongEmoji} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
// assertEqual(eqArrays([1, 1, 3], [1, true, 3]), false);

// const cd = ["2", 3]
// const dc = ["2", 3]
// const cd2 = ["2", 3, 4]
// console.log(eqArrays(cd,dc))

module.exports = eqArrays;