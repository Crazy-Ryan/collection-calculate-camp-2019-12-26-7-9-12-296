'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  return collection.filter(number => 0 === number % 2);
}

module.exports = collect_all_even;
