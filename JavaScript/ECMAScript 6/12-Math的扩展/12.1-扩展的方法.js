/*
   Math.trunc(小数)：截取小数里的整数部分；

   Math.sign()：判断正负数和零，若是负数返回-1，整数返回1，零返回0或-0

   Math.cbrt()：开立方；

   ...
*/
console.log("---- Math.trunc()----");
console.log(Math.trunc(4.55555));       //输出：4

console.log("---- Math.sign()----");
console.log(Math.sign(15));     //输出：1
console.log(Math.sign(-15));     //输出：-1
console.log(Math.sign(0));     //输出：0
console.log(Math.sign(-0));     //输出：-0

console.log("---- Math.cbrt()----");
console.log(Math.cbrt(27));     //输出：3

