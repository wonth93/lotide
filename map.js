const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// testing area
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);


// const number = [77, 99, 30, 27, 100, 70, 69]
// const results2 = map(number, element => element>=70)
// assertArraysEqual(results2, [true, true, false, false, true, true, false]);

// const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];
// const results3 = map(lighthouses, element => element.length);
// assertArraysEqual(results3, [ 15, 13, 11, 16, 10, 11, 10 ]);

module.exports = map;