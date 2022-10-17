const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let counter = 0;
  // let len = s2.length;
  // for (let i = 0; i < s1.length; i++) {
  //   for (let j = 0; j < len; j++) {
  //     if (s1[i] === s2[j]) {
  //       counter++;
  //       let s3 = s2.split('');
  //       s3.splice(j-1,1);
  //       s3.join('');
  //       s3.toString();
  //       s2 = "";
  //       s2 += s3;
  //       len = s2.length;
  //     }
  //   }
  // }
}

module.exports = {
  getCommonCharacterCount
};
