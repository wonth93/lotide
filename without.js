const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  const finalArray = [];
  for(let i = 0; i < source.length; i++) {
    if(!itemsToRemove.includes(source[i])) {
      finalArray.push(source[i]);
    }
  }
  return finalArray;
}


// // code testing area
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// // code testing area 2
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// assertArraysEqual(without(words, ["lighthouse"]),["hello", "world"]);

module.exports = without;