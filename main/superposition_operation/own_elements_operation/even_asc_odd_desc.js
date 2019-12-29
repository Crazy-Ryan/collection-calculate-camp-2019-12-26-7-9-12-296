'use strict';
var even_asc_odd_desc = function (collection) {
  var rank_desc = require('../../../main/map/rank_asc.js');
  var rank_asc = require('../../../main/map/rank_desc.js');
  function collect_all_even(collection) {
    function evenJudge(number) {
      return 0 === number % 2;
    }
    return collection.filter(evenJudge);
  }
  function collect_all_odd(collection) {
    function oddJudge(number) {
      return 1 === number % 2;
    }
    return collection.filter(oddJudge);
  }
  var evenNumsAsc = rank_asc(collect_all_even(collection));
  var oddNumsDesc = rank_desc(collect_all_odd(collection));
  return evenNumsAsc.concat(oddNumsDesc);
};
module.exports = even_asc_odd_desc;
