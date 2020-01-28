function count_same_elements(collection) {
  //在这里写入代码
  var regExDash = /(-[0-9]*)$/;
  var regExColon = /(:[0-9]*)$/;
  var regExBracket = /([[0-9]*])$/;

  return count_same_elements(collection.map((ele) => {
    if (regExDash.test(ele) || regExColon.test(ele) || regExBracket.test(ele)) {
      let splittedEle = ele.split(/[-:\[\]]/);
      return Array(+splittedEle[1]).fill(splittedEle[0]);
    }
    else {
      return ele;
    }
  }).flat());

  function count_same_elements(collection) {
    //在这里写入代码
    let grouping_count = require("../../../main/filter/grouping_count.js");
    let instanceCount = grouping_count(collection);
    let instanceKeys = Object.keys(instanceCount);
    return instanceKeys.map(key => ({ name: key, summary: instanceCount[key] }));
  }
}


module.exports = count_same_elements;
