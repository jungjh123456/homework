function binarySearch(array, target) {
  var start = 0;
  var end = array.length-1;


  while(start <= end) {
    var mid = Math.floor((start + end) / 2);
    if( array[mid] === target) return mid;
    else if(array[mid] > target) end = mid -1;
    else if(array[mid] < target) start = mid + 1;
    
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