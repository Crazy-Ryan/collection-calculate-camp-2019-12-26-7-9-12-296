'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  function judgeInclude(element) {
    if (!collection_b.includes(element)) {
      result.push(element);
    }
  }
  collection_a.forEach(judgeInclude);

  return result;
}

module.exports = choose_no_common_elements;
