'use strict';
var rank_desc = function(collection){
  // return [2,3,4,5,6];
  return collection.sort(function (a, b) {
    return a - b;
  });
};

module.exports = rank_desc;
