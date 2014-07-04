// http://www.codewars.com/kata/5303229f1f5c12ef39000061/train/javascript

Object.prototype.random = function() {
  return this.toRandomArray()[0];
};

Object.prototype.toRandomArray = function() {
  function object_values(object, values) {
    Object.keys(object).forEach(function (key) {
      typeof object[key] === 'object'
        ? object_values(object[key], values)
        : values.push(object[key]);
    });
    return values;
  }

  return object_values(this, []).sort(function() {
    return 0.5 - Math.random();
  });
};
