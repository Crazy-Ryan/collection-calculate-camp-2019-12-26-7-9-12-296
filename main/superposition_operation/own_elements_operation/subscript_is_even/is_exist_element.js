'use strict';
var is_exist_element = function (collection, element) {
  var chooseEvenIndex = function (collection) {
    return collection.reduce(function (accumulator, currentValue, index) {
      if (0 === index % 2) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
  }
  return chooseEvenIndex(collection).includes(element);

};
module.exports = is_exist_element;
