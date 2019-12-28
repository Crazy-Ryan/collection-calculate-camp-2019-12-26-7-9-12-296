'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var output = [];
  collection.forEach(pickNoRepeat);
  function pickNoRepeat(element) {
    if (!output.includes(element)) {
      output.push(element);
    }
  }
  return output;
}

module.exports = choose_no_repeat_number;
