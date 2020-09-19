function toWeirdCase(s) {
  var result = [];
  var str  = s.split(' ');
  console.log(str);
  for(var i = 0; i < str.length; i++){
    var newArr = [];
    for(var j = 0; j < str[i].split('').length; j++){
      if(j%2) newArr.push(str[i].split('')[j].toUpperCase())
      else newArr.push(str[i].split('')[j])
    }
    result.push(newArr.join(''))
   
  }
  return result.join(' ');

}

console.log(toWeirdCase('my name is lee'));