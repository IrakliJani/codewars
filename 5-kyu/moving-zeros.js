// http://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
  return [].concat.apply([], arr.reduce(function (v, c) { return (c !== 0 ? v[0].push(c) : v[1].push(c)) && v; }, [[], []]));
};
