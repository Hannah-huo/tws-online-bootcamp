'use strict';

function collect_all_even(collection) {
  let result = [];
  for(let k of collection){
    if(k%2 === 0){
      result.push(k);
    }
  }
  return result;
}

module.exports = collect_all_even;
