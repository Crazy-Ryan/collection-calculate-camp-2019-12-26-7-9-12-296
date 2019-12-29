'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var compute_median = require('../../../main/reduce/compute_median.js');
  function convertFromNumToChar(num) {
    var number = num - 1;
    return (number < 26 ? String.fromCharCode(number + 97)
      : String.fromCharCode(number / 26 + 96) + String.fromCharCode(number % 26 + 97));
  }
  return convertFromNumToChar(Math.ceil(compute_median(collection)));
}

module.exports = median_to_letter;
