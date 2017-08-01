'use strict';

function get_integer_interval_2(number_a, number_b) {
  let result = []
  if(number_a<number_b){
    result = collectResult(number_a, number_b);
  }else if(number_a>number_b){
    result = collectResultReverse(number_a, number_b);
  }else{
    if(number_a%2==0){
      result.push(number_a);
    }
  }
  return result;
}

function collectResult(lower, upper){
  let ary = [];
  for (var i = lower; i <= upper; i++) {
    if(i % 2 == 0){
      ary.push(i);
    }
  }
  return ary;
}

function collectResultReverse(upper, lower){
  let ary = [];
  for (var i = upper; i >= lower; i++) {
    if(i % 2 == 0){
      ary.push(i);
    }
  }
  return ary;
}
module.exports = get_integer_interval_2;
