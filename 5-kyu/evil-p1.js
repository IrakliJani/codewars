// http://www.codewars.com/kata/5255892719453db6d2000a23/train/javascript

var anarchy = function () {
  var arr = Object
  .keys([null, null, null, null])
  .filter(function (e) {
    return e != Object.keys([null]);
  });

  return 'I can write numbers like, ' + arr.join(', ') + '.';
}
