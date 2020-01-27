'use strict';

let compute_median = require('../../../main/reduce/compute_median.js');

function median_to_letter(collection) {

  //在这里写入代码

  return convertFromNumToChar(Math.ceil(compute_median(collection))); //TODO: 建议函数放外面
}

function convertFromNumToChar(num) {
  let number = num - 1;
  return (number < 26 ? String.fromCharCode(number + 97)
    : String.fromCharCode(number / 26 + 96) + String.fromCharCode(number % 26 + 97));
}

module.exports = median_to_letter;
