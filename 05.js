/*
5) Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Constraints:
0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a number   */

function Array(arr, fn) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const elem = fn(arr[i], i);
    newArr.push(elem);
  }
  return newArr;
}

const a = Array([1, 2, 3, 4], function plusI(n, i) {
  return n + i;
});
console.log(a);

const b = Array([1, 2, 3, 4], function plusI(n) {
  return n + 1;
});
console.log(b);
