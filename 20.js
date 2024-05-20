// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

// fn is a function
// args is a valid JSON array
// 1 <= args.length <= 10
// 30 <= t <= 100
// 10 <= cancelTimeMs <= 500

const IntervalCancellation = (fn, args, t) => {
  const cancelFn = function () {
    clearInterval(timer);
  };

  fn(...args);
  const timer = setInterval(() => {
    return fn(...args);
  }, t);

  return cancelFn;
};

// IntervalCancellation((x) => console.log(x + 5), [2], 500);
