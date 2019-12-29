'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var compute_elements_sum = require('../../../main/reduce/compute_sum.js');
  var mapToThreeMultiplesAddTwo = function (collection) {
    return collection.map(x => (x * 3 + 2));
  };
  return compute_elements_sum(mapToThreeMultiplesAddTwo(collection));
}

module.exports = hybrid_operation;

