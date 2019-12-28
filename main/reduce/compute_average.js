'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0) / (collection.length);
}

module.exports = compute_average;

