/* Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.  */

function AddPromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then((value) => {
    return value[0] + value[1];
  });
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

AddPromises(promise1, promise2).then((result) => {
  console.log(result);
});
