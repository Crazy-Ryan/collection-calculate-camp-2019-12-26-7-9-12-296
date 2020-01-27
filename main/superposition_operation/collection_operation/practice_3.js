'use strict';

let compute_elements_sum = require('../../../main/reduce/compute_sum.js');

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码

  return compute_elements_sum(collection.filter(num => 1 === num % 2).map(x => (x * 3 + 5)));
}

module.exports = hybrid_operation_to_uneven;

