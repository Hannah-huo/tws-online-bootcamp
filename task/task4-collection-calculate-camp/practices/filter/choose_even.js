'use strict';

function choose_even(collection) {
  var result = [];
  for(let i of collection){
    if(i % 2 === 0){
      result.push(i)
    }
  }
  return result;

  //在这里写入代码
}

module.exports = choose_even;
