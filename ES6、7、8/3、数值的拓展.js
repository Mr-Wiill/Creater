/* 
    1、数值分隔符 
    ES2021，允许 JavaScript 的数值使用下划线（_）作为分隔符。
    日常表示使用1,000,000,000,000  js里用“_”代理“,”  即1_000_000_000_000

    2、Number.isFinite()和Number.isNaN()
    Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
    Number.isNaN()用来检查一个值是否为NaN。

    3、Number.isInteger()
    Number.isInteger()用来判断一个数值是否为整数。

    4、Number.EPSILON
    ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。
    Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。

    5、安全整数和 Number.isSafeInteger() 
    JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
    ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
    Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。

    6、Math.trunc()
    Math.trunc方法用于去除一个数的小数部分，返回整数部分。

    7、Math.sign()
    Math.sign()方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
    参数为正数，返回+1；
    参数为负数，返回-1；
    参数为 0，返回0；
    参数为-0，返回-0;
    其他值，返回NaN。

    8、Math.cbrt()
    Math.cbrt()方法用于计算一个数的立方根。

*/

/* 1、数值分隔符  */

let budget = 1_000_000_000_000;
budget === 10 ** 12     // true

// 这个数值分隔符没有指定间隔的位数，也就是说，可以每三位添加一个分隔符，也可以每一位、每两位、每四位添加一个。
123_00 === 12_300 // true
12345_00 === 123_4500 // true
12345_00 === 1_234_500 // true


/* 2、Number.isFinite()和Number.isNaN() */

Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true


/* 3、Number.isInteger() */
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false

Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false

Number.isInteger(3.0000000000000002) // true


/* 5、安全整数和 Number.isSafeInteger()  */

Math.pow(2, 53) // 9007199254740992

9007199254740992  // 9007199254740992
9007199254740993  // 9007199254740992

Math.pow(2, 53) === Math.pow(2, 53) + 1     // true
// 上面代码中，超出 2 的 53 次方之后，一个数就不精确了。


/*  6、Math.trunc() */

Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0

// 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
Math.trunc('123.456') // 123
Math.trunc(true) //1
Math.trunc(false) // 0
Math.trunc(null) // 0

// 对于空值和无法截取整数的值，返回NaN。
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
Math.trunc(undefined) // NaN