const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


// conde testing area
// const ab = { a: "1", b: "2" };
// const ba = { a: "1", b: "2" };
// const cc = { a: "1", b: "1" };
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, cc), false);
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);


// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

// module.exports = eqObjects;