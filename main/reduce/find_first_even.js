'use strict';

let collect_all_even = require('../../main/collectionOperator/collect_all_even.js');

function find_first_even(collection) {
  //在这里写入代码
  
  return collect_all_even(collection)[0];
}

module.exports = find_first_even;

