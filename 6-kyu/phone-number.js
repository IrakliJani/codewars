// http://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(n){
  return '(' + n.slice(0, 3).join('') + ') ' + n.slice(3, 6).join('') + '-' + n.slice(6, 10).join('');
}
