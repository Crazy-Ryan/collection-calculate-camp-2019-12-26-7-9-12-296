'use strict';

let choose_even = require("../../../main/filter/choose_even.js");
let compute_elements_sum = require('../../../main/reduce/compute_sum.js');

function amount_even(collection) {

  //在这里写入代码

  return compute_elements_sum(choose_even(collection));
}

module.exports = amount_even;
