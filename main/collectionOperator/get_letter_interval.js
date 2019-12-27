'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var get_integer_interval = require('../../main/collectionOperator/get_integer_interval.js');
  var result = [];
  function convertFromNumToChar(number) {
    result.push(String.fromCharCode(number + 96));
  }
  get_integer_interval(number_a, number_b).forEach(convertFromNumToChar);
  return result;
}

module.exports = get_letter_interval;
