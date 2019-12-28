'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  return collection.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0) ;
}

module.exports = calculate_elements_sum;

