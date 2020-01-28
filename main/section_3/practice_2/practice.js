function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  return collection_a.map(element => {
    if (object_b.value.includes((element.key))) {
      element.count = element.count - Math.floor(element.count / 3);
    }
    return element;
  });
}

module.exports = create_updated_collection;
