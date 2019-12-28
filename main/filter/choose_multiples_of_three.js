'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  function multipleOfThreeJudge(number) {
    return 0 === number % 3;
  }
  return collection.filter(multipleOfThreeJudge);
}

module.exports = choose_multiples_of_three;
