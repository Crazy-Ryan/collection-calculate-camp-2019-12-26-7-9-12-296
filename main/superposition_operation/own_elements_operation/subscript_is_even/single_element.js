'use strict';
var single_element = function (collection) {
  var chooseEvenIndex = function (collection) {
    return collection.reduce(function (accumulator, currentValue, index) {
      if (0 === (index + 1) % 2) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
  }
  function singleNums(accumulator, currentValue, index, array){
    if (array.indexOf(currentValue) === array.lastIndexOf(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }
  return chooseEvenIndex(collection).reduce(singleNums, []);

};
module.exports = single_element;
