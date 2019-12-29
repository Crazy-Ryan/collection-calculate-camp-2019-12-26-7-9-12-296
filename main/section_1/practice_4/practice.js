function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  function judgeInclude(element) {
    if (object_b.value.includes(element.key)) {
      result.push(element.key);
    }
  }
  collection_a.forEach(judgeInclude);
  return result;
}

module.exports = collect_same_elements;
