'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  function evenJudge(number){
    return 0 === number % 2;
  }
  return collection.filter(evenJudge);
}

module.exports = collect_all_even;
