// http://www.codewars.com/kata/52f78966747862fc9a0009ae/train/javascript

function calc(expr) {
  return expr
  .split(' ')
  .reduce(function (stack, input) {
    if (/\d/.test(input)) {
      return stack.push(+input) && stack
    } else {
      var b = stack.pop(), a = stack.pop();

      switch (input) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(a / b); break;
      }

      return stack;
    }
  }, [])
  .slice(-1)
  [0] || 0
}
