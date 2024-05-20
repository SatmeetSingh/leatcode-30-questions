/* 
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

calls is a valid JSON array
1 <= calls.length <= 10
1 <= calls[i].length <= 100
2 <= JSON.stringify(calls).length <= 1000  */

function calledOnce(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
}

let fn = (a, b, c) => a * b * c;
let onceFn = calledOnce(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined
