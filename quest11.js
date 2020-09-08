var result = '';

for(var i = 0; i <= 5; i++){
  for(var j = 0; j < i; j++){

      result = result + '*';
   
  }
  result = result + '\n'
}

console.log(result)
// for(var i = 0; i < 5; i++){
//   switch(i) {
//     case 0: result = result+'*\n'
//     break;
//     case 1: result = result+'**\n'
//     break;
//     case 2: result = result+'***\n'
//     break;
//     case 3: result = result+'****\n'
//     break;
//     case 4: result = result+'*****\n'
//     break;
//   }

// }

