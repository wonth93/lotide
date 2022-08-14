const correctEmoji = String.fromCodePoint(0x2705);
const wrongEmoji = String.fromCodePoint(0x274C);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${correctEmoji}${correctEmoji}${correctEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${wrongEmoji}${wrongEmoji}${wrongEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  let firstElement = array[0];
  return firstElement;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([555]), 555);
assertEqual(head([]), undefined);