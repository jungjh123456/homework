var result = '';

for(var i = 0; i <= 5; i++){
  for(var j = 5; j > i; j--){

      result = result + '*';
   
  }
  result = result + '\n'
}

console.log(result)