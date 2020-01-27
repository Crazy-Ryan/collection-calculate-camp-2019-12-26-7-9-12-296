'use strict';

let compute_median = require('../../main/reduce/compute_median.js');

function compute_chain_median(collection) {
  //在这里写入代码

  return compute_median(collection.split('->').map(x => +x));
}

module.exports = compute_chain_median;
