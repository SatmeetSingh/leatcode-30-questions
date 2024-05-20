// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

class TimeLimitedCache {
  constructor() {
    this.map = new Map();
  }

  set(key, value, duration) {
    const alreadyExist = this.map.get(key);
    if (alreadyExist) {
      clearTimeout(alreadyExist.timeout);
    }
    const timeout = setTimeout(() => {
      this.map.delete(key);
    }, duration);

    this.map.set(key, { value, timeout });
    return Boolean(alreadyExist);
  }

  get(key) {
    if (this.map.has(key)) {
      return this.map.get(key).value;
    }
    return -1;
  }

  count() {
    return this.map.size;
  }
}

const cache = new TimeLimitedCache();
cache.set(1, 10, 2000);
cache.set(2, 20, 5000);
cache.set(3, 30, 3000);

console.log(cache.get(1));
console.log(cache.get(2));
console.log(cache.get(3));
console.log(cache.get(4));
