var result = '';

for(var i = 0; i < 5; i++){
  for(var j = 5; j > i; j--){

      result =  result + ' ';
   
  }
  for(var k = 0; k <= i; k++){
    result = result + '*';
  }
 
  result = result + '\n'
}

console.log(result)