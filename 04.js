/*    Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

Constraints:
-1000 <= init <= 1000
0 <= calls.length <= 1000
calls[i] is one of "increment", "decrement" and "reset"      */

function createCounter(init) {
  let init1 = init;
  return {
    increment: function () {
      init1 += 1;
      return init1;
    },
    decrement: function () {
      init1 -= 1;
      return init1;
    },
    reset: function () {
      init1 = init;
      return init1;
    },
  };
}

const a = createCounter(12);
console.log(a.increment());
console.log(a.increment());
console.log(a.reset());

console.log(a.decrement());
console.log(a.decrement());
console.log(a.increment());
