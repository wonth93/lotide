const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  const list = [];
  for (const item of array) {
    if (!Array.isArray(item)) {
      list.push(item);
    } else if (Array.isArray(item)) {
      for (const element of item) {
        list.push(element);
      }
    }
  }
  return list;
};


// code testing area
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([[1, 2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;