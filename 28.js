// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function

Array.prototype.groupBy = function (fn) {
  return this.reduce((group, item) => {
    const key = fn(item);
    console.log(key);
    if (!group[key]) {
      group[key] = [];
    }
    group[key].push(item);
    return group;
  }, {});
};

const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (num) => num % 2 === 0;

const a = numbers.groupBy(isEven);
console.log(a);
