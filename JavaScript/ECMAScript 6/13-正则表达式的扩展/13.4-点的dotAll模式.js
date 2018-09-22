/*
    ES5的正则表达式里，"." 表示匹配任意字符，但不包括\n;

    dotAll模式：点的全模式，能匹配所以字符，包括\n;
    用法：在正则表达式后面加上s;     如/.\w/s   等于   任意字符+字母或数字或下横杠
*/

/*例1*/
let reg = /^\w+.\w+$/;
let reg1 = /^\w+.\w+$/s;    //dotAll模式

console.log(reg.test('hello-hello'));   //true
console.log(reg.test('hello\nhello'));      //false

console.log(reg1.test('hello\nhello'));      //true