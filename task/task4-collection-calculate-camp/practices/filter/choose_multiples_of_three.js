'use strict';

function choose_multiples_of_three(collection) {
  var result = [];
  for(let i of collection){
    if(i % 3 === 0){
      result.push(i);
    }
  }

  return result;

  //在这里写入代码
}

module.exports = choose_multiples_of_three;
