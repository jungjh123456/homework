function getCount8(){
var string = "";
var count = 0;

for(var i = 1; i <= 10000; i++){
  string += i;
}
for(var i = 0; i<string.length; i++) {
  if(string[i] === '8') count++
}
  return count;
}

console.log(getCount8());