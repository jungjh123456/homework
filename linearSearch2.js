function binarySearch(array, target) {
  var start = 0;
  var end = array.length;
  var mid;
  var i = 0;
  while(i < end) {
    mid = (start + end) / 2;
    if( array[i] === target) return i;
    else if(array[mid] > target) end = end -1;
    else if(array[mid] < target) start = start + 1;
    i++
  }
  return -1;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1