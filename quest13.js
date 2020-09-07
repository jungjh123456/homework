var result = '';

for(let i = 0; i <= 5; i++){
  for(let j = 5; j > i; j--){

      result = result + '*';
   
  }
  result = result + '\n'
}

console.log(result)