'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var mapToThreeMultiplesAddTwo = function (collection) {
    return collection.map(x => (x * 3 + 2));
  };
  function oddJudge(number) {
    return 1 === number % 2;
  }
  return mapToThreeMultiplesAddTwo(collection.filter(oddJudge)); //TODO: 建议函数inline
}

module.exports = hybrid_operation_to_uneven;

