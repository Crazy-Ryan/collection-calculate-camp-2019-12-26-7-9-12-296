'use strict';
function one_add_next_multiply_three(collection) {
  // return [12,24,36,48,60,72,84,96,108,120];
  var result = [];
  for (var index = 0; index < collection.length - 1; index++) {
    result.push((collection[index] + collection[index + 1]) * 3);
  }
  return result;
}
module.exports = one_add_next_multiply_three;
