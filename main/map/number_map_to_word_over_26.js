'use strict';
var number_map_to_word_over_26 = function (collection) {
  // return ['a','m','aa','ad','y','aa'];
  function convertFromNumToChar(num) {
    var number = num - 1;
    return (number < 26 ? String.fromCharCode(number + 97)
      : String.fromCharCode(number / 26 + 96) + String.fromCharCode(number % 26 + 97));
  }

  return collection.map(x => convertFromNumToChar(x)); //TODO: 建议函数inline
};

module.exports = number_map_to_word_over_26;
