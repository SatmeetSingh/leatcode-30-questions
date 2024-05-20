/*  Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

obj is a valid JSON object or array
2 <= JSON.stringify(obj).length <= 105 */

function ObjArr(arr) {
  if (Array.isArray(arr)) {
    return arr.length === 0;
  } else if (typeof arr === 'object') {
    return Object.keys(arr).length === 0;
  }
}

const a = ObjArr([1, 2, 4, 4]);
const b = ObjArr([]);
const c = ObjArr({ 1: 2, 3: 4 });
const d = ObjArr({});
console.log(a, b, c, d);
