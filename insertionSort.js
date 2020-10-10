function insertionSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j >= 0; j--) {
      if (array[j+1] < array[j]) { // j = i+1 j=1 -> array[2] < array[1] 
        let temp = array[j+1]; // array[2]작은값 temp에 할당
        array[j+1] = array[j]; // array[2]에 arrray[1] 저장
        array[j] = temp; // array[1]에 temp-> array[2] 저장 
      }  
    }
  }
  return array;
}
console.log(insertionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(insertionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]