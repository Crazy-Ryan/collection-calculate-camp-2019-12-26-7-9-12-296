'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var choose_no_repeat_number = require("../../main/filter/choose_no_repeat_number.js");
  var double_to_one = require("../../main/flaten/double_dimensional_array_to_one_1.js");
  return choose_no_repeat_number(double_to_one(collection));
}

module.exports = double_to_one;
