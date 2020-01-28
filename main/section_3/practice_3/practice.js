let count_same_elements = require("../../../main/section_2/practice_1/practice.js");
let updateArraysByMatch = require("../../../main/section_3/practice_2/practice.js");

function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  return updateArraysByMatch(count_same_elements(collection_a), object_b);
}

module.exports = create_updated_collection;
