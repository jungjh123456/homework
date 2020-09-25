function isSorted(array) {
  let isArr = true;
  for(let i = 0; i< array.length; i++) {
    if(array[i] < array[i+1])isSorted(array[i+1]);
    else if(array[i] > array[i+1]) isArr = false;
  }
  return isArr;
}
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([2, 3, 4, 1, 5])); // false