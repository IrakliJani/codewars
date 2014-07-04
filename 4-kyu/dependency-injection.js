// http://www.codewars.com/kata/5302d655be2a91068b0001fb/train/javascript

var DI = function (dependency) {
  this.dependency = dependency;
};

DI.prototype.inject = function (func) {
  var $scope = func
  .toString()
  .match(/function *\((.*)\)/)[1]
  .split(',')
  .map(function (e) { return e.trim(); })
  .filter(function (e) { return /^[$\w]+$/.test(e); })
  .map(function (d) { return this.dependency[d]; }, this);

  return function () {
    return func.apply(null, $scope);
  };
};
