/*
 3) Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 */

function TestCode(val) {
  return {
    toBe: (val1) => {
      if (val === val1) return true;
      throw new Error('Not Equal');
    },
    notToBe: (val1) => {
      if (val !== val1) return true;
      throw new Error(' Equal');
    },
  };
}

const a = TestCode(10);

const b = a.toBe(10);
const e = a.notToBe(11);
// const c = a.toBe(11);
// const d = a.notToBe(10);
console.log(b);
// console.log(c);
// console.log(d);
console.log(e);
