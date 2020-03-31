'use strict';
// 勘違いして授業で使ったこのファイルを改変してしまった
// (フィボナッチ数列を求めるコードを、トリボナッチ数列を求めるコードに書き換えた)
// どちらも記述することにした

// フィボナッチ数列
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    } 
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value; 
}

const length = 40;
for (let i = 0; i <= length; i ++) {
    console.log(fib(i));
}


// トリボナッチ数列
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
memo.set(2, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    } 
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value; 
}

const length = 40;
for (let i = 0; i <= length; i ++) {
    console.log(trib(i));
}

