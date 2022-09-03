const assertEqual = require('./assertEqual');

const findKeyByValue = function(inputObject, inputValue) {
  for (const listOfKeys in inputObject) {
    if (inputObject[listOfKeys] === inputValue) {
      return listOfKeys;
    }
  }
  return undefined;
};

// code testing area
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;