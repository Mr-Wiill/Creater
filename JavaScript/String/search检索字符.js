/* 
search（）
用于检索与字符串匹配的子串，返回的是地址,与indexOf()的区别是 search 可根据正则匹配，而 indexOf 只是按字符串匹配的。
*/

const str = 'hello guys';
console.log(str.search('guys'))  // 6
console.log(str.indexOf('guys'))  // 6

// 区别

const string = 'abcdefg.1234';
console.log(string.search(/\./)) // 7（转译之后可以匹配到 . 的位置）
console.log(string.indexOf(/\./)) // -1 （相当于匹配/\./，找不到则返回-1,只能匹配字符串）
