const assertArraysEqual = require('../assertArraysEqual');

// testing code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 1, 0], [1, true, false]);