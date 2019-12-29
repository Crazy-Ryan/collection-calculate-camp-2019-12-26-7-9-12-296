'use strict';
var even_group_calculate_average = function (collection) {

  var choose_even = require("../../../../main/filter/choose_even.js");
  var compute_average = require('../../../../main/reduce/compute_average.js');
  var chooseEvenIndex = function (collection) {
    return collection.reduce(function (accumulator, currentValue, index) {
      if (0 === (index + 1) % 2) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
  }
  var evenNumbersWithEvenIndex = choose_even(chooseEvenIndex(collection));
  if (0 === evenNumbersWithEvenIndex.length) {
    return [0];
  }
  else {
    var result = [];
    var lower_bound = 1;
    var upper_bound = 10;
    var maxNumber = Math.max(...evenNumbersWithEvenIndex);
    var chooseBetween = function (collection, min, max) {
      return collection.filter(x => ((x >= min) && (x < max)));
    };
    while (lower_bound < maxNumber) {
      var boundAvg = compute_average(chooseBetween(evenNumbersWithEvenIndex, lower_bound, upper_bound));
      if (boundAvg) {
        result.push(boundAvg);
      }
      lower_bound *= 10;
      upper_bound *= 10;
    }
    return result;
  }
};
module.exports = even_group_calculate_average;
