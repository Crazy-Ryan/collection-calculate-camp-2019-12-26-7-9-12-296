'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
    var result = collection_a;
    function judgeInclude(element) {
      if (!(collection_a.includes(element))) {
        result.push(element);
      }
    }
    collection_b.forEach(judgeInclude);
    return result;
}

module.exports = get_union;

