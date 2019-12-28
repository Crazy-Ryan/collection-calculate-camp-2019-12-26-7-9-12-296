'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var collect_all_even = require('../../main/collectionOperator/collect_all_even.js');
  return collect_all_even(collection).pop();
}

module.exports = find_last_even;
