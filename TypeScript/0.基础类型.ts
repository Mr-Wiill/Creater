/* 布尔值 */
let isDone: boolean = false;


/* 数字 */
let decLiteral: number = 20;
let hexLiteral: number = 0xf00d;        // 十六进制
let binaryLiteral: number = 0b1010;     // 二进制
let octalLiteral: number = 0o744;       // 八进制


/* 字符串 */
let strName: string = "Dalon";
strName = "smith";
let sentence: string = `Hello, my name is ${ strName }.I'll be ${ decLiteral + 1 } years old next month.`;     // 使用模版字符串


/* 数组 */
let list1: number[] = [1, 2, 3];         // 方式一 在元素类型后面接上 []
let list2: Array<number> = [1, 2, 3];    // 方式二 使用数组泛型，Array<元素类型>


/* 
元组 Tuple 
元组是数组的拓展，表示一个已知元素数量和类型的数组，元素的类型不必相同；
*/
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Erro r

// 当访问一个越界的元素，会使用联合类型替代：
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
x[6] = true; // Error, 布尔不是(string | number)类型


/* 
枚举
*/