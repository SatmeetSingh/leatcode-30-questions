/*
 Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Constraints:
-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"
*/

const counter = function (n) {
  return function () {
    console.log(n++);
  };
};

const a = counter(10);
a();
a();
a();
a();
a();
a();
a();
