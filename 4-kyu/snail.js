// http://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

snail = function (array) {
  var snake = [];

  while (true) {
    snake.push.apply(snake, array.shift());
    if (array.length === 0) break;
    array = rotate_left(array);
  }

  return snake;
}

function rotate_left(array) {
  var value = [];

  for(var i = 0; i < array[0].length; i++) value.push([]);
  for(var i = array[0].length - 1, i2 = 0; i >= 0, i2 < array[0].length; i--, i2++)
    for(var j = 0; j < array.length; j++)
      value[i2][j] = array[j][i];
  
  return value;
}
