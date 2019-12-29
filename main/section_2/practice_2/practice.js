function count_same_elements(collection) {
  //在这里写入代码
  var count_same_elements = require("../../../main/section_2/practice_1/practice.js");

  var flatColl = [];
  var regEx = /(-[0-9]*)$/
  for (var index = 0; index < collection.length; index++) {
    if(regEx.test(collection[index])){
      var splittedEle = collection[index].split('-');
      var repeatContent = splittedEle[0];
      var repeatTimes = splittedEle[1];
      for (var ind = 0; ind<repeatTimes;ind++){
        flatColl.push(repeatContent);
      }
    }
    else{
      flatColl.push(collection[index]);
    }
  }
  return count_same_elements(flatColl);

}

module.exports = count_same_elements;
