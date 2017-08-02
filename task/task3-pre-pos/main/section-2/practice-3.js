'use strict';

module.exports = function countSameElements(collection) {
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        var num = collection[i];
        if (num.indexOf('-') !== -1) {
            var kvPair = collection[i].split('-');
            result.push({
                name: kvPair[0],
                summary:parseInt(kvPair[1])
            });
        } else if (num.indexOf(':') !== -1) {
            var kvPair = collection[i].split(':');
            result.push({
                name: kvPair[0],
                summary: parseInt(kvPair[1])
            });
        } else if (num.indexOf('[') != -1) {
            //var splitNum = num.split('');
            //var summary = parseInt(num[2] + num[3]);

            //var name = num[0];
            result.push({
                name: num[0],
                summary: parseInt(num.substring(num.indexOf('[')+1,num.indexOf(']')))
            });
        } else {
            //findInResult 需要自己实现,定义一个函数，查找collection的字母是否已经被收集
            if (!findInResult(result, num)) {
                result.push({name: num, summary: 1});
            } else {
                var k = result.find(function(r){
                    return r.name === num;
                });
                k.summary++;
            }
        }
    }
    //let's build together
    var finalResult = [];
    for (var i = 0; i < result.length; i++) {
        var k = result[i].name;
        var v = result[i].summary;
        if (findInResult(finalResult, k)) {
            var tobeAdded = finalResult.find(r => k === r.name);
            tobeAdded.summary += parseInt(v);
        } else {
            finalResult.push({name: k, summary: v});
        }
    }
    return finalResult;
}

function findInResult(result, num) {
    for (var i = 0; i < result.length; i++) {
            if (result[i].name ===  num) {
            return true;
        }
    }
}
