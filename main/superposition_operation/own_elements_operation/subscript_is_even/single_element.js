'use strict';
var single_element = function (collection) {

  return collection.filter((element, index) => 0 === (index + 1) % 2).filter((number, index, array) => array.indexOf(number) === array.lastIndexOf(number));

};
module.exports = single_element;
