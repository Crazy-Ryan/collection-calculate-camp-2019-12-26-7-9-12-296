'use strict';

let compute_elements_sum = require('../../main/reduce/compute_sum.js');

function compute_average(collection) {
  //在这里写入代码
  
  return compute_elements_sum(collection)/(collection.length);
}

module.exports = compute_average;

