// 21)Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

// 0 <= inputs.length <= 10
// 0 <= t <= 1000
// fn returns a promise

const AsyncFunc = function (fn, t) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);

      fn(...args)
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
};

const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const a = AsyncFunc(fn, 50);
a(100).catch(console.log);
const b = AsyncFunc(fn, 150);
b(100).then(console.log).catch(console.log);
