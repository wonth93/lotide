const eqObjects = require('./eqObjects');

const correctEmoji = String.fromCodePoint(0x2705);
const wrongEmoji = String.fromCodePoint(0x274C);


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`${correctEmoji}${correctEmoji}${correctEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${wrongEmoji}${wrongEmoji}${wrongEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// conde testing area
// const ab = { a: "1", b: "2" };
// const ba = { a: "1", b: "2" };
// const cc = { a: "1", b: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertObjectsEqual(ab,ba);
// assertObjectsEqual(ab,cc);
// assertObjectsEqual(ab,abc);
// assertObjectsEqual(cd,dc);
// assertObjectsEqual(cd,cd2);

module.exports = assertObjectsEqual;