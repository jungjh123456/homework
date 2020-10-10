function selectionSort(array) {
  for(let i = 0; i<array.length; i++){
      let temp = i;
      for(let j = i; j < array.length; j++){
          if(array[temp] > array[j]){ // j를 순회하면서 최소값 인덱스 temp에 저장 
            temp = j;
          }
      }
      if(temp !== i){ // temp랑 i 가 같지 않을 시
          let sort = array[temp]; // sort변수에 array[temp] 할당
          array[temp] = array[i]; // array[temp]는 기존 array[i]를 할당
          array[i] = sort; // array[i] 에 sort 즉 array[temp]저장
      }
      
  }
  return array;
}
console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]