const correctEmoji = String.fromCodePoint(0x2705);
const wrongEmoji = String.fromCodePoint(0x274C);

const assertAssaysEqual = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return console.log(`${wrongEmoji}${wrongEmoji}${wrongEmoji} Assertion Failed: arrayA !== arrayB`);
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return console.log(`${wrongEmoji}${wrongEmoji}${wrongEmoji} Assertion Failed: arrayA !== arrayB`);
    }
  }
  return console.log(`${correctEmoji}${correctEmoji}${correctEmoji} Assertion Passed: arrayA === arrayB`);
};


// testing code
assertAssaysEqual([1, 2, 3], [1, 2, 3]);
assertAssaysEqual([1, 2, 3], [3, 2, 1]);
assertAssaysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertAssaysEqual([1, 2, 3], [1, 2, "3"]);
assertAssaysEqual([1, 2, 3], [1, 2, 3, 4]);
assertAssaysEqual([1, 1, 3], [1, true, 3]);