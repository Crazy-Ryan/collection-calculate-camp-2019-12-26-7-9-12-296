'use strict';

function compute_median(collection) {
  //在这里写入代码
  var rank_asc = require('../../main/map/rank_desc.js');
  var length = collection.length
  var ascCollection = rank_asc(collection);
  if (0 === length % 2) {
    return (ascCollection[length / 2 - 1] + ascCollection[length / 2]) / 2;
  }
  else {
    return ascCollection[(length - 1) / 2];
  }
}

module.exports = compute_median;


