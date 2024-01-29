export function replaceAll(_str, _replace, _with){
  let newStr = ''
  for(let i in _str){ 
    if(_str[i] === _replace){
      newStr += _with
    }else {
      newStr += _str[i]
    }
  }
  return newStr
}