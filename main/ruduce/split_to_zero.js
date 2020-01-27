'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [number];
  do {
    number = Math.round(10 * (number - interval)) / 10;
    result.push(number);
  }
  while (number > 0);
  return result;
}

module.exports = spilt_to_zero;
