'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码

  let result = [];
  if (number_b === number_a) {
    result.push(number_a);
  }
  else {
    let increment;
    increment = (number_a < number_b) ? 1 : -1;
    for (let num = number_a; num !== number_b; num += increment) {
      result.push(num);
    }
    result.push(number_b);
  }
  return result;
}

module.exports = get_integer_interval;

