'use strict';

let get_integer_interval = require('../../main/collectionOperator/get_integer_interval.js');

function get_letter_interval(number_a, number_b) {
  //在这里写入代码

  return get_integer_interval(number_a, number_b).map(number => String.fromCharCode(number + 96));
}

module.exports = get_letter_interval;
