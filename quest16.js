var result = '';

for(var i = 1; i <= 5; i++){
  for(var j = 0; j <= i; j++){

      result =  result + ' ';
   
  }
  for(var j = 5; j >= i; j--){
    result = result + '*';
  }
  for(var j = 4; j >= i; j--){
    result = result + '*';
  }
 
  result = result + '\n'
}

console.log(result)