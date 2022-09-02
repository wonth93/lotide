const middle = function(array) {
  const midArray = [];
  if (array.length === 0) {
    return midArray;
  } else if (array.length % 2 !== 0) {
    midArray.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    midArray.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return midArray;
};

module.exports = middle;