function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.forEach(element => {
    if (object_b.value.includes((element.key))) {
      element.count--;
    }
  });
  return collection_a;
}

module.exports = create_updated_collection;
