'use strict';
function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  var rank_asc = require('../../../main/map/rank_desc.js');
  var collectionAsc = rank_asc(collection);
  var result = rank_asc(collection).slice();
  for (var index = 0; index + 2 < collectionAsc.length; index += 3) {
    result[index] = collectionAsc[index + 1];
    result[index + 1] = collectionAsc[index + 2];
    result[index + 2] = collectionAsc[index];
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
