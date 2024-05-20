// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.
// arr is a valid JSON array
// 0 <= arr.length <= 1000

function EnhancedArr(arr) {
  if (arr.length === 0) return -1;
  return arr[arr.length - 1];
}

const a = EnhancedArr([1, 2, 3, 4, 5, 6, 7, 8]);
const b = EnhancedArr([]);
console.log(a, b);
