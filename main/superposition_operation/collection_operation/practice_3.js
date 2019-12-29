'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var compute_elements_sum = require('../../../main/reduce/compute_sum.js');
  var mapToThreeMultiplesAddFive = function (collection) {
    return collection.map(x => (x * 3 + 5));
  };
  function oddJudge(number) {
    return 1 === number % 2;
  }
  return compute_elements_sum(mapToThreeMultiplesAddFive(collection.filter(oddJudge)));
}

module.exports = hybrid_operation_to_uneven;

