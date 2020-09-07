var result = 0;
  
for(var i = 0; i < 20; i++){
  if(i%2 === 0 || i%3 === 0){
    result = result + i;
  }
}

console.log(result)