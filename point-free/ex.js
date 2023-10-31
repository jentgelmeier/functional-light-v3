"use strict";

function not(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

function when(fn) {
  return function (predicate) {
    return function (...args) {
      if (predicate(...args)) {
        return output(...args);
      }
    };
  };
}

//******************************** */

function isShortEnough(str) {
  return str.length <= 5;
}

var printIf = when(output);
var output = console.log.bind(console);
var isLongEnough = not(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1); // Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2); // Hello World
