let grouping_count = require("../../../main/filter/grouping_count.js");

function count_same_elements(collection) {
  //在这里写入代码
  let instanceCount = grouping_count(collection);
  let instanceKeys = Object.keys(instanceCount);
  return instanceKeys.map(key => ({key: key, count: instanceCount[key]}));
}

module.exports = count_same_elements;
