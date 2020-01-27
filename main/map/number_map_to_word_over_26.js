'use strict';
var number_map_to_word_over_26 = function (collection) {
  // return ['a','m','aa','ad','y','aa'];

  return collection.map(num => {
    let number = num - 1;
    return (number < 26 ? String.fromCharCode(number + 97)
      : String.fromCharCode(number / 26 + 96) + String.fromCharCode(number % 26 + 97));
  });
};

module.exports = number_map_to_word_over_26;
