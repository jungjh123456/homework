var result = '';

for(var i = 0; i < 5; i++){
  for(var j = 0; j < i; j++){

      result =  result + ' ';
   
  }
  for(var k = 5; k > i; k--){
    result = result + '*';
  }
 
  result = result + '\n'
}

console.log(result)