'use strict';

function double_to_one(collection) {
  var result = [];
  for(let item of collection){
    if(typeof item === 'number'){
      result.push(item)
    }else if(typeof item === 'object'){
      for(let i of item){
        result.push(i)
      }
    }
  }

  return result;

  //在这里写入代码
}

module.exports = double_to_one;
