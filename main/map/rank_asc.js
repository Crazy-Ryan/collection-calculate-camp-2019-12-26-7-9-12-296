'use strict';
var rank_asc = function (collection) {
  // return [6,5,4,3,2];
  return collection.sort(function (a, b) {
    return b - a;
  });
};

module.exports = rank_asc;
