// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

//  arr is a valid JSON array
// fn is a function that returns a number
// 1 <= arr.length <= 5 * 105

function Sorting(arr, fn) {
  const arr1 = arr.map((item) => [fn(item), item]);
  arr1.sort((a, b) => a[0] - b[0]);
  const sortedarr = arr1.map((item) => item[1]);
  return sortedarr;
}

console.log(Sorting([5, 4, 1, 2, 3], (x) => x));
