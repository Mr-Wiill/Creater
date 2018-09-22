/*
    次方数：2**3    //2的3次方

    安全整数：(-2^53-1, 2^53-1)范围内；

    检测安全整数：Number.isSafeInteger(检测的数)

    最大安全整数：Number.MAX_SAFE_INTEGER

    最小安全整数：Number.MIN_SAFE_INTEGER

*/

/*例1:次方数*/
console.log(2**3);      //输出：8


/*例2：检测安全整数*/
let a = 2**53;
let b = 2**53-1;
let c = -(2**53);
let d = -(2**53-1);
console.log(Number.isSafeInteger(a));   //false
console.log(Number.isSafeInteger(b));   //true
console.log(Number.isSafeInteger(c));   //false
console.log(Number.isSafeInteger(d));   //true

console.log(Number.MAX_SAFE_INTEGER);   //最大安全整数，9007199254740991
console.log(Number.MIN_SAFE_INTEGER);   //最小安全整数，-9007199254740991