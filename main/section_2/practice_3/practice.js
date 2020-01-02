function count_same_elements(collection) {
  //在这里写入代码
  var flatColl = [];
  var regExDash = /(-[0-9]*)$/;
  var regExColon = /(:[0-9]*)$/;
  var regExBracket = /([[0-9]*])$/;
  function count_same_elements(collection) { //TODO: 建议函数放在外面
    var count = [];
    var grouping_count = require("../../../main/filter/grouping_count.js");
    var instanceCount = grouping_count(collection);
    var instanceKeys = Object.keys(instanceCount);
    for (var index = 0; index < instanceKeys.length; index++) {
      var itemCount = {};
      itemCount.name = instanceKeys[index];
      itemCount.summary = instanceCount[instanceKeys[index]];
      count.push(itemCount);
    }
    return count;
  }

  for (var index = 0; index < collection.length; index++) {
    var splittedEle;
    if (regExDash.test(collection[index]) || regExColon.test(collection[index]) || regExBracket.test(collection[index])) {
      var splittedEle = collection[index].split(/[-:\[\]]/);
      var repeatContent = splittedEle[0];
      var repeatTimes = splittedEle[1];
      for (var ind = 0; ind < repeatTimes; ind++) {
        flatColl.push(repeatContent);
      }
    }
    else {
      flatColl.push(collection[index]);
    }
  }
  return count_same_elements(flatColl);
}

module.exports = count_same_elements;
