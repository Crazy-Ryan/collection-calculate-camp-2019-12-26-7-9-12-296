'use strict';

let choose_even = require("../../../../main/filter/choose_even.js");
let compute_average = require('../../../../main/reduce/compute_average.js');

var even_group_calculate_average = function (collection) {

  let evenNumbersWithEvenIndex = choose_even(collection.filter((element, index) => 0 === (index + 1) % 2));
  if (0 === evenNumbersWithEvenIndex.length) {
    return [0];
  }
  else {
    let result = [];
    let maxNumberOfDigits = Math.max(...evenNumbersWithEvenIndex).toString().length;

    for (let index = 1; index <= maxNumberOfDigits; index++) {
      let boundAvg = compute_average(chooseBetween(evenNumbersWithEvenIndex, index));
      if (boundAvg) {
        result.push(boundAvg);
      }
    }
    return result;
  }
};

function chooseBetween(collection, numberOfDigits) {
  return collection.filter(x => x.toString().length === numberOfDigits);
};

module.exports = even_group_calculate_average;
