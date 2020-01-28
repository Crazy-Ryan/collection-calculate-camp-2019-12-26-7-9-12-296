
function count_same_elements(collection) {
  //在这里写入代码
  let count_same_elements = require("../../../main/section_2/practice_1/practice.js");
  let regEx = /(-[0-9]*)$/;
  return count_same_elements(collection.map((ele) => {
    if (regEx.test(ele)) {
      let splittedEle = ele.split('-');
      return Array(+splittedEle[1]).fill(splittedEle[0]);
    }
    else {
      return ele;
    }
  }).flat());
}

module.exports = count_same_elements;
