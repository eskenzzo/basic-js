const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let ans = [];
  if (!Array.isArray(arr)) {
    throw new TypeError("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i]);
    if (arr[i] === "--double-next") {
      ans.pop();
      if (i >= arr.length) {
        ans.push(arr[i+1]);
        // ans.push(arr[i+1]);
      }
    }
    if (arr[i] === "--discard-next") {
      ans.pop();
      if (i >= arr.length) {
        arr.splice(i+1,1);
      }
    }
    if (arr[i] === "--discard-prev") {
      ans.pop();
      if (i !== 0) {
        arr.splice(i-1,1);
      }
    }
    if (arr[i] === "--double-prev") {
      ans.pop();
    }
  }
  return ans;
}

module.exports = {
  transform
};
