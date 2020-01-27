'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码

  return collection_a.filter(number => {
    return -1 !== collection_b.findIndex(num => 0 === number % num);
  })
}

module.exports = choose_divisible_integer;
