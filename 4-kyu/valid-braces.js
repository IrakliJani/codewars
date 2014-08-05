function validBraces(braces){
  return braces
  .split('')
  .reduce(function (list, brace) {
    if ('}])'.indexOf(brace) !== -1)
      if ({ '}': '{', ']': '[', ')': '(' }[brace] === list[0])
        list.shift()
      else
        return [false]
    else
      list.unshift(brace);
    return list;
  }, [])
  .length === 0;
}
