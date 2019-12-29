'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var collect_all_even = require('../../../main/collectionOperator/collect_all_even.js');
  var number_map_to_word = require('../../../main/map/number_map_to_word.js');
  return (number_map_to_word(collect_all_even(collection)));
}

module.exports = even_to_letter;
