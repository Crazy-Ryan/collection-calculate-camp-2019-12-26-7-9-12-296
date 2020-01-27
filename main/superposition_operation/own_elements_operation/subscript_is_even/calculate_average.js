'use strict';

let compute_average = require('../../../../main/reduce/compute_average.js');
let choose_even = require("../../../../main/filter/choose_even.js");

var calculate_average = function (collection) {
  
  return compute_average(choose_even(collection));
};
module.exports = calculate_average;
