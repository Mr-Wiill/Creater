/*
    判断是否为非数字：Number.isNaN(判断的数)，若是返回true，否则返回false；

    判断数字(包括正负和小数)：Number.isFinite(判断的数)，返回true 或 false；

    判断整数：Number.isInteger(判断的数)
*/

let a = 12;
let b = -12;
let c = 12.5;
let d = 0;
let str = "string";
console.log("------- 判断非数字-------");
console.log(Number.isNaN(a));       //false
console.log(Number.isNaN(NaN));       //true

console.log("------- 判断数字-------");
console.log(Number.isFinite(a));       //true
console.log(Number.isFinite(b));       //true
console.log(Number.isFinite(c));       //true
console.log(Number.isFinite(d));       //true
console.log(Number.isFinite(str));       //false

console.log("------- 判断整数-------");
console.log(Number.isInteger(a));       //true
console.log(Number.isInteger(b));       //true
console.log(Number.isInteger(c));       //false
console.log(Number.isInteger(d));       //true
