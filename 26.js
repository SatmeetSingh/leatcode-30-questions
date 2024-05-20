// Given an object or array obj, return a compact object.

// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

function compactObject(obj) {
  if (Array.isArray(obj)) {
    let arr = [];
    for (var i = 0; i < obj.length; i++) {
      if (obj[i]) {
        arr.push(typeof obj[i] === 'object' ? compactObject(obj[i]) : obj[i]);
      }
      return arr;
    }
  } else {
    for (const [key, value] of Object.entries(obj)) {
      if (!value) {
        delete obj[key];
      } else if (typeof value === 'object') {
        obj[key] = compactObject(value);
      }
    }
    return obj;
  }
}

// Example usage:
const obj = {
  a: 1,
  b: null,
  c: {
    d: 2,
    e: 0,
    f: {
      g: 3,
      h: undefined,
      i: [4, null, '', 5],
    },
  },
};

const compactedObj = compactObject(obj);
console.log(compactedObj);
