'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  return collection.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

module.exports = calculate_elements_sum;

