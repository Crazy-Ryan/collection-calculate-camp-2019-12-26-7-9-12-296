let get_intersection = require('../../../main/collectionOperator/get_intersection.js');

function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  return get_intersection(object_b.value, collection_a.map(obj => obj.key));
}

module.exports = collect_same_elements;
