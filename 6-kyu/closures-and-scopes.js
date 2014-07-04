// http://www.codewars.com/kata/526ec46d6f5e255e150002d1/train/javascript

function createFunctions(n) {
  var callbacks = [];
                   
  for(var i = 0; i < n; i++)
    (function (i) {
      callbacks.push(
        function () {
          return i;
        }
      );
    })(i);
                   
  return callbacks;
}
