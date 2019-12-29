'use strict';
var calculate_median = function (collection) {
  var compute_median = require('../../../../main/reduce/compute_median.js');
  var choose_even_index = collection.reduce(function (accumulator, currentValue, index) {
    if (0 === (index + 1) % 2) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  return compute_median(choose_even_index);

};
module.exports = calculate_median;
