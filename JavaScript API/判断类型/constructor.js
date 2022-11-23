/* 
A.constructor === B
判断左边的变量的构造函数是否等于右边，但是null和undefined没有该属性会报错。

*/

console.log((2).constructor === Number);    // true
console.log((true).constructor === Boolean);    // true
console.log(('str').constructor === String);    // true
console.log(([]).constructor === Array);    // true
console.log((function() {}).constructor === Function);  // true
console.log(({}).constructor === Object);   // true


console.log((null).constructor===null)    // Uncaught TypeError: Cannot read properties of null (reading 'constructor')
console.log((undefined).constructor===undefined)    // Uncaught TypeError: Cannot read properties of undefined (reading 'constructor')
  