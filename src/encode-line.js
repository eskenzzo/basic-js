const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (str.length === 0) return "";
  let ans = "";
  let counter = 1
  let i = 0;
  for (i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i+1]) {
      counter++;
    } else {
      if (counter === 1) {
        ans += str[i];
      } else {
        ans += counter + str[i];
      }
      counter = 1;
    }
  }
  if (counter === 1) {
    ans += str[i];
  } else {
    ans += counter + str[i];
  }
  return ans;
}

module.exports = {
  encodeLine
};
