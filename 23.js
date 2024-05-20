// 23)Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.

// functions is an array of functions that returns promises
// 1 <= functions.length <= 10

function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    let res = Array(functions.length);
    let length = functions.length;

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((result) => {
          res[i] = result;
          length--;
          if (length === 0) resolve(res);
        })
        .catch(reject);
    }
  });
}

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log);
