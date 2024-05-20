// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

function memoize(fn) {
  let cache = {};
  return function (...args) {
    // let n = args[0]
    let n = JSON.stringify(args);
    if (n in cache) {
      return cache[n];
    } else {
      // let result = fn(n)
      let result = fn.apply(this, args);
      cache[n] = result;
      return result;
    }
  };
}

const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);

const a = memoize(sum);

const b = memoize(fib);
const c = memoize(factorial);
console.log(a(2, 3));

console.log(a(2, 3));
console.log(b(5));
console.log(b(6));
console.log(c(5));
console.log(c(4));
