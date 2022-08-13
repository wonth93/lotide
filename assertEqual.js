const correctEmoji = String.fromCodePoint(0x2705);
const wrongEmoji = String.fromCodePoint(0x274C);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected + correctEmoji);
  } else if (actual !== expected) {
    console.assert(actual === expected, actual + " !== " + expected + wrongEmoji);
  }
};


assertEqual('Lighthouse Labs', 'Lighthouse Labs');
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(1, 555);
