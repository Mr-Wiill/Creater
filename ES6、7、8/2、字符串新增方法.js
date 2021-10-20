/*  
    includes()：返回布尔值，表示是否找到了参数字符串；
    startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部；
    endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部；
    repeat()：方法返回一个新字符串，表示将原字符串重复n次；
    padStart():用于头部补全；
    padEnd()：用于尾部补全；
    trimStart()：消除字符串头部的空格；
    trimEnd()：消除尾部的空格；
    replaceAll()：一次性替换所有匹配；replace()只能替换第一个匹配；
    
*/

/*1、 includes()、 startsWith()和endsWith()*/
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

// 这三个方法都支持第二个参数，表示开始搜索的位置。
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false


/*2、 repeat() */

'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""

// 参数如果是小数，会被取整。
'na'.repeat(2.9) // "nana"  

// 如果repeat的参数是负数或者Infinity，会报错


/* 3、padStart()，padEnd() */

'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'


/* 4、trimStart()、 trimEnd()*/

const trimStr = '  abc  ';

trimStr.trim() // "abc"
trimStr.trimStart() // "abc  "
trimStr.trimEnd() // "  abc"