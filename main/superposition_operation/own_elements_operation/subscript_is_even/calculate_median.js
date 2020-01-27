'use strict';

let compute_median = require('../../../../main/reduce/compute_median.js');

var calculate_median = function (collection) {

  return compute_median(collection.filter((element, index) => 0 === (index + 1) % 2));
};
module.exports = calculate_median;
