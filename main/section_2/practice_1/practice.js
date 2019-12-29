function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var grouping_count = require("../../../main/filter/grouping_count.js");
  var instanceCount = grouping_count(collection);
  var instanceKeys = Object.keys(instanceCount);
  for (var index = 0; index < instanceKeys.length; index++) {
    var itemCount = {};
    itemCount.key = instanceKeys[index];
    itemCount.count = instanceCount[instanceKeys[index]];
    result.push(itemCount);
  }
  return result;
}

module.exports = count_same_elements;
