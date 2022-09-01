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

const tail = function(array) {
  const newArray = [];
  for (let i = 1; i < array.length;  i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

// // Test Case 0: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: An array with only one element should yield an empty array for its tail
// const result2 = tail(["Hello"]);
// console.log(result2); // result empty array

// // Test Case 3: An empty array should yield an empty array for its tail
// const result3 = tail([]);
// console.log(result3); // result empty array

module.exports = tail;