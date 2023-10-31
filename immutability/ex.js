"use strict";

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(list, number) {
  if (!list.includes(number)) {
    list = [number, ...list];
    list.sort(function asc(a, b) {
      return a - b;
    });
  }
  return list;
}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
  luckyLotteryNumbers = pickNumber(
    Object.freeze(luckyLotteryNumbers),
    lotteryNum()
  );
}

console.log(luckyLotteryNumbers);
