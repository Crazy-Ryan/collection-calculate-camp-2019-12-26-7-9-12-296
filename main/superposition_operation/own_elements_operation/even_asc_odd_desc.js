'use strict';

let rank_desc = require('../../../main/map/rank_asc.js');
let rank_asc = require('../../../main/map/rank_desc.js');

var even_asc_odd_desc = function (collection) {

  let evenNumsAsc = rank_asc(collection.filter(num => 0 === num % 2));
  let oddNumsDesc = rank_desc(collection.filter(num => 1 === num % 2));
  return evenNumsAsc.concat(oddNumsDesc);
};
module.exports = even_asc_odd_desc;
