const countLetters = function(string) {
  const object = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (!object[letter]) {
        object[letter] = 1;
      } else {
        object[letter] ++;
      }
    }
  }
  return object;
};

// code testing area
// console.log(countLetters("This is Martin")); // T: 1, h: 1, i: 3, s: 2, M: 1, a: 1, r: 1, t: 1, n: 1
// console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;