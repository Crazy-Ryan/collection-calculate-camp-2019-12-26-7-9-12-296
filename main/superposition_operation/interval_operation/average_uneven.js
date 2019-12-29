'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var compute_average = require('../../../main/reduce/compute_average.js');
  function oddJudge(number) {
    return 1 === number % 2;
  }
  return compute_average(collection.filter(oddJudge));
}

module.exports = average_uneven;
