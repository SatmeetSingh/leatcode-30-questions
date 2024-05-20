// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

//  0 <= nums.length <= 1000
// 0 <= nums[i] <= 1000
// Note: nums is the array passed to the constructor

class ArrayWrapper {
  constructor(arr) {
    this.arr = arr;
  }
  Sum() {
    return this.arr.reduce((sum, num) => sum + num);
  }
  String() {
    return `[${this.arr}]`;
  }
}

const obj = new ArrayWrapper([1, 2, 3, 4, 5]);
const obj1 = new ArrayWrapper([1, 2, 3, 4, 5]);
const val = obj.String();
const val1 = obj.Sum() + obj1.Sum();
console.log(val, val1);
