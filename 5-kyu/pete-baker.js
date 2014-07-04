// http://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  var min = Number.MAX_VALUE;
  Object.keys(recipe).forEach(function (ingredient) {
    var div = Math.floor(available[ingredient] / recipe[ingredient]);
    if (! div) return min = 0;
    min = min > div ? div : min;
  });
  return min; 
}
