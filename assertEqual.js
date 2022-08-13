const correctEmoji = String.fromCodePoint(0x2705);
const wrongEmoji = String.fromCodePoint(0x274C);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(correctEmoji + correctEmoji + correctEmoji + " Assertion Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log(wrongEmoji + wrongEmoji + wrongEmoji + " Assertion Failed: ", actual + " !== " + expected);
  }
};


assertEqual('Lighthouse Labs', 'Lighthouse Labs');
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(1, 555);