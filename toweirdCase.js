// function toWeirdCase(s) {
//   var str = '';
//   for(var i =0; i < s.length; i++){
//     if(i%2===0) str += s[i].toUpperCase();

//     else str += s[i].toLowerCase();
//   }
//   return str;
// }

// console.log(toWeirdCase('hello world'))
// console.log(toWeirdCase('my name is lee')); 

function toWeirdCase(s) {
  var result = [];
  var str = s.split(' ');

  for(var i = 0; i < str.length; i++){
    var newArr = [];
    for(var j = 0; j < str[i].split('').length; j++) {
      if(j%2===0) newArr.push(str[i].split('')[j].toUpperCase())
      else newArr.push(str[i].split('')[j])
    }
    result.push(newArr.join(''));
  }
  return result.join(' ');
}
console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'