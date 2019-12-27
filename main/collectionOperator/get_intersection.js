'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  collection_b.forEach(element => {
    if(collection_a.includes(element)){
      result.push(element);
    }
  });
  return result;
}

module.exports = get_intersection;
