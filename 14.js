/*  Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.

arr is a valid JSON array
2 <= JSON.stringify(arr).length <= 105
1 <= size <= arr.length + 1  */

function CheckedArray(arr, size) {
  let newArr = [];
  while (arr.length > size) {
    let arr1 = arr.splice(0, size);
    newArr.push(arr1);
  }
  return [...newArr, arr];
}

const a = CheckedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 4);
console.log(a);
