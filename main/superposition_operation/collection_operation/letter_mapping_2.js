'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var compute_average = require('../../../main/reduce/compute_average.js');
  return String.fromCharCode(Math.ceil(compute_average(collection)) + 96);
}

module.exports = average_to_letter;

