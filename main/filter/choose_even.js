'use strict';

function choose_even(collection) {

  //在这里写入代码
  function evenJudge(number) {
    return 0 === number % 2;
  }
  return collection.filter(evenJudge);
}

module.exports = choose_even;
