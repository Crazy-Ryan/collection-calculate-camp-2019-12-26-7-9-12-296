'use strict';
var calculate_average = function(collection){
  var compute_average = require('../../../../main/reduce/compute_average.js');
  var choose_even = require("../../../../main/filter/choose_even.js");
  return compute_average(choose_even(collection));
};
module.exports = calculate_average;
