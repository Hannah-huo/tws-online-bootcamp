'use strict';

function collect_max_number(collection) {
  let max = 0;
  //在这里写入代码
  for(let i of collection){
    if(i > max){
      max = i;
    }
  }

  return max;
}

module.exports = collect_max_number;
