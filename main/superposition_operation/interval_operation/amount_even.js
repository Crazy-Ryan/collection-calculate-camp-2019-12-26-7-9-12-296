'use strict';

function amount_even(collection) {

  //在这里写入代码
  var choose_even = require("../../../main/filter/choose_even.js");
  var compute_elements_sum = require('../../../main/reduce/compute_sum.js');
  return compute_elements_sum(choose_even(collection));
}

module.exports = amount_even;
