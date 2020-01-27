'use strict';

let compute_average = require('../../../main/reduce/compute_average.js');

function average_uneven(collection) {

  //在这里写入代码

  return compute_average(collection.filter(number => 1 === number % 2));
}

module.exports = average_uneven;
