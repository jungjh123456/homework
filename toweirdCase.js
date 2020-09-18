function toWeirdCase(s) {
  var str = '';
  for(var i =0; i < s.length; i++){
    if(i%2===0) str += s[i].toUpperCase();
    else str += s[i].toLowerCase();
  }
  return str;
}

console.log(toWeirdCase('hello world'))
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'