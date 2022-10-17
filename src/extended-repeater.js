const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof options.separator === "undefined") {
    options.separator = "+";
  }
  if (typeof options.additionSeparator === "undefined") {
    options.additionSeparator = "|";
  }
  let fStr = "";
  let finalStr = "";
  fStr += str;

  if (typeof options.additionRepeatTimes !== "undefined") {
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
      fStr += options.addition;
      if (i !== options.additionRepeatTimes) {
        fStr += options.additionSeparator;
      }
    }
  }
  // if (typeof options.additionRepeatTimes !== "undefined" && typeof options.addition !== "undefined") {
  //   fStr += options.addition;
  // }

  if (typeof options.repeatTimes === "undefined") {
    finalStr += fStr;
    if (typeof options.addition !== "undefined") {
      finalStr += options.addition;
    }
  }

  for (let i = 1; i <= options.repeatTimes; i++) {
    finalStr += fStr;
    if ( i !== options.repeatTimes) {
      finalStr+= options.separator;
    }
  }
  return finalStr;
}

module.exports = {
  repeater
};
