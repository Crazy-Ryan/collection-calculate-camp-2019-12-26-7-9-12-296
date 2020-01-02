'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var get_integer_interval = require('../../main/collectionOperator/get_integer_interval.js');
  var result = [];
  function convertFromNumToChar(ele) {
    var number = ele -1;
    if (number < 26) {
      result.push(String.fromCharCode(number + 97));
    }
    else {
      result.push(String.fromCharCode(number / 26 + 96) + String.fromCharCode(number % 26 + 97));
    }
  }
  get_integer_interval(number_a, number_b).forEach(convertFromNumToChar); //TODO: 建议函数inline，或者定义在这个函数外面
  return result;
}

module.exports = get_letter_interval_2;

