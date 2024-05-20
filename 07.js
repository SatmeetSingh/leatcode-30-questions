/*   Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

0 <= nums.length <= 1000
0 <= nums[i] <= 1000
0 <= init <= 1000
*/
const reducer = function (arr, fn, init) {
  let val = init;
  for (let i = 0; i < arr.length; i++) {
    val = fn(val, arr[i]);
  }
  return val;
};

const a = reducer(
  [1, 2, 3, 4, 5],
  function sum(accum, curr) {
    return accum + curr;
  },
  10
);

console.log(a);
