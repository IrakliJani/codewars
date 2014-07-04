// http://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

Array.prototype.square = function () {
  return this.map(function (e) {
    return e * e;
  });
};

Array.prototype.cube = function () {
  return this.map(function (e) {
    return e * e * e;
  });
};

Array.prototype.average = function () {
  return this.sum() / this.length;
};

Array.prototype.sum = function () {
  return this.reduce(function (value, current) {
    return value + current;
  }, 0);
};

Array.prototype.odd = function () {
  return this.filter(function (e) {
    return e % 2;
  });
};

Array.prototype.even = function () {
  return this.filter(function (e) {
    return !(e % 2);
  });
};
