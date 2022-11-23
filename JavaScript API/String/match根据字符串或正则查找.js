/* 
match（）
用于在字符串内检索指定的值或找到一个或多个正则表达式的匹配，返回的是由匹配的值组成的数组。

*/

const str = 'hello guys';
console.log(str.match('guys'))  // ["guys"]

// 使用正则匹配字符串
const strs = '1.hello guys, 2.are you ok?';
console.log(strs.match(/\d+/g)) // ["1", "2"]

