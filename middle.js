const correctEmoji = String.fromCodePoint(0x2705);
const wrongEmoji = String.fromCodePoint(0x274C);

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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`${correctEmoji}${correctEmoji}${correctEmoji} Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`${wrongEmoji}${wrongEmoji}${wrongEmoji} Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  const midArray = [];
  // odd number element
  if (array.length === 0) {
    return midArray;
  } else if (array.length % 2 !== 0) {
    midArray.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    midArray.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return midArray;
};

//code testing area odd
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // => [6]

//conde testing area even
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// code testing are empty array
// console.log(middle([])); // => [3, 4]