// http://www.codewars.com/kata/52829c5fe08baf7edc00122b/train/javascript

Array.prototype.numberOfOccurrences = function(number) {
  return this.reduce(function (previous, current) {
    return (current === number) ? ++previous : previous;
  }, 0);
};
