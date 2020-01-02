'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  function judgeInclude(element) {
    if (collection_a.includes(element)) {
      result.push(element);
    }
  }
  collection_b.forEach(judgeInclude); //TODO: 建议函数inline

  return result;
}

module.exports = get_intersection;
