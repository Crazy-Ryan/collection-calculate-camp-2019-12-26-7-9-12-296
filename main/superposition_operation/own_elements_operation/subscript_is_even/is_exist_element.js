'use strict';
var is_exist_element = function (collection, element) {

  return collection.filter((element, index) => 0 === index % 2).includes(element);
};
module.exports = is_exist_element;
