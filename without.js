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

const without = function(source, itemsToRemove) {
  const finalArray = [];
  for(let i = 0; i < source.length; i++) {
    if(!itemsToRemove.includes(source[i])) {
      finalArray.push(source[i]);
    }
  }
  return finalArray;
}


// code testing area
console.log(without([1, 2, 3], [1])); // return [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // return ["1", "2"]

// code testing area 2
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without(words, ["lighthouse"])); // return ["hello", "world"]