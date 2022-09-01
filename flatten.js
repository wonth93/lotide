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

const flatten = function(array) {
  const list = [];
  for (const item of array) {
    if (!Array.isArray(item)) {
      list.push(item);
    } else if (Array.isArray(item)) {
      for (const element of item) {
        list.push(element);
      }
    }
  }
  return list;
};


// code testing area
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // [1, 2, 3, 4, 5, 6]
// console.log(flatten([[1, 2, 3], [4, 5, 6]]))

module.exports = flatten;