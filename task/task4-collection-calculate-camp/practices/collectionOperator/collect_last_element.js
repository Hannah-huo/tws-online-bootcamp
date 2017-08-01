'use strict';

function collect_last_element(collection) {
  let target = collection.pop();
  return [target];
}

module.exports = collect_last_element;
