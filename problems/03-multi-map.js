/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/

function multiMap(val, n, cb) {
  // Your code here
  // if (typeof val == 'number') {
  //   let product = val
  //   product *= Math.pow(10, n)
  //   return product
  // }
  // else if (typeof val == 'string') {
  //   let str = val
  //   for (let i = 1; i < n; i++){
  //     str += cb('')
  //   }
  //   return cb(str)
  // }
  for (let i = 0; i < n; i++){
    // console.log('This is i: ' + i)
    val = cb(val)
    // console.log('This is value: ' + val)
  }
  return val
}

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = multiMap;
} catch(e) {
  return null;
}
