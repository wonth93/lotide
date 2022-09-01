const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// const correctEmoji = String.fromCodePoint(0x2705);
// const wrongEmoji = String.fromCodePoint(0x274C);

// const eqArrays = function(arrayA, arrayB) {
//   if (arrayA.length !== arrayB.length) {
//     return false;
//   }
//   for (let i = 0; i < arrayA.length; i++) {
//     if (arrayA[i] !== arrayB[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`${correctEmoji}${correctEmoji}${correctEmoji} Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`${wrongEmoji}${wrongEmoji}${wrongEmoji} Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

// code testing area
// console.log(letterPositions("hello world"))
// console.log(letterPositions("hello world").l)
// assertArraysEqual(letterPositions("hello world").l, [2, 3, 9])

module.exports = letterPositions;
