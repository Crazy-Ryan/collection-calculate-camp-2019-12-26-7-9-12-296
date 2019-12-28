'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var compute_median = require('../../main/reduce/compute_median.js');
  var charArrayInput = collection.split('->');
  var numArrayInput = charArrayInput.map(x => +x);
  return compute_median(numArrayInput);
}

module.exports = compute_chain_median;
