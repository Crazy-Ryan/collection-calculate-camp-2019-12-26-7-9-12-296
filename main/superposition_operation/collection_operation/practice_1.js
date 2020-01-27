'use strict';

let compute_elements_sum = require('../../../main/reduce/compute_sum.js');

function hybrid_operation(collection) {

  //在这里写入代码

  return compute_elements_sum(collection.map(x => (x * 3 + 2)));
}

module.exports = hybrid_operation;

