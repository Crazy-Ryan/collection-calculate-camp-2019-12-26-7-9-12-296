'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var instanceCount =collection.reduce(countInstances,{}) ;
  function countInstances(allNames, name) { 
    if (name in allNames) {
      allNames[name]++
    }
    else {
      allNames[name] = 1
    }
    return allNames;
  }
  return instanceCount;
}

module.exports = grouping_count;
