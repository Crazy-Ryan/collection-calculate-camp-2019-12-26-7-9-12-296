'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return collection.reduce(function(accumulator, currentValue){
    return accumulator.concat(currentValue);
  },[]);
}

module.exports = double_to_one;
