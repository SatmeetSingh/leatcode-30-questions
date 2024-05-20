/*
 Write a function createHelloWorld. It should return a new function that always returns "Hello World".

 Constraints:
0 <= args.length <= 10
 */

function createHelloWorld() {
  return function (...args) {
    return 'Hello World';
  };
}

const a = createHelloWorld();

console.log(a(2, {}, 'satmeet'));
console.log(a());
