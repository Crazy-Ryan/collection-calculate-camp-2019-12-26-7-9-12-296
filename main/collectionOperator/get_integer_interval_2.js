'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var get_integer_interval = require('../../main/collectionOperator/get_integer_interval.js');
  var collect_all_even = require('../../main/collectionOperator/collect_all_even.js');
  return collect_all_even(get_integer_interval(number_a,number_b));
}

module.exports = get_integer_interval_2;
