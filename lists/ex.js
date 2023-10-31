"use strict";

// Put your code here! :)
//1
// function one() {
//   return 3;
// }
// function two() {
//   return 10;
// }

//2
function add(x, y) {
  return x + y;
}
// console.log(add(one(), two()));

//3
function add2(fn1, fn2) {
  return add(fn1(), fn2());
}
// console.log(add2(one, two));

//4
function constant(value) {
  return function f() {
    return value;
  };
}

//5
function addn(fns) {
  return fns.reduce(function reducer(composedFn, fn) {
    return function f() {
      return add2(composedFn, fn);
    };
  })();
}

var values = [0, 1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9];

console.log(
  addn(
    values
      .reduce(function reducer(newList, num) {
        if (!~newList.indexOf(num)) return newList.concat(num);
        return a;
      }, [])
      .filter(function filterer(v) {
        return v % 2 == 0;
      })
      .map(constant)
  )
);
