'use strict';

let get_integer_interval = require('../../main/collectionOperator/get_integer_interval.js');

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码

  return get_integer_interval(number_a, number_b).map(ele => {
    let number = ele - 1;
    if (number < 26) {
      return String.fromCharCode(number + 97);
    }
    else {
      return String.fromCharCode(number / 26 + 96) + String.fromCharCode(number % 26 + 97);
    }
  });
}

module.exports = get_letter_interval_2;

