// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.
// fn is a function
// args is a valid JSON array
// 1 <= args.length <= 10
// 20 <= t <= 1000
// 10 <= cancelTimeMs <= 1000

function timeOutCancelation(fn, arr, t) {
  const cancelFn = function () {
    clearTimeout(timer);
  };

  const timer = setTimeout(() => {
    fn(...arr);
  }, t);

  return cancelFn;
}

timeOutCancelation((x) => console.log(x + 2), [2], 1000);

//  Canceling the timeout
// const cancelFn = timeOutCancelation((x) => console.log(x + 2), [2], 1000);
// setTimeout(() => {
//   cancelFn();
//   console.log('Timeout canceled');
// }, 500);
