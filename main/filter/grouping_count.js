'use strict';

function grouping_count(collection) {

  //在这里写入代码

  return collection.reduce((allNames, name) => {
    name in allNames ? allNames[name]++ : allNames[name] = 1;
    return allNames;
  }, {});
}

module.exports = grouping_count;
