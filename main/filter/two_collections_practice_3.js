'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result;
  result = collection_a.reduce(function (accumulator, currentValue) {
    if (isDivisibleByB(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  function isDivisibleByB(num) {
    var flag = false;
    collection_b.forEach(element => {
      if (0 === num % element) {
        flag = true;
      }
    });
    return flag;
  }
  return result;
}

module.exports = choose_divisible_integer;
